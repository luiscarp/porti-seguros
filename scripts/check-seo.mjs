// QA de SEO (sección 9.1 de la especificación) sobre un build local o una URL de vista previa.
// Uso: node scripts/check-seo.mjs [base]   (base por defecto: http://localhost:3000)
// Revisa cada URL del sitemap como la vería un rastreador sin JavaScript. Sale con código 1 si hay errores.

const BASE = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '')
const SITE_URL = 'https://www.portiseguros.com.mx'
const UA = 'Mozilla/5.0 (compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)'

// URLs anteriores y su destino esperado (next.config.js)
const REDIRECCIONES = {
  '/index': '/',
  '/productos': '/seguros',
  '/segurosvida': '/seguros-de-vida',
  '/seguroauto': '/seguro-de-auto',
  '/serviciopublico': '/seguro-para-taxi',
  '/gastosmedicos': '/gastos-medicos-mayores',
  '/planesretiro': '/plan-personal-de-retiro',
  '/danos': '/seguro-de-danos',
  '/testimonios': '/opiniones',
  '/cotiza': '/cotizar',
  '/privacidad': '/aviso-de-privacidad',
}
const PALABRAS_PROHIBIDAS = ['líderes', 'el más barato', 'garantizado', 'GitHub', 'Your Company', 'Statamic', 'SavvyCal', 'Tuple']
const NO_RAMOS = ['/', '/seguros', '/claudia-pacheco', '/preguntas-frecuentes', '/contacto', '/opiniones', '/cotizar', '/aviso-de-privacidad', '/terminos']
const MIN_PALABRAS_RAMO = 400
const MIN_PALABRAS_VIDA = 1200

const errores = []
const error = (ruta, mensaje) => errores.push(`${ruta}: ${mensaje}`)

const obtener = (ruta, opciones = {}) => fetch(BASE + ruta, { headers: { 'User-Agent': UA }, redirect: 'manual', ...opciones })

const texto = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
const contarPalabras = (html) => texto(html).split(/\s+/).filter(Boolean).length
const todos = (html, re) => [...html.matchAll(re)].map((m) => m[1])
const decodificar = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"')

// 1. Sitemap
const sitemap = await (await obtener('/sitemap.xml')).text()
const rutas = todos(sitemap, /<loc>([^<]+)<\/loc>/g).map((url) => url.replace(SITE_URL, '') || '/')
if (rutas.length === 0) error('/sitemap.xml', 'sin URLs')
const enlacesInternos = new Set()

// 2. Cada página del sitemap
for (const ruta of [...rutas, '/terminos']) {
  const respuesta = await obtener(ruta)
  if (respuesta.status !== 200) {
    error(ruta, `responde ${respuesta.status} (se esperaba 200)`)
    continue
  }
  const html = await respuesta.text()

  const titulos = todos(html, /<title>([^<]*)<\/title>/g)
  if (titulos.length !== 1) error(ruta, `${titulos.length} <title> (se espera 1)`)
  else if (decodificar(titulos[0]).length > 60) error(ruta, `<title> de ${decodificar(titulos[0]).length} caracteres (máx. 60)`)

  const descripciones = todos(html, /<meta name="description" content="([^"]*)"/g)
  if (descripciones.length !== 1) error(ruta, `${descripciones.length} meta description (se espera 1)`)
  else {
    const largo = decodificar(descripciones[0]).length
    if (largo < 120 || largo > 155) error(ruta, `meta description de ${largo} caracteres (120–155)`)
  }

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length
  if (h1 !== 1) error(ruta, `${h1} <h1> (se espera 1)`)

  const canonicals = todos(html, /<link rel="canonical" href="([^"]*)"/g)
  const esperado = SITE_URL + (ruta === '/' ? '/' : ruta)
  if (canonicals.length !== 1 || canonicals[0] !== esperado) error(ruta, `canonical ${canonicals.join(', ') || 'ausente'} (se espera ${esperado})`)

  if (!/<html lang="es-MX"/.test(html)) error(ruta, 'falta lang="es-MX"')

  if (!NO_RAMOS.includes(ruta)) {
    const minimo = ruta === '/seguros-de-vida' ? MIN_PALABRAS_VIDA : MIN_PALABRAS_RAMO
    const palabras = contarPalabras(html)
    if (palabras < minimo) error(ruta, `${palabras} palabras visibles sin JavaScript (mín. ${minimo})`)
  }

  const bloques = todos(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)
  if (bloques.length === 0) error(ruta, 'sin JSON-LD')
  for (const bloque of bloques) {
    try {
      if (JSON.stringify(JSON.parse(bloque)).includes('PENDIENTE')) error(ruta, 'JSON-LD con datos [PENDIENTE]')
    } catch {
      error(ruta, 'JSON-LD no parseable')
    }
  }

  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    const alt = img.match(/\balt="([^"]*)"/)
    // alt="" es válido para imágenes decorativas; se rechazan la ausencia de alt y el alt de plantilla "..."
    if (!alt) error(ruta, `imagen sin alt: ${img.slice(0, 80)}`)
    else if (alt[1].trim() === '...') error(ruta, 'imagen con alt="..."')
  }

  const contenido = texto(html)
  // En producción no debe verse ningún dato pendiente (en previews sí se muestran a propósito)
  if (/PENDIENTE/.test(contenido)) error(ruta, 'texto [PENDIENTE] visible')
  for (const palabra of PALABRAS_PROHIBIDAS) {
    if (contenido.toLowerCase().includes(palabra.toLowerCase())) error(ruta, `palabra prohibida: "${palabra}"`)
  }

  for (const href of todos(html, /href="(\/[^"#?]*)/g)) {
    if (href === '/index') error(ruta, 'enlace a /index')
    if (!/\.(png|ico|webp|jpg|webmanifest|txt|xml)$/.test(href) && !href.startsWith('/_next')) enlacesInternos.add(href)
  }
}

// 3. Enlaces internos
for (const href of enlacesInternos) {
  const respuesta = await obtener(href, { method: 'HEAD' })
  if (respuesta.status !== 200) error(href, `enlace interno responde ${respuesta.status}`)
}

// 4. Redirecciones de URLs anteriores
for (const [origen, destino] of Object.entries(REDIRECCIONES)) {
  const respuesta = await obtener(origen)
  const location = respuesta.headers.get('location') ?? ''
  const llega = location.replace(/^https?:\/\/[^/]+/, '') || '/'
  if (respuesta.status !== 301 || llega !== destino) error(origen, `responde ${respuesta.status} → ${location || '(sin destino)'} (se espera 301 → ${destino})`)
}

// 5. robots.txt y llms.txt
const robots = await (await obtener('/robots.txt')).text()
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) error('/robots.txt', 'sin referencia al sitemap')
if ((await obtener('/llms.txt')).status !== 200) error('/llms.txt', 'no responde 200')

console.log(`Revisadas ${rutas.length + 1} páginas, ${enlacesInternos.size} enlaces internos y ${Object.keys(REDIRECCIONES).length} redirecciones en ${BASE}`)
if (errores.length) {
  console.error(`\n${errores.length} error(es):\n- ${errores.join('\n- ')}`)
  process.exit(1)
}
console.log('OK: sin errores')

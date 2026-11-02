// Genera public/sitemap.xml antes de cada build (script "prebuild" de package.json).
// Solo URLs canónicas: sin redirecciones, sin /api, sin /404 y sin /terminos.
import { readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = 'https://www.portiseguros.com.mx'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

// Páginas fijas; agregar aquí cada página nueva.
const PAGINAS = ['/', '/seguros', '/claudia-pacheco', '/preguntas-frecuentes', '/contacto', '/opiniones', '/cotizar', '/aviso-de-privacidad']

// Un ramo por archivo en content/seguros (el nombre del archivo es el slug).
const RAMOS = readdirSync(join(root, 'content/seguros'))
  .filter((archivo) => archivo.endsWith('.js') && archivo !== 'index.js')
  .map((archivo) => '/' + archivo.replace(/\.js$/, ''))
  .sort()

const lastmod = new Date().toISOString().slice(0, 10)
const urls = [...PAGINAS, ...RAMOS]
  .map((ruta) => `  <url>\n    <loc>${SITE_URL}${ruta === '/' ? '/' : ruta}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(root, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml generado con ${PAGINAS.length + RAMOS.length} URLs`)

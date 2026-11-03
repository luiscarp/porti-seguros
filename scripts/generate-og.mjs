// Genera las imágenes Open Graph (1200×630): public/og/<pagina>.jpg por ruta de content/seo.js
// y public/blog/og/<slug>.jpg por entrada del blog (cualquier estado, para tenerlas listas al publicar).
// Herramienta local: requiere Google Chrome y ImageMagick (magick). Uso: node scripts/generate-og.mjs
// Volver a correrlo cuando cambie un título o se agregue una página.
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PAGE_META } from '../content/seo.js'
import { todasLasEntradas } from '../lib/blog.mjs'

const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const tmp = mkdtempSync(join(tmpdir(), 'og-'))

const dataUri = (archivo, tipo) => `data:${tipo};base64,${readFileSync(join(root, 'public', archivo)).toString('base64')}`
const logo = dataUri('porti-seguros-logo.png', 'image/png')
const foto = dataUri('claudia-pacheco-agente-de-seguros-chihuahua.webp', 'image/webp')

const ogFile = (ruta) => (ruta === '/' ? 'portada' : ruta.slice(1))

const escapar = (texto) => texto.replace(/&/g, '&amp;').replace(/</g, '&lt;')

const trabajos = [
  ...Object.entries(PAGE_META)
    .filter(([ruta]) => ruta !== '/404')
    .map(([ruta, { title }]) => ({ titulo: title.split(' | ')[0], archivo: `og/${ogFile(ruta)}.jpg` })),
  ...todasLasEntradas().map((post) => ({ titulo: post.title, archivo: post.imagen.slice(1), etiqueta: 'Blog' })),
]

for (const { titulo, archivo, etiqueta } of trabajos) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
    * { margin: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; font-family: 'Helvetica Neue', Arial, sans-serif; color: #fff;
      background: linear-gradient(135deg, #0B2E4F 0%, #0A4373 45%, #025596 100%); position: relative; overflow: hidden; }
    .logo { position: absolute; top: 56px; left: 64px; background: #fff; border-radius: 18px; padding: 14px 22px; }
    .logo img { height: 64px; display: block; }
    .etiqueta { position: absolute; left: 64px; top: 176px; font-size: 22px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; color: #FCD34D; }
    h1 { position: absolute; left: 64px; top: 210px; width: 700px; font-size: 64px; line-height: 1.08; font-weight: 800; letter-spacing: -1px; }
    .sub { position: absolute; left: 64px; bottom: 120px; width: 700px; font-size: 26px; color: #D6EAF8; }
    .pie { position: absolute; left: 64px; bottom: 56px; font-size: 24px; font-weight: 700; color: #FCD34D; }
    .foto { position: absolute; right: -40px; top: 85px; width: 460px; height: 460px; border-radius: 50%;
      object-fit: cover; border: 10px solid rgba(255,255,255,.18); }
  </style></head><body>
    <div class="logo"><img src="${logo}"></div>
    ${etiqueta ? `<p class="etiqueta">${etiqueta}</p>` : ''}
    <h1>${escapar(titulo)}</h1>
    <p class="sub">Asesoría personalizada con Claudia Pacheco, agente de seguros desde 2007</p>
    <p class="pie">portiseguros.com.mx · WhatsApp 614 288 4270</p>
    <img class="foto" src="${foto}">
  </body></html>`

  const htmlPath = join(tmp, 'og.html')
  const pngPath = join(tmp, 'og.png')
  writeFileSync(htmlPath, html)
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=1200,630', `--screenshot=${pngPath}`, `file://${htmlPath}`], { stdio: 'ignore' })
  const destino = join(root, 'public', archivo)
  mkdirSync(dirname(destino), { recursive: true })
  execFileSync('magick', [pngPath, '-resize', '1200x630!', '-quality', '82', '-strip', destino])
  console.log(archivo)
}

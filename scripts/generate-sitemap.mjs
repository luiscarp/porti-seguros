// Genera public/sitemap.xml antes de cada build (script "prebuild" de package.json).
// Solo URLs canónicas: sin redirecciones, sin /api, sin /404 y sin /terminos.
import { readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { TESTIMONIOS } from '../content/testimonios.js'
import { MIN_ENTRADAS_CATEGORIA, entradas } from '../lib/blog.mjs'

const SITE_URL = 'https://www.portiseguros.com.mx'
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

// Páginas fijas; agregar aquí cada página nueva.
// /opiniones entra solo cuando hay testimonios publicados (mientras tanto es noindex)
const PAGINAS = ['/', '/seguros', '/claudia-pacheco', '/preguntas-frecuentes', '/contacto', ...(TESTIMONIOS.length ? ['/opiniones'] : []), '/cotizar', '/aviso-de-privacidad']

// Un ramo por archivo en content/seguros (el nombre del archivo es el slug).
const RAMOS = readdirSync(join(root, 'content/seguros'))
  .filter((archivo) => archivo.endsWith('.js') && archivo !== 'index.js')
  .map((archivo) => '/' + archivo.replace(/\.js$/, ''))
  .sort()

// Blog: solo entradas publicadas (lastmod = actualizado) y categorías indexables (3 o más entradas)
const posts = entradas()
const porCategoria = Object.groupBy(posts, (post) => post.categoria)
const BLOG = posts.length
  ? [
      { ruta: '/blog', lastmod: posts.map((p) => p.actualizado).sort().at(-1) },
      ...posts.map((post) => ({ ruta: `/blog/${post.slug}`, lastmod: post.actualizado })),
      ...Object.entries(porCategoria)
        .filter(([, lista]) => lista.length >= MIN_ENTRADAS_CATEGORIA)
        .map(([categoria, lista]) => ({ ruta: `/blog/categoria/${categoria}`, lastmod: lista.map((p) => p.actualizado).sort().at(-1) })),
    ]
  : []

const hoy = new Date().toISOString().slice(0, 10)
const entradasSitemap = [...[...PAGINAS, ...RAMOS].map((ruta) => ({ ruta, lastmod: hoy })), ...BLOG]
const urls = entradasSitemap
  .map(({ ruta, lastmod }) => `  <url>\n    <loc>${SITE_URL}${ruta === '/' ? '/' : ruta}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(root, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml generado con ${entradasSitemap.length} URLs (${BLOG.length} del blog)`)

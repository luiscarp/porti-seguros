// Genera public/blog/rss.xml (RSS 2.0, últimas 20 entradas publicadas) antes de cada build.
// Sin entradas publicadas no se genera el archivo.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { BUSINESS } from '../config/business.js'
import { entradas } from '../lib/blog.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const destino = join(root, 'public/blog/rss.xml')
const escapar = (texto) => texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const fechaRss = (iso) => new Date(`${iso}T12:00:00-06:00`).toUTCString()

const posts = entradas().slice(0, 20)
if (posts.length === 0) {
  rmSync(destino, { force: true })
  console.log('rss.xml: sin entradas publicadas, no se genera')
} else {
  const items = posts
    .map((post) => {
      const url = `${BUSINESS.siteUrl}/blog/${post.slug}`
      return `    <item>
      <title>${escapar(post.h1)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${fechaRss(post.fecha)}</pubDate>
      <description>${escapar(post.respuesta_corta)}</description>
      <author>${BUSINESS.agentName}</author>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog de ${BUSINESS.name}</title>
    <link>${BUSINESS.siteUrl}/blog</link>
    <atom:link href="${BUSINESS.siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Guías de seguros en Chihuahua escritas por ${BUSINESS.agentName}, agente de seguros desde ${BUSINESS.agentSince}.</description>
    <language>es-MX</language>
    <lastBuildDate>${fechaRss(posts.map((p) => p.actualizado).sort().at(-1))}</lastBuildDate>
${items}
  </channel>
</rss>
`
  mkdirSync(dirname(destino), { recursive: true })
  writeFileSync(destino, xml)
  console.log(`rss.xml generado con ${posts.length} entradas`)
}

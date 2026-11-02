// Notifica a IndexNow (Bing y otros buscadores; Bing alimenta a ChatGPT Search) las URLs del sitemap publicado.
// Correrlo DESPUÉS de cada despliegue a producción: node scripts/indexnow.mjs [url ...]
// Sin argumentos envía todas las URLs del sitemap en producción.
// La clave es pública por diseño: se verifica con public/<clave>.txt.

const SITE_URL = 'https://www.portiseguros.com.mx'
const KEY = '17c2444264d35847938630947d1e1586'

let urls = process.argv.slice(2)
if (urls.length === 0) {
  const xml = await (await fetch(`${SITE_URL}/sitemap.xml`)).text()
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

const respuesta = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: urls,
  }),
})

// 200 o 202 = aceptado; 403 = la clave aún no está publicada en el sitio; 422 = URLs de otro host
console.log(`IndexNow: ${respuesta.status} ${respuesta.statusText} (${urls.length} URLs)`)
if (!respuesta.ok) process.exit(1)

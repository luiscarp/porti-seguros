import { NextSeo } from 'next-seo'
import { BUSINESS, absoluteUrl } from '@/config/business'
import { PAGE_META } from '@/content/seo'

// Imagen Open Graph de cada ruta (1200×630), generada con scripts/generate-og.mjs.
const ogImage = (path) => `/og/${path === '/' ? 'portada' : path.slice(1)}.jpg`

// Metadatos por página: título, descripción, canonical y og:url propios de cada ruta.
// Las páginas fijas toman título y descripción de content/seo.js; el blog los pasa con `meta`.
// `articulo` ({ publicado, modificado }) marca la página como og:type=article.
export default function Seo({ path, meta = PAGE_META[path], image = ogImage(path), noindex = false, articulo }) {
  const { title, description } = meta
  const url = absoluteUrl(path)
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={noindex ? undefined : url}
      noindex={noindex}
      openGraph={{
        url,
        title,
        description,
        siteName: BUSINESS.name,
        locale: 'es_MX',
        type: articulo ? 'article' : 'website',
        ...(articulo && {
          article: {
            publishedTime: articulo.publicado,
            modifiedTime: articulo.modificado,
            authors: [absoluteUrl('/claudia-pacheco')],
          },
        }),
        images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
      }}
      twitter={{ cardType: 'summary_large_image' }}
    />
  )
}

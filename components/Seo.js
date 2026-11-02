import { NextSeo } from 'next-seo'
import { BUSINESS, absoluteUrl } from '@/config/business'
import { PAGE_META } from '@/content/seo'

// Imagen Open Graph por defecto hasta tener una por página (T9: /public/og/*.jpg).
const DEFAULT_IMAGE = '/esloganEquipoCompleto.jpg'

// Metadatos por página: título, descripción, canonical y og:url propios de cada ruta.
export default function Seo({ path, image = DEFAULT_IMAGE, noindex = false }) {
  const { title, description } = PAGE_META[path]
  const url = absoluteUrl(path)
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      noindex={noindex}
      openGraph={{
        url,
        title,
        description,
        siteName: BUSINESS.name,
        locale: 'es_MX',
        type: 'website',
        images: [{ url: absoluteUrl(image), alt: title }],
      }}
      twitter={{ cardType: 'summary_large_image' }}
    />
  )
}

import Head from 'next/head'
import { BUSINESS, absoluteUrl, isPending } from '@/config/business'
import { RAMOS } from '@/content/seguros'

// Datos estructurados (schema.org) generados desde config/business y content/seguros.
// Los campos [PENDIENTE] se omiten: un valor de relleno sería un dato falso para Google.

const AGENCIA_ID = absoluteUrl('/#agencia')
const SITIO_ID = absoluteUrl('/#sitio')
const PERSONA_ID = absoluteUrl('/claudia-pacheco#persona')

const DIAS = { Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday' }

const sinPendientes = (valores) => valores.filter((valor) => valor && !isPending(valor))

export function JsonLd({ id, data }) {
  return (
    <Head>
      <script
        key={`jsonld-${id}`}
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  )
}

// InsuranceAgency + WebSite + Person (la ficha completa de la persona va en /claudia-pacheco, C4).
export function grafoGlobal() {
  const { address } = BUSINESS
  const agencia = {
    '@type': 'InsuranceAgency',
    '@id': AGENCIA_ID,
    name: BUSINESS.name,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/porti-seguros-logo.png'),
    image: absoluteUrl('/og/portada.jpg'),
    telephone: BUSINESS.phoneE164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${address.street}, Col. ${address.neighborhood}`,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => DIAS[d]),
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: { '@type': 'City', name: address.city },
    founder: { '@id': PERSONA_ID },
    sameAs: sinPendientes([BUSINESS.social.facebook, BUSINESS.social.instagram, BUSINESS.social.googleMaps]),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Seguros',
      itemListElement: RAMOS.map((ramo) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: ramo.nombre, url: absoluteUrl(`/${ramo.slug}`) },
      })),
    },
  }
  if (!isPending(BUSINESS.email)) agencia.email = BUSINESS.email
  if (!isPending(BUSINESS.legalName)) agencia.legalName = BUSINESS.legalName

  return {
    '@context': 'https://schema.org',
    '@graph': [
      agencia,
      {
        '@type': 'WebSite',
        '@id': SITIO_ID,
        url: absoluteUrl('/'),
        name: BUSINESS.name,
        inLanguage: 'es-MX',
        publisher: { '@id': AGENCIA_ID },
      },
      {
        '@type': 'Person',
        '@id': PERSONA_ID,
        name: BUSINESS.agentName,
        jobTitle: 'Agente de seguros',
        worksFor: { '@id': AGENCIA_ID },
      },
    ],
  }
}

export function migasDePan(migas) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((miga, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: miga.nombre,
      item: absoluteUrl(miga.path),
    })),
  }
}

// Service + FAQPage de una página de ramo. Solo preguntas que se muestran en la página.
export function grafoRamo(ramo) {
  const url = absoluteUrl(`/${ramo.slug}`)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#servicio`,
        name: ramo.h1,
        serviceType: ramo.nombre,
        url,
        provider: { '@id': AGENCIA_ID },
        areaServed: { '@type': 'City', name: BUSINESS.address.city },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#preguntas`,
        // Las respuestas con [DATO PENDIENTE] se omiten del marcado hasta que Claudia confirme el dato.
        mainEntity: ramo.faq.filter((item) => !item.respuesta.includes('PENDIENTE')).map((item) => ({
          '@type': 'Question',
          name: item.pregunta,
          acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
        })),
      },
    ],
  }
}

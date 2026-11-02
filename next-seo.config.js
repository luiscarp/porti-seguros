// next-seo.config.js — valores globales; cada página define los suyos con components/Seo.js
import { BUSINESS } from './config/business'

export default {
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    site_name: BUSINESS.name,
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [{ rel: 'icon', href: '/logopestana.png' }],
}

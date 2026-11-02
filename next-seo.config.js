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
  additionalMetaTags: [{ name: 'theme-color', content: '#025596' }],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', href: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
}

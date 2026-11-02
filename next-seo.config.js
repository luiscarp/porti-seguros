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
  additionalMetaTags: [
    { name: 'theme-color', content: '#025596' },
    // Verificación de Search Console y Bing Webmaster (solo si están configuradas)
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION ? [{ name: 'google-site-verification', content: process.env.NEXT_PUBLIC_GSC_VERIFICATION }] : []),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION ? [{ name: 'msvalidate.01', content: process.env.NEXT_PUBLIC_BING_VERIFICATION }] : []),
  ],
  additionalLinkTags: [
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', href: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
}

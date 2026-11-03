// Google Analytics 4: ID y eventos de conversión. Sin NEXT_PUBLIC_GA_ID no se carga nada.
import { RAMOS } from '@/content/seguros'

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const SLUGS_RAMO = new Set(RAMOS.map((ramo) => `/${ramo.slug}`))

export function track(evento, parametros = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', evento, parametros)
  }
}

// Página y ramo (o artículo del blog) desde los que ocurre el evento (nunca datos personales).
export function contexto() {
  const pagina = window.location.pathname
  const articulo = pagina.match(/^\/blog\/(?!categoria\/)([^/]+)$/)
  if (articulo) return { pagina: 'blog', articulo: articulo[1] }
  return SLUGS_RAMO.has(pagina) ? { pagina, ramo: pagina.slice(1) } : { pagina }
}

// Un solo listener para todos los enlaces del sitio: WhatsApp, teléfono y cómo llegar.
export function rastrearClics(e) {
  const enlace = e.target.closest?.('a[href]')
  if (!enlace) return
  const href = enlace.getAttribute('href')
  if (href.startsWith('https://wa.me/')) track('click_whatsapp', contexto())
  else if (href.startsWith('tel:')) track('click_telefono', contexto())
  else if (href.includes('maps.app.goo.gl') || href.includes('google.com/maps')) track('click_como_llegar', contexto())
}

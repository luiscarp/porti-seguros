// Datos canónicos del negocio (NAP). Única fuente para footer, contacto, JSON-LD y metadatos.
// Lo marcado como [PENDIENTE] debe confirmarlo Claudia antes de publicar.

export const BUSINESS = {
  name: 'PorTi Seguros', // SIEMPRE así: "PorTi" junto, T mayúscula
  legalName: '[PENDIENTE]', // razón social si existe
  agentName: 'Claudia Pacheco',
  agentSince: 2007, // agente de seguros desde 2007
  cnsfLicense: '[PENDIENTE]', // número y tipo de cédula CNSF
  phoneDisplay: '614 288 4270',
  phoneE164: '+526142884270',
  whatsapp: '526142884270',
  email: '[PENDIENTE]',
  address: {
    street: 'Av. Antonio F. Carbonel 4107, Int. 1',
    neighborhood: 'San Felipe V Etapa',
    postalCode: '31203',
    city: 'Chihuahua',
    region: 'Chihuahua',
    regionCode: 'CHH',
    country: 'MX',
  },
  geo: { lat: 28.650992, lng: -106.1008367 },
  hours: [
    // según Google Maps; confirmar con Claudia
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr'], opens: '09:00', closes: '18:00' },
    { days: ['Sa'], opens: '10:00', closes: '14:00' },
  ],
  insurersCount: '[PENDIENTE: confirmar si son +20]',
  social: {
    facebook: 'https://www.facebook.com/ChihuahuaSeguros',
    instagram: '[PENDIENTE: URL real del perfil]',
    googleMaps: 'https://maps.app.goo.gl/KJdJJAhK91t8cVjd9',
    googleReviews: '[PENDIENTE: enlace "Pedir reseñas" del Perfil de Negocio, https://g.page/r/…/review]',
  },
  siteUrl: 'https://www.portiseguros.com.mx',
}

export const isPending = (value) => typeof value === 'string' && value.startsWith('[PENDIENTE')

// Los textos [PENDIENTE] solo se muestran en previews y en desarrollo, para revisión;
// en producción se ocultan. Se define en el build desde next.config.js (VERCEL_ENV / NODE_ENV).
export const MOSTRAR_PENDIENTES = process.env.NEXT_PUBLIC_MOSTRAR_PENDIENTES === '1'

// Quita marcas "[PENDIENTE…]" / "[DATO PENDIENTE…]" de un texto cuando no deben mostrarse.
export const sinPendientes = (texto) =>
  MOSTRAR_PENDIENTES ? texto : texto.replace(/\s*\[(DATO )?PENDIENTE[^\]]*\]/g, '').trim()

// Muestra un dato del negocio o, si está pendiente y estamos en producción, nada.
export const mostrable = (valor) => !isPending(valor) || MOSTRAR_PENDIENTES

export const yearsOfExperience = () => new Date().getFullYear() - BUSINESS.agentSince

export const absoluteUrl = (path = '/') => BUSINESS.siteUrl + (path === '/' ? '/' : path)

export const whatsappLink = (text) =>
  `https://wa.me/${BUSINESS.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

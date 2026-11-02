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
  },
  siteUrl: 'https://www.portiseguros.com.mx',
}

export const isPending = (value) => typeof value === 'string' && value.startsWith('[PENDIENTE')

export const yearsOfExperience = () => new Date().getFullYear() - BUSINESS.agentSince

export const absoluteUrl = (path = '/') => BUSINESS.siteUrl + (path === '/' ? '/' : path)

export const whatsappLink = (text) =>
  `https://wa.me/${BUSINESS.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

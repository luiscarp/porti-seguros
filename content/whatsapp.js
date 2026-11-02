// Mensaje prellenado de WhatsApp por página, para saber desde dónde llegó cada prospecto.
// BORRADORES — Claudia puede ajustar el texto; conviene conservar la referencia a la página.
import { useRouter } from 'next/router'

const MENSAJE_GENERAL = 'Hola, me puedes ayudar para cotizar un seguro.'

export const MENSAJES_WHATSAPP = {
  '/': 'Hola, me puedes ayudar para cotizar un seguro (página de inicio).',
  '/seguros': 'Hola, vi la página de *Seguros* y quiero asesoría para elegir el adecuado.',
  '/seguros-de-vida': 'Hola, vi la página de *Seguros de Vida* y quiero asesoría.',
  '/seguro-uber-didi': 'Hola, manejo para plataforma y quiero cotizar un seguro (página Uber/DiDi).',
  '/seguro-para-taxi': 'Hola, tengo un taxi y quiero cotizar un seguro (página Taxi).',
  '/seguro-de-auto': 'Hola, quiero cotizar un seguro de auto (página Seguro de Auto).',
  '/gastos-medicos-mayores': 'Hola, quiero información sobre un seguro de *Gastos Médicos Mayores*.',
  '/plan-personal-de-retiro': 'Hola, quiero información sobre un *Plan Personal de Retiro (PPR)*.',
  '/seguro-de-danos': 'Hola, quiero cotizar un seguro para mi casa o negocio (página Daños).',
  '/responsabilidad-civil': 'Hola, necesito un seguro de *Responsabilidad Civil*.',
  '/seguro-eventos-masivos': 'Hola, necesito un seguro de responsabilidad civil para un *evento*.',
  '/seguro-flotillas': 'Hola, quiero cotizar un seguro para la *flotilla* de mi empresa.',
  '/seguro-de-viaje': 'Hola, quiero cotizar un seguro de *viaje*.',
  '/opiniones': 'Hola, vi las opiniones de sus clientes y quiero asesoría (página Opiniones).',
  '/cotizar': 'Hola, quiero cotizar un seguro (página Cotizar).',
  '/claudia-pacheco': 'Hola, Claudia, vi tu página y quiero asesoría.',
  '/preguntas-frecuentes': 'Hola, tengo una duda sobre seguros (página Preguntas frecuentes).',
  '/contacto': 'Hola, quiero agendar una asesoría (página Contacto).',
}

export const mensajeWhatsapp = (path) => MENSAJES_WHATSAPP[path] ?? MENSAJE_GENERAL

// Ruta actual sin query ni hash. En SSG asPath ya es la ruta real (p. ej. /seguros-de-vida, no /[ramo]).
export function usePaginaActual() {
  const { asPath } = useRouter()
  return asPath.split(/[?#]/)[0]
}

export function useMensajeWhatsapp() {
  return mensajeWhatsapp(usePaginaActual())
}

// Genera public/llms.txt antes de cada build (script "prebuild"): resumen en Markdown para asistentes de IA.
// Se arma desde config/business.js, content/seo.js y content/seguros/*.js; omite los datos [PENDIENTE].
import { readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { BUSINESS, isPending } from '../config/business.js'
import { PAGE_META } from '../content/seo.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const url = (ruta) => BUSINESS.siteUrl + (ruta === '/' ? '/' : ruta)

const archivos = readdirSync(join(root, 'content/seguros')).filter((a) => a.endsWith('.js') && a !== 'index.js')
const ramos = await Promise.all(archivos.map(async (a) => (await import(pathToFileURL(join(root, 'content/seguros', a)))).default))
// Vida primero: es la especialidad del despacho
ramos.sort((a, b) => (a.slug === 'seguros-de-vida' ? -1 : b.slug === 'seguros-de-vida' ? 1 : a.nombre.localeCompare(b.nombre, 'es')))

const DIAS = { Mo: 'lunes', Tu: 'martes', We: 'miércoles', Th: 'jueves', Fr: 'viernes', Sa: 'sábado', Su: 'domingo' }
const horario = BUSINESS.hours
  .map(({ days, opens, closes }) => `${days.length > 1 ? `${DIAS[days[0]]} a ${DIAS[days[days.length - 1]]}` : DIAS[days[0]]} de ${opens} a ${closes}`)
  .join('; ')
const { address } = BUSINESS
const enlace = (ruta, nombre) => `- [${nombre}](${url(ruta)}): ${PAGE_META[ruta].description}`

const lineas = [
  `# ${BUSINESS.name}`,
  '',
  `> ${BUSINESS.name} es una agencia de seguros en ${address.city}, ${address.region}, México, dirigida por ${BUSINESS.agentName}, agente de seguros desde ${BUSINESS.agentSince}. Ofrece asesoría personalizada para elegir seguros de vida, auto, plataformas (Uber, DiDi, InDrive), taxi, gastos médicos mayores, retiro (PPR), daños, responsabilidad civil, eventos, flotillas y viaje, comparando opciones de distintas aseguradoras. Su filosofía es "Proteger antes que vender".`,
  '',
  '## Contacto',
  '',
  `- Dirección: ${address.street}, Col. ${address.neighborhood}, C.P. ${address.postalCode}, ${address.city}, ${address.region}`,
  `- Teléfono y WhatsApp: ${BUSINESS.phoneDisplay} (${BUSINESS.phoneE164})`,
  `- Horario: ${horario}`,
  ...(isPending(BUSINESS.email) ? [] : [`- Correo: ${BUSINESS.email}`]),
  `- Sitio web: ${url('/')}`,
  `- Mapa: ${BUSINESS.social.googleMaps}`,
  '',
  '## Seguros',
  '',
  ...ramos.map((ramo) => enlace(`/${ramo.slug}`, ramo.nombre)),
  '',
  '## Sobre nosotros',
  '',
  enlace('/claudia-pacheco', BUSINESS.agentName),
  enlace('/preguntas-frecuentes', 'Preguntas frecuentes'),
  enlace('/opiniones', 'Opiniones de clientes'),
  enlace('/contacto', 'Contacto'),
  enlace('/cotizar', 'Cotizar un seguro'),
  '',
  '## Notas',
  '',
  '- Las coberturas, sumas aseguradas, deducibles y primas dependen de la aseguradora y de la póliza contratada; el sitio no publica precios.',
  `- Zona de servicio principal: ${address.city}, ${address.region}; también atiende a distancia por WhatsApp y teléfono.`,
  '',
]

writeFileSync(join(root, 'public/llms.txt'), lineas.join('\n'))
console.log(`llms.txt generado con ${ramos.length} ramos`)

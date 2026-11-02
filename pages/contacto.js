import { ClockIcon, MapPinIcon, PhoneIcon, ChatBubbleLeftRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import CtaButtons from '@/components/CtaButtons'
import { JsonLd, migasDePan } from '@/components/JsonLd'
import { BUSINESS, MOSTRAR_PENDIENTES, isPending, whatsappLink } from '@/config/business'
import { mensajeWhatsapp } from '@/content/whatsapp'

const DIAS = { Mo: 'Lunes', Tu: 'Martes', We: 'Miércoles', Th: 'Jueves', Fr: 'Viernes', Sa: 'Sábado', Su: 'Domingo' }
const horario = ({ days, opens, closes }) =>
  `${days.length > 1 ? `${DIAS[days[0]]} a ${DIAS[days[days.length - 1]].toLowerCase()}` : DIAS[days[0]]}: ${opens} a ${closes}`

function Dato({ icono: Icono, titulo, children }) {
  return (
    <div className='flex gap-4'>
      <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100'>
        <Icono className='h-6 w-6' aria-hidden='true' />
      </span>
      <div>
        <h2 className='text-lg font-bold'>{titulo}</h2>
        <div className='mt-1 leading-7'>{children}</div>
      </div>
    </div>
  )
}

export default function Contacto() {
  const { address } = BUSINESS
  return (
    <div>
      <Seo path='/contacto' />
      <JsonLd id='migas' data={migasDePan([{ nombre: 'Inicio', path: '/' }, { nombre: 'Contacto', path: '/contacto' }])} />
      <Navbar />

      <main>
        <PageHero
          titulo='Contacto'
          intro={[`Visítanos en la Col. San Felipe, en ${address.city}, o escríbenos por WhatsApp. Te atendemos de lunes a sábado.`]}
          migas={[{ nombre: 'Inicio', href: '/' }, { nombre: 'Contacto' }]}
        >
          <CtaButtons className='mt-8' />
        </PageHero>

        <div className='mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-2'>
          <div className='space-y-8'>
            <Dato icono={MapPinIcon} titulo='Dirección'>
              <address className='not-italic'>
                {address.street}<br />
                Col. {address.neighborhood}, C.P. {address.postalCode}<br />
                {address.city}, {address.region}
              </address>
              {MOSTRAR_PENDIENTES && <p className='mt-2 text-slate-600'>[PENDIENTE: referencias para llegar, por ejemplo calles cercanas o un punto conocido.]</p>}
              <a href={BUSINESS.social.googleMaps} target='_blank' rel='noopener noreferrer' className='mt-2 inline-block font-semibold text-brand-700 hover:underline'>
                Cómo llegar en Google Maps →
              </a>
            </Dato>

            <Dato icono={ClockIcon} titulo='Horario'>
              <ul>
                {BUSINESS.hours.map((h) => (
                  <li key={h.days.join()}>{horario(h)}</li>
                ))}
              </ul>
            </Dato>

            <Dato icono={PhoneIcon} titulo='Teléfono'>
              <a href={`tel:${BUSINESS.phoneE164}`} className='font-semibold text-brand-700 hover:underline'>{BUSINESS.phoneDisplay}</a>
            </Dato>

            <Dato icono={ChatBubbleLeftRightIcon} titulo='WhatsApp'>
              <a href={whatsappLink(mensajeWhatsapp('/contacto'))} target='_blank' rel='noopener noreferrer' className='font-semibold text-brand-700 hover:underline'>
                {BUSINESS.phoneDisplay}
              </a>
            </Dato>

            {!isPending(BUSINESS.email) && (
              <Dato icono={EnvelopeIcon} titulo='Correo'>
                <a href={`mailto:${BUSINESS.email}`} className='font-semibold text-brand-700 hover:underline'>{BUSINESS.email}</a>
              </Dato>
            )}
          </div>

          <iframe
            className='h-96 w-full rounded-2xl border border-slate-200 shadow-sm lg:h-full lg:min-h-[480px]'
            title='Mapa de la oficina de PorTi Seguros en Chihuahua'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.405464122056!2d-106.10082354946199!3d28.650814896327724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea437103ecc5b9%3A0xc7c0c950a9cb4843!2sPorti%20Seguros!5e0!3m2!1ses!2smx!4v1706236223308!5m2!1ses!2smx'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
}

import Image from 'next/image'
import Logos from '@/components/Logos'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import TarjetasRamos from '@/components/TarjetasRamos'
import CtaButtons from '@/components/CtaButtons'
import CtaBanda from '@/components/CtaBanda'
import Pasos from '@/components/Pasos'
import { BUSINESS, yearsOfExperience } from '@/config/business'

export default function Home() {
  const { address } = BUSINESS
  const confianza = [
    { valor: `Más de ${yearsOfExperience()} años`, texto: `asesorando familias y negocios desde ${BUSINESS.agentSince}` },
    { valor: '+20', texto: 'aseguradoras para comparar opciones' },
    { valor: 'Cédula CNSF', texto: 'agente autorizada por la Comisión Nacional de Seguros y Fianzas' },
  ]

  return (
    <div className='flex flex-col'>
      <Seo path='/' />
      <Navbar />

      <main>
        <section className='bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white'>
          <div className='mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-widest text-brand-200'>
                {address.city}, {address.region} · Desde {BUSINESS.agentSince}
              </p>
              <h1 className='mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl'>
                Agente de seguros en Chihuahua: <span className='text-amber-300'>protegemos lo que más te importa</span>
              </h1>
              <p className='mt-6 text-lg leading-8 text-brand-50'>
                Asesoría personalizada con {BUSINESS.agentName}, agente de seguros desde {BUSINESS.agentSince}. Comparamos opciones de distintas aseguradoras, te explicamos cada cobertura con claridad y te acompañamos cuando necesitas usar tu seguro.
              </p>
              <CtaButtons className='mt-8' />
            </div>
            <div className='relative mx-auto w-full max-w-md'>
              <Image
                src='/claudia-pacheco-agente-de-seguros-chihuahua.webp'
                alt={`${BUSINESS.agentName}, agente de seguros en ${address.city}`}
                width={899}
                height={900}
                priority
                sizes='(min-width: 1024px) 448px, 100vw'
                className='rounded-3xl shadow-2xl ring-1 ring-white/20'
              />
            </div>
          </div>
        </section>

        <section aria-label='Por qué confiar en nosotros' className='border-b border-slate-200 bg-white'>
          <dl className='mx-auto grid max-w-6xl gap-8 px-4 py-10 text-center sm:grid-cols-3'>
            {confianza.map((item) => (
              <div key={item.valor}>
                <dt className='font-display text-2xl font-bold text-brand-700 md:text-3xl'>{item.valor}</dt>
                <dd className='mt-1 text-sm text-slate-600'>{item.texto}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby='nuestros-seguros' className='bg-slate-50 py-16'>
          <div className='mx-auto mb-10 max-w-3xl px-4 text-center'>
            <h2 id='nuestros-seguros' className='text-3xl font-bold md:text-4xl'>Nuestros seguros</h2>
            <p className='mt-4 text-lg leading-8'>
              Protección para tu familia, tu patrimonio y tu negocio. Elige un seguro para conocer qué cubre y qué considerar antes de contratar.
            </p>
          </div>
          <TarjetasRamos />
        </section>

        <section aria-labelledby='proteger' className='py-16'>
          <div className='mx-auto max-w-6xl px-4'>
            <div className='max-w-3xl'>
              <h2 id='proteger' className='text-3xl font-bold md:text-4xl'>Proteger antes que vender</h2>
              <p className='mt-4 text-lg leading-8'>
                No empezamos por el precio: empezamos por entender qué necesitas proteger. Así trabajamos contigo, antes y después de contratar.
              </p>
            </div>
            <Pasos />
          </div>
        </section>

        <Logos />

        <section aria-labelledby='visitanos' className='py-16'>
          <div className='mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2'>
            <div>
              <h2 id='visitanos' className='text-3xl font-bold md:text-4xl'>Visítanos en la Col. San Felipe</h2>
              <address className='mt-6 text-lg not-italic leading-8'>
                {address.street}<br />
                Col. {address.neighborhood}, C.P. {address.postalCode}<br />
                {address.city}, {address.region}
              </address>
              <p className='mt-4 leading-7'>Lunes a viernes de 9:00 a 18:00 · Sábado de 10:00 a 14:00</p>
              <a
                href={BUSINESS.social.googleMaps}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-6 inline-block rounded-full bg-brand-700 px-6 py-3 font-bold text-white hover:bg-brand-800'
              >
                Cómo llegar
              </a>
            </div>
            <iframe
              className='h-80 w-full rounded-2xl border border-slate-200 shadow-sm'
              title='Mapa de la oficina de PorTi Seguros en Chihuahua'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.405464122056!2d-106.10082354946199!3d28.650814896327724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea437103ecc5b9%3A0xc7c0c950a9cb4843!2sPorti%20Seguros!5e0!3m2!1ses!2smx!4v1706236223308!5m2!1ses!2smx'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </section>

        <CtaBanda />
      </main>

      <Footer />
    </div>
  )
}

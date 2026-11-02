import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import CtaButtons from '@/components/CtaButtons'
import CtaBanda from '@/components/CtaBanda'
import Logos from '@/components/Logos'
import Pasos from '@/components/Pasos'
import { JsonLd, migasDePan, persona } from '@/components/JsonLd'
import { BUSINESS, MOSTRAR_PENDIENTES, mostrable, yearsOfExperience } from '@/config/business'

// BORRADOR (C4) — pendiente de revisión de Claudia. Lo marcado [PENDIENTE] lo completa ella.

const ESPECIALIDADES = [
  { texto: 'Seguros de vida y protección familiar', href: '/seguros-de-vida' },
  { texto: 'Planeación de retiro (PPR)', href: '/plan-personal-de-retiro' },
  { texto: 'Gastos médicos mayores', href: '/gastos-medicos-mayores' },
  { texto: 'Seguros de auto, taxi y plataformas', href: '/seguro-de-auto' },
]

function Seccion({ titulo, children }) {
  return (
    <section className='mt-12'>
      <h2 className='text-2xl font-bold md:text-3xl'>{titulo}</h2>
      {children}
    </section>
  )
}

export default function ClaudiaPacheco() {
  const { address } = BUSINESS
  return (
    <div>
      <Seo path='/claudia-pacheco' />
      <JsonLd id='persona' data={persona()} />
      <JsonLd id='migas' data={migasDePan([{ nombre: 'Inicio', path: '/' }, { nombre: BUSINESS.agentName, path: '/claudia-pacheco' }])} />
      <Navbar />

      <main>
        <header className='bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white'>
          <div className='mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-5 lg:py-20'>
            <div className='lg:col-span-3'>
              <nav aria-label='Ruta de navegación' className='mb-6 text-sm text-brand-100'>
                <Link href='/' className='hover:text-white hover:underline'>Inicio</Link>
                <span aria-hidden='true' className='mx-2'>/</span>
                <span aria-current='page' className='text-white'>{BUSINESS.agentName}</span>
              </nav>
              <h1 className='text-3xl font-bold leading-tight text-white md:text-5xl'>
                {BUSINESS.agentName}, agente de seguros en {address.city}
              </h1>
              <p className='mt-5 text-lg leading-8 text-brand-50'>
                Agente de seguros desde {BUSINESS.agentSince} y fundadora de {BUSINESS.name}. Su especialidad son los seguros de vida, la protección familiar y la planeación del retiro.
              </p>
              <CtaButtons className='mt-8' />
            </div>
            <div className='mx-auto w-full max-w-sm lg:col-span-2'>
              <Image
                src='/claudia-pacheco-agente-de-seguros-chihuahua.webp'
                alt={`${BUSINESS.agentName}, agente de seguros en ${address.city}`}
                width={899}
                height={900}
                priority
                sizes='(min-width: 1024px) 384px, 100vw'
                className='rounded-3xl shadow-2xl ring-1 ring-white/20'
              />
            </div>
          </div>
        </header>

        <div className='mx-auto max-w-4xl px-4 pb-4'>
          <Seccion titulo='Trayectoria'>
            <p className='mt-4 text-lg leading-8'>
              Desde {BUSINESS.agentSince}, es decir, desde hace más de {yearsOfExperience()} años, Claudia asesora a familias, profesionistas y negocios de {address.city} para elegir y usar sus seguros. A lo largo de ese tiempo ha acompañado a sus clientes no solo al contratar, sino también en renovaciones y en los momentos en que han tenido que usar su póliza.
            </p>
            {MOSTRAR_PENDIENTES && <p className='mt-4 text-lg leading-8'>[PENDIENTE: Claudia cuenta en sus palabras cómo empezó y por qué fundó {BUSINESS.name}.]</p>}
          </Seccion>

          <Seccion titulo='Especialidad'>
            <p className='mt-4 text-lg leading-8'>
              Su enfoque principal son los seguros de vida: ayudar a cada familia a definir cuánta protección necesita, a quién proteger y por cuánto tiempo. También asesora en:
            </p>
            <ul className='mt-5 space-y-3'>
              {ESPECIALIDADES.map((item) => (
                <li key={item.href} className='flex gap-3 leading-7'>
                  <CheckCircleIcon className='mt-0.5 h-6 w-6 shrink-0 text-brand-500' aria-hidden='true' />
                  <Link href={item.href} className='font-semibold text-brand-700 hover:underline'>{item.texto}</Link>
                </li>
              ))}
            </ul>
          </Seccion>

          <Seccion titulo='Proteger antes que vender'>
            <p className='mt-4 text-lg leading-8'>
              La filosofía de {BUSINESS.name} es sencilla: primero entender qué necesitas proteger y después buscar la opción adecuada. Eso significa comparar alternativas de distintas aseguradoras, explicar cada cobertura con claridad y no recomendar algo que no necesitas.
            </p>
          </Seccion>
        </div>

        <section className='mt-12 bg-slate-50 py-16'>
          <div className='mx-auto max-w-6xl px-4'>
            <h2 className='text-2xl font-bold md:text-3xl'>Cómo trabaja con sus clientes</h2>
            <Pasos />
          </div>
        </section>

        <div className='mx-auto max-w-4xl px-4 pb-12'>
          <Seccion titulo='Cédula de agente'>
            <p className='mt-4 text-lg leading-8'>
              Claudia cuenta con cédula de agente de seguros otorgada por la Comisión Nacional de Seguros y Fianzas (CNSF).
            </p>
            {mostrable(BUSINESS.cnsfLicense) && <p className='mt-2 text-lg leading-8'>Cédula CNSF: {BUSINESS.cnsfLicense}</p>}
            <p className='mt-2 leading-7'>
              Puedes verificar a cualquier agente de seguros en el sitio de la{' '}
              <a href='https://www.gob.mx/cnsf' target='_blank' rel='noopener noreferrer' className='font-semibold text-brand-700 underline'>CNSF</a>.
              {MOSTRAR_PENDIENTES && ' [PENDIENTE: enlace directo al buscador de agentes de la CNSF]'}
            </p>
          </Seccion>

          {MOSTRAR_PENDIENTES && (
            <Seccion titulo='Certificaciones y capacitación'>
              <p className='mt-4 text-lg leading-8'>[PENDIENTE: certificaciones o capacitaciones relevantes de Claudia.]</p>
            </Seccion>
          )}

          <Seccion titulo='Zona de servicio'>
            <p className='mt-4 text-lg leading-8'>
              Atiende principalmente en {address.city}, {address.region}, en la oficina de Col. {address.neighborhood} ({address.street}). También puede asesorarte a distancia por WhatsApp o por teléfono.
            </p>
            <Link href='/contacto' className='mt-4 inline-block font-semibold text-brand-700 hover:underline'>Ver dirección y horario →</Link>
          </Seccion>
        </div>

        <Logos />
        <CtaBanda />
      </main>

      <Footer />
    </div>
  )
}

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import { BUSINESS, whatsappLink } from '@/config/business'

const PASOS = [
  { titulo: 'Identificamos tus necesidades', texto: 'Platicamos contigo para entender qué quieres proteger, tu presupuesto y tus prioridades.' },
  { titulo: 'Analizamos alternativas', texto: 'Comparamos opciones de distintas aseguradoras y te explicamos sus diferencias con palabras sencillas.' },
  { titulo: 'Te damos una recomendación personalizada', texto: 'Te decimos qué opción creemos que te conviene y por qué, para que decidas con información.' },
  { titulo: 'Te acompañamos', texto: 'Seguimos contigo en las renovaciones y, sobre todo, cuando necesitas usar tu seguro.' },
]

function Botones({ whatsappText }) {
  return (
    <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
      <a
        href={whatsappLink(whatsappText)}
        target='_blank'
        rel='noopener noreferrer'
        className='rounded-lg bg-green-700 px-5 py-3 text-center font-bold text-white hover:bg-green-800'
      >
        Escríbenos por WhatsApp
      </a>
      <a
        href={`tel:${BUSINESS.phoneE164}`}
        className='rounded-lg bg-white px-5 py-3 text-center font-bold text-sky-900 hover:bg-sky-100'
      >
        Llámanos al {BUSINESS.phoneDisplay}
      </a>
    </div>
  )
}

function Seccion({ seccion }) {
  const Lista = seccion.listaOrdenada ? 'ol' : 'ul'
  return (
    <section className='mt-10'>
      <h2 className='text-2xl font-bold text-amber-400'>{seccion.titulo}</h2>
      {seccion.parrafos?.map((parrafo) => (
        <p key={parrafo} className='mt-4 leading-7'>{parrafo}</p>
      ))}
      {seccion.subsecciones?.map((sub) => (
        <div key={sub.titulo} className='mt-6'>
          <h3 className='text-xl font-semibold'>{sub.titulo}</h3>
          <p className='mt-2 leading-7'>{sub.texto}</p>
        </div>
      ))}
      {seccion.lista && (
        <Lista className={`mt-4 space-y-2 pl-6 leading-7 ${seccion.listaOrdenada ? 'list-decimal' : 'list-disc'}`}>
          {seccion.lista.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Lista>
      )}
      {seccion.cierre && <p className='mt-4 leading-7'>{seccion.cierre}</p>}
    </section>
  )
}

export default function RamoPage({ ramo, relacionados }) {
  return (
    <div>
      <Seo path={`/${ramo.slug}`} />
      <Navbar producto='True'></Navbar>

      <main className='mx-auto max-w-3xl px-4 py-10 text-white'>
        <nav aria-label='Ruta de navegación' className='text-sm text-sky-100'>
          <ol className='flex flex-wrap gap-1'>
            <li><Link href='/' className='hover:underline'>Inicio</Link> ›</li>
            <li><Link href='/seguros' className='hover:underline'>Seguros</Link> ›</li>
            <li aria-current='page'>{ramo.nombre}</li>
          </ol>
        </nav>

        <h1 className='mt-6 text-3xl font-bold md:text-4xl'>{ramo.h1}</h1>
        {ramo.intro.map((parrafo) => (
          <p key={parrafo} className='mt-4 text-lg leading-8'>{parrafo}</p>
        ))}
        <Botones whatsappText={ramo.whatsappText} />

        {ramo.secciones.map((seccion) => (
          <Seccion key={seccion.titulo} seccion={seccion} />
        ))}

        <section className='mt-10'>
          <h2 className='text-2xl font-bold text-amber-400'>Cómo trabajamos</h2>
          <ol className='mt-4 space-y-4'>
            {PASOS.map((paso, i) => (
              <li key={paso.titulo}>
                <h3 className='text-xl font-semibold'>{i + 1}. {paso.titulo}</h3>
                <p className='mt-1 leading-7'>{paso.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className='mt-10'>
          <h2 className='text-2xl font-bold text-amber-400'>Preguntas frecuentes</h2>
          {ramo.faq.map((item) => (
            <div key={item.pregunta} className='mt-6'>
              <h3 className='text-xl font-semibold'>{item.pregunta}</h3>
              <p className='mt-2 leading-7'>{item.respuesta}</p>
            </div>
          ))}
        </section>

        <section className='mt-10'>
          <h2 className='text-2xl font-bold text-amber-400'>Seguros relacionados</h2>
          <ul className='mt-4 list-disc space-y-2 pl-6'>
            {relacionados.map((rel) => (
              <li key={rel.slug}>
                <Link href={`/${rel.slug}`} className='underline hover:text-amber-300'>{rel.nombre}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className='mt-10 rounded-xl bg-sky-900 p-6'>
          <h2 className='text-2xl font-bold'>Agenda una asesoría sin compromiso</h2>
          <p className='mt-3 leading-7'>
            Escríbenos por WhatsApp o llámanos. Te atendemos en nuestra oficina de la Col. San Felipe, en {BUSINESS.address.city}, o a distancia.
          </p>
          <Botones whatsappText={ramo.whatsappText} />
        </section>

        <p className='mt-10 text-sm leading-6 text-sky-100'>
          Las coberturas, sumas aseguradas, deducibles y primas dependen de la aseguradora y de la póliza contratada. Te entregamos las condiciones generales antes de contratar.
        </p>
      </main>

      <Footer></Footer>
    </div>
  )
}

import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import CtaButtons from '@/components/CtaButtons'
import CtaBanda from '@/components/CtaBanda'
import Pasos from '@/components/Pasos'
import IconoRamo from '@/components/IconoRamo'
import { JsonLd, grafoRamo, migasDePan } from '@/components/JsonLd'

function Seccion({ seccion }) {
  return (
    <section className='mt-12'>
      <h2 className='text-2xl font-bold md:text-3xl'>{seccion.titulo}</h2>
      {seccion.parrafos?.map((parrafo) => (
        <p key={parrafo} className='mt-4 text-lg leading-8'>{parrafo}</p>
      ))}
      {seccion.subsecciones && (
        <div className='mt-6 grid gap-4 sm:grid-cols-2'>
          {seccion.subsecciones.map((sub) => (
            <div key={sub.titulo} className='rounded-2xl border border-slate-200 bg-slate-50 p-5'>
              <h3 className='text-lg font-bold'>{sub.titulo}</h3>
              <p className='mt-2 leading-7'>{sub.texto}</p>
            </div>
          ))}
        </div>
      )}
      {seccion.lista && seccion.listaOrdenada && (
        <ol className='mt-5 space-y-3'>
          {seccion.lista.map((item, i) => (
            <li key={item} className='flex gap-3 leading-7'>
              <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white' aria-hidden='true'>{i + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )}
      {seccion.lista && !seccion.listaOrdenada && (
        <ul className='mt-5 space-y-3'>
          {seccion.lista.map((item) => (
            <li key={item} className='flex gap-3 leading-7'>
              <CheckCircleIcon className='mt-0.5 h-6 w-6 shrink-0 text-brand-500' aria-hidden='true' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {seccion.cierre && <p className='mt-5 text-lg leading-8'>{seccion.cierre}</p>}
    </section>
  )
}

export default function RamoPage({ ramo, relacionados }) {
  return (
    <div>
      <Seo path={`/${ramo.slug}`} />
      <JsonLd id='ramo' data={grafoRamo(ramo)} />
      <JsonLd id='migas' data={migasDePan([{ nombre: 'Inicio', path: '/' }, { nombre: 'Seguros', path: '/seguros' }, { nombre: ramo.nombre, path: `/${ramo.slug}` }])} />
      <Navbar />

      <main>
        <PageHero
          titulo={ramo.h1}
          intro={ramo.intro}
          icono={<IconoRamo slug={ramo.slug} className='h-7 w-7' />}
          migas={[{ nombre: 'Inicio', href: '/' }, { nombre: 'Seguros', href: '/seguros' }, { nombre: ramo.nombre }]}
        >
          <CtaButtons className='mt-8' />
        </PageHero>

        <div className='mx-auto max-w-4xl px-4 pb-4'>
          {ramo.secciones.map((seccion) => (
            <Seccion key={seccion.titulo} seccion={seccion} />
          ))}
        </div>

        <section className='mt-16 bg-slate-50 py-16'>
          <div className='mx-auto max-w-6xl px-4'>
            <h2 className='text-2xl font-bold md:text-3xl'>Cómo trabajamos</h2>
            <Pasos />
          </div>
        </section>

        <div className='mx-auto max-w-4xl px-4'>
          <section className='mt-16'>
            <h2 className='text-2xl font-bold md:text-3xl'>Preguntas frecuentes</h2>
            <div className='mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200'>
              {ramo.faq.map((item) => (
                <div key={item.pregunta} className='p-6'>
                  <h3 className='text-lg font-bold'>{item.pregunta}</h3>
                  <p className='mt-2 leading-7'>{item.respuesta}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='mt-16'>
            <h2 className='text-2xl font-bold md:text-3xl'>Seguros relacionados</h2>
            <ul className='mt-6 grid gap-4 sm:grid-cols-3'>
              {relacionados.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/${rel.slug}`}
                    className='flex h-full items-center justify-between gap-2 rounded-2xl border border-slate-200 p-5 font-semibold text-slate-900 hover:border-brand-200 hover:text-brand-700 hover:shadow-md'
                  >
                    {rel.nombre} <span aria-hidden='true'>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <CtaBanda />

        <p className='mx-auto max-w-4xl px-4 pb-12 text-sm leading-6 text-slate-500'>
          Las coberturas, sumas aseguradas, deducibles y primas dependen de la aseguradora y de la póliza contratada. Te entregamos las condiciones generales antes de contratar.
        </p>
      </main>

      <Footer />
    </div>
  )
}

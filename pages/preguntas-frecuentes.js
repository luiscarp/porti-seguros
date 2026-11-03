import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import CtaBanda from '@/components/CtaBanda'
import { JsonLd, migasDePan, preguntasFrecuentes } from '@/components/JsonLd'
import { FAQ_GENERALES, FAQ_POR_TEMA } from '@/content/faq'
import { getRamo } from '@/content/seguros'

const TEMAS = [{ id: 'generales', tema: 'Generales', preguntas: FAQ_GENERALES }, ...FAQ_POR_TEMA]

export default function PreguntasFrecuentes() {
  return (
    <div>
      <Seo path='/preguntas-frecuentes' />
      <JsonLd id='preguntas' data={preguntasFrecuentes('/preguntas-frecuentes', TEMAS.flatMap((t) => t.preguntas))} />
      <JsonLd id='migas' data={migasDePan([{ nombre: 'Inicio', path: '/' }, { nombre: 'Preguntas frecuentes', path: '/preguntas-frecuentes' }])} />
      <Navbar />

      <main>
        <PageHero
          titulo='Preguntas frecuentes sobre seguros'
          intro={['Respuestas claras a las dudas más comunes sobre seguros de vida, auto, gastos médicos, retiro y siniestros. Si tu pregunta no está aquí, escríbenos y la resolvemos contigo.']}
          migas={[{ nombre: 'Inicio', href: '/' }, { nombre: 'Preguntas frecuentes' }]}
        />

        <div className='mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-4'>
          <nav aria-label='Temas' className='lg:col-span-1'>
            <ul className='flex flex-wrap gap-2 lg:sticky lg:top-28 lg:flex-col'>
              {TEMAS.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className='block rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-200 hover:text-brand-700 lg:rounded-lg'>
                    {t.tema}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className='space-y-14 lg:col-span-3'>
            {TEMAS.map((t) => (
              <section key={t.id} id={t.id} className='scroll-mt-28'>
                <h2 className='text-2xl font-bold md:text-3xl'>{t.tema}</h2>
                <div className='mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200'>
                  {t.preguntas.map((item) => (
                    <div key={item.pregunta} className='p-6'>
                      <h3 className='text-lg font-bold'>{item.pregunta}</h3>
                      <p className='mt-2 leading-7'>{item.respuesta}</p>
                      {item.ramo && (
                        <Link href={`/${item.ramo}`} className='mt-3 inline-block text-sm font-semibold text-brand-700 hover:underline'>
                          Más sobre {getRamo(item.ramo).nombre.toLowerCase()} →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <CtaBanda />
      </main>

      <Footer />
    </div>
  )
}

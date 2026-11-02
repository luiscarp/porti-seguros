import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import CtaButtons from '@/components/CtaButtons'
import IconoRamo from '@/components/IconoRamo'
import { RAMOS } from '@/content/seguros'

// Página 404 en español: no se indexa y ofrece los ramos principales y contacto.
export default function NoEncontrada() {
  return (
    <div>
      <Seo path='/404' image='/og/portada.jpg' noindex />
      <Navbar />

      <main className='mx-auto max-w-4xl px-4 py-16 text-center'>
        <p className='font-display text-sm font-bold uppercase tracking-widest text-brand-600'>Error 404</p>
        <h1 className='mt-3 text-3xl font-bold md:text-5xl'>No encontramos esta página</h1>
        <p className='mx-auto mt-5 max-w-2xl text-lg leading-8'>
          Es posible que la dirección haya cambiado. Estos son nuestros seguros principales, o escríbenos y con gusto te ayudamos.
        </p>
        <CtaButtons tono='claro' className='mt-8 justify-center' />

        <h2 className='mt-14 text-2xl font-bold'>Nuestros seguros</h2>
        <ul className='mt-6 grid gap-3 text-left sm:grid-cols-2'>
          {RAMOS.map((ramo) => (
            <li key={ramo.slug}>
              <Link href={`/${ramo.slug}`} className='flex items-center gap-3 rounded-xl border border-slate-200 p-4 font-semibold text-slate-900 hover:border-brand-200 hover:text-brand-700'>
                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700'>
                  <IconoRamo slug={ramo.slug} className='h-5 w-5' />
                </span>
                {ramo.nombre}
              </Link>
            </li>
          ))}
        </ul>
        <Link href='/' className='mt-10 inline-block font-semibold text-brand-700 hover:underline'>← Volver al inicio</Link>
      </main>

      <Footer />
    </div>
  )
}

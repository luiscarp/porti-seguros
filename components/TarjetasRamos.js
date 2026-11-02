import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import IconoRamo from '@/components/IconoRamo'
import { RAMOS } from '@/content/seguros'
import { PAGE_META } from '@/content/seo'

// Una tarjeta (H3) por ramo, cada uno una sola vez. Vida va primero y destacada: es la especialidad del despacho.
export default function TarjetasRamos() {
  const [vida, ...resto] = RAMOS
  const tiposVida = vida.secciones.find((s) => s.titulo === 'Tipos de seguro de vida')?.subsecciones ?? []

  return (
    <ul className='mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3'>
      <li className='sm:col-span-2 lg:col-span-3'>
        <Link
          href={`/${vida.slug}`}
          className='group relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-500 p-8 text-white shadow-lg transition hover:shadow-xl md:flex-row md:items-center md:p-10'
        >
          <IconoRamo slug={vida.slug} className='pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-white/10' />
          <div className='relative flex-1'>
            <span className='inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30'>
              <IconoRamo slug={vida.slug} className='h-7 w-7' />
            </span>
            <p className='mt-6 text-xs font-bold uppercase tracking-widest text-brand-100'>Nuestra especialidad</p>
            <h3 className='mt-2 text-3xl font-bold text-white md:text-4xl'>{vida.nombre}</h3>
            <p className='mt-4 max-w-xl text-lg leading-8 text-brand-50'>{PAGE_META[`/${vida.slug}`].description}</p>
            <span className='mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-bold text-brand-800'>
              Conoce los seguros de vida
              <ArrowRightIcon className='h-5 w-5 transition group-hover:translate-x-1' aria-hidden='true' />
            </span>
          </div>
          {tiposVida.length > 0 && (
            <ul className='relative grid gap-2 md:w-72'>
              {tiposVida.map((tipo) => (
                <li key={tipo.titulo} className='rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/20'>
                  {tipo.titulo}
                </li>
              ))}
            </ul>
          )}
        </Link>
      </li>

      {resto.map((ramo) => (
        <li key={ramo.slug}>
          <Link
            href={`/${ramo.slug}`}
            className='group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg'
          >
            <span className='inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition group-hover:bg-brand-700 group-hover:text-white'>
              <IconoRamo slug={ramo.slug} />
            </span>
            <h3 className='mt-5 text-xl font-bold group-hover:text-brand-700'>{ramo.nombre}</h3>
            <p className='mt-2 flex-1 leading-7 text-slate-600'>{PAGE_META[`/${ramo.slug}`].description}</p>
            <span className='mt-5 inline-flex items-center gap-1 font-semibold text-brand-700'>
              Conoce más
              <ArrowRightIcon className='h-5 w-5 transition group-hover:translate-x-1' aria-hidden='true' />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

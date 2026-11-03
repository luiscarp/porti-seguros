import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'

// Tarjeta de una entrada del blog. `Titulo` define el nivel del encabezado según la página (h2 en listados, h3 en secciones).
export default function TarjetaEntrada({ post, Titulo = 'h2' }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg'
    >
      <p className='text-xs font-bold uppercase tracking-widest text-brand-600'>
        {post.nombreCategoria}
        {post.status !== 'publicado' && <span className='ml-2 rounded bg-amber-100 px-1.5 py-0.5 text-amber-900'>En revisión</span>}
      </p>
      <Titulo className='mt-3 text-xl font-bold leading-snug group-hover:text-brand-700'>{post.h1}</Titulo>
      <p className='mt-3 flex-1 leading-7 text-slate-600'>{post.description}</p>
      <p className='mt-5 flex items-center justify-between text-sm text-slate-500'>
        <span>{post.fechaTexto} · {post.minutosLectura} min de lectura</span>
        <span className='inline-flex items-center gap-1 font-semibold text-brand-700'>
          Leer <ArrowRightIcon className='h-4 w-4 transition group-hover:translate-x-1' aria-hidden='true' />
        </span>
      </p>
    </Link>
  )
}

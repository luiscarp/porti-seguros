import Image from 'next/image'
import Link from 'next/link'
import { RAMOS } from '@/content/seguros'
import { PAGE_META } from '@/content/seo'

// Una tarjeta (H3) por ramo, cada uno una sola vez. Vida va primero y destacada: es la especialidad del despacho.
export default function TarjetasRamos() {
  return (
    <ul className='mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3'>
      {RAMOS.map((ramo, i) => (
        <li key={ramo.slug} className={i === 0 ? 'sm:col-span-2 lg:col-span-3' : ''}>
          <Link
            href={`/${ramo.slug}`}
            className='flex h-full flex-col overflow-hidden rounded-xl bg-white text-gray-900 shadow hover:ring-4 hover:ring-amber-400'
          >
            {ramo.imagen && (
              <Image
                src={ramo.imagen}
                alt={ramo.nombre}
                width={1792}
                height={1024}
                sizes={i === 0 ? '(min-width: 1152px) 1152px, 100vw' : '(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw'}
                className={`w-full object-cover ${i === 0 ? 'h-56 md:h-72' : 'h-44'}`}
              />
            )}
            <div className='flex flex-1 flex-col p-5'>
              <h3 className={`font-bold ${i === 0 ? 'text-2xl' : 'text-xl'}`}>{ramo.nombre}</h3>
              <p className='mt-2 flex-1 text-gray-700'>{PAGE_META[`/${ramo.slug}`].description}</p>
              <span className='mt-4 font-semibold text-sky-800'>Conoce más →</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

import Link from 'next/link'

// Encabezado de página interior: banda azul con ruta de navegación opcional, H1 e introducción.
export default function PageHero({ titulo, intro = [], migas, icono, children }) {
  return (
    <header className='bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white'>
      <div className='mx-auto max-w-4xl px-4 py-12 md:py-16'>
        {migas && (
          <nav aria-label='Ruta de navegación' className='mb-6 text-sm text-brand-100'>
            <ol className='flex flex-wrap items-center gap-2'>
              {migas.map((miga, i) => (
                <li key={miga.nombre} className='flex items-center gap-2'>
                  {i > 0 && <span aria-hidden='true'>/</span>}
                  {miga.href ? (
                    <Link href={miga.href} className='hover:text-white hover:underline'>{miga.nombre}</Link>
                  ) : (
                    <span aria-current='page' className='text-white'>{miga.nombre}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {icono && (
          <span className='mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30'>
            {icono}
          </span>
        )}
        <h1 className='text-3xl font-bold leading-tight text-white md:text-5xl'>{titulo}</h1>
        {intro.map((parrafo) => (
          <p key={parrafo} className='mt-5 max-w-3xl text-lg leading-8 text-brand-50'>{parrafo}</p>
        ))}
        {children}
      </div>
    </header>
  )
}

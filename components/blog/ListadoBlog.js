import Link from 'next/link'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import CtaBanda from '@/components/CtaBanda'
import TarjetaEntrada from '@/components/blog/TarjetaEntrada'
import { JsonLd, grafoBlog, migasDePan } from '@/components/JsonLd'

// Índice del blog y páginas de categoría: encabezado, filtro por categoría y tarjetas (la más reciente primero).
export default function ListadoBlog({ path, meta, titulo, intro, migas, posts, categorias, actual, noindex = false }) {
  return (
    <div>
      <Seo path={path} meta={meta} image='/og/blog.jpg' noindex={noindex} />
      <JsonLd id='blog' data={grafoBlog(posts, path)} />
      <Head>
        <link rel='alternate' type='application/rss+xml' title='Blog de PorTi Seguros' href='/blog/rss.xml' key='rss' />
      </Head>
      <JsonLd id='migas' data={migasDePan(migas.map((m) => ({ nombre: m.nombre, path: m.path })))} />
      <Navbar />

      <main>
        <PageHero titulo={titulo} intro={[intro]} migas={migas.map((m, i) => ({ nombre: m.nombre, href: i < migas.length - 1 ? m.path : undefined }))} />

        <div className='mx-auto max-w-6xl px-4 py-12'>
          {categorias.length > 1 && (
            <nav aria-label='Categorías del blog'>
              <ul className='flex flex-wrap gap-2'>
                <li>
                  <Link
                    href='/blog'
                    aria-current={!actual ? 'page' : undefined}
                    className={`block rounded-full border px-4 py-2 text-sm font-semibold ${!actual ? 'border-brand-700 bg-brand-700 text-white' : 'border-slate-200 text-slate-700 hover:border-brand-200 hover:text-brand-700'}`}
                  >
                    Todas
                  </Link>
                </li>
                {categorias.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/blog/categoria/${c.id}`}
                      aria-current={actual === c.id ? 'page' : undefined}
                      className={`block rounded-full border px-4 py-2 text-sm font-semibold ${actual === c.id ? 'border-brand-700 bg-brand-700 text-white' : 'border-slate-200 text-slate-700 hover:border-brand-200 hover:text-brand-700'}`}
                    >
                      {c.nombre} <span className='opacity-70'>({c.total})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <ul className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post) => (
              <li key={post.slug}><TarjetaEntrada post={post} /></li>
            ))}
          </ul>
        </div>

        <CtaBanda />
      </main>

      <Footer />
    </div>
  )
}

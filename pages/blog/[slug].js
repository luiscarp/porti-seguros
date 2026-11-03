import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import CtaButtons from '@/components/CtaButtons'
import IconoRamo from '@/components/IconoRamo'
import TarjetaEntrada from '@/components/blog/TarjetaEntrada'
import { JsonLd, grafoEntrada } from '@/components/JsonLd'
import { BUSINESS, mostrable } from '@/config/business'
import { getRamo } from '@/content/seguros'
import { aHtml, entrada, entradas } from '@/lib/blog.mjs'
import { CATEGORIAS } from '@/lib/blog-categorias.mjs'
import { fechaTexto, tarjeta } from '@/lib/blog-props.mjs'

// Entrada del blog (plan, sección 6.4). Solo existen en el build las entradas con status: publicado.
export async function getStaticPaths() {
  return { paths: entradas().map((post) => ({ params: { slug: post.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const post = entrada(params.slug)
  const { html, indice } = await aHtml(post.markdown)
  const { markdown, ...datos } = post

  // 2–3 relacionadas: las elegidas en el frontmatter, luego las del mismo cluster, luego las más recientes
  const otras = entradas().filter((p) => p.slug !== post.slug)
  const orden = [
    ...post.relacionados.map((slug) => otras.find((p) => p.slug === slug)).filter(Boolean),
    ...otras.filter((p) => p.cluster_url === post.cluster_url),
    ...otras,
  ]
  const relacionadas = [...new Map(orden.map((p) => [p.slug, p])).values()].slice(0, 3).map(tarjeta)

  const ramo = getRamo(post.cluster_url.slice(1))
  return {
    props: {
      post: { ...datos, nombreCategoria: CATEGORIAS[post.categoria], fechaTexto: fechaTexto(post.fecha), actualizadoTexto: fechaTexto(post.actualizado) },
      html,
      indice: indice.length >= 4 ? indice : [],
      relacionadas,
      cluster: { url: post.cluster_url, nombre: ramo?.nombre ?? 'nuestros seguros', slug: ramo?.slug ?? null },
      // Mensaje de WhatsApp propio del artículo (menú, botones y footer)
      mensajeWhatsapp: post.whatsapp,
    },
  }
}

const SUFIJO = ` | ${BUSINESS.name}`
const tituloSeo = (title) => (title.length + SUFIJO.length <= 60 ? title + SUFIJO : title)

export default function EntradaBlog({ post, html, indice, relacionadas, cluster }) {
  const path = `/blog/${post.slug}`
  const parrafosNota = post.notaClaudia.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)

  return (
    <div>
      <Seo
        path={path}
        meta={{ title: tituloSeo(post.title), description: post.description }}
        image={post.imagen}
        noindex={post.status !== 'publicado'}
        articulo={{ publicado: post.fecha, modificado: post.actualizado }}
      />
      <JsonLd id='entrada' data={grafoEntrada(post, post.nombreCategoria)} />
      <Head>
        <link rel='alternate' type='application/rss+xml' title='Blog de PorTi Seguros' href='/blog/rss.xml' key='rss' />
      </Head>
      <Navbar />

      <main>
        <header className='bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white'>
          <div className='mx-auto max-w-3xl px-4 py-12 md:py-16'>
            <nav aria-label='Ruta de navegación' className='mb-6 text-sm text-brand-100'>
              <ol className='flex flex-wrap items-center gap-2'>
                <li><Link href='/' className='hover:text-white hover:underline'>Inicio</Link></li>
                <li aria-hidden='true'>/</li>
                <li><Link href='/blog' className='hover:text-white hover:underline'>Blog</Link></li>
                <li aria-hidden='true'>/</li>
                <li><Link href={`/blog/categoria/${post.categoria}`} className='hover:text-white hover:underline'>{post.nombreCategoria}</Link></li>
              </ol>
            </nav>
            {post.status !== 'publicado' && (
              <p className='mb-4 inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm font-bold text-amber-900'>
                Vista de revisión: esta entrada no está publicada
              </p>
            )}
            <h1 className='text-3xl font-bold leading-tight text-white md:text-4xl'>{post.h1}</h1>
            <p className='mt-5 text-sm text-brand-100'>
              Por <Link href='/claudia-pacheco' className='font-semibold text-white hover:underline'>{BUSINESS.agentName}</Link>
              {' · '}<time dateTime={post.fecha}>{post.fechaTexto}</time>
              {post.actualizado !== post.fecha && <> · Actualizado el <time dateTime={post.actualizado}>{post.actualizadoTexto}</time></>}
              {' · '}{post.minutosLectura} min de lectura
            </p>
          </div>
        </header>

        <article className='mx-auto max-w-3xl px-4 py-10'>
          <aside aria-label='Respuesta corta' className='rounded-2xl border-l-4 border-brand-600 bg-brand-50 p-6'>
            <p className='text-xs font-bold uppercase tracking-widest text-brand-700'>Respuesta corta</p>
            <p className='mt-2 text-lg leading-8 text-slate-800'>{post.respuesta_corta}</p>
          </aside>

          {indice.length > 0 && (
            <nav aria-label='En este artículo' className='mt-8 rounded-2xl border border-slate-200 p-6'>
              <p className='font-display font-bold text-slate-900'>En este artículo</p>
              <ol className='mt-3 list-decimal space-y-1 pl-5 text-brand-700'>
                {indice.map((item) => (
                  <li key={item.id}><a href={`#${item.id}`} className='hover:underline'>{item.texto}</a></li>
                ))}
              </ol>
            </nav>
          )}

          <div
            className='prose prose-slate mt-10 md:prose-lg max-w-none prose-headings:font-display prose-headings:scroll-mt-28 prose-a:text-brand-700 prose-strong:text-slate-900 prose-th:bg-brand-50 [&_table]:block [&_table]:overflow-x-auto'
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {parrafosNota.length > 0 && (
            <section aria-labelledby='nota-claudia' className='mt-14 rounded-3xl bg-slate-50 p-6 md:p-8'>
              <h2 id='nota-claudia' className='text-2xl font-bold'>En palabras de Claudia</h2>
              {post.notaClaudiaTitulo && <h3 className='mt-2 text-lg font-semibold text-brand-700'>{post.notaClaudiaTitulo}</h3>}
              <div className='mt-4 space-y-4 text-lg leading-8'>
                {parrafosNota.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
              </div>
              <div className='mt-6 flex items-center gap-3'>
                <Image src='/claudia-pacheco-agente-de-seguros-chihuahua.webp' alt='' width={899} height={900} sizes='48px' className='h-12 w-12 rounded-full object-cover' />
                <p className='font-semibold text-slate-900'>— {BUSINESS.agentName}, {BUSINESS.name}</p>
              </div>
            </section>
          )}

          <section aria-labelledby='preguntas' className='mt-14'>
            <h2 id='preguntas' className='text-2xl font-bold md:text-3xl'>Preguntas frecuentes</h2>
            <div className='mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200'>
              {post.faq.map((item) => (
                <div key={item.pregunta} className='p-6'>
                  <h3 className='text-lg font-bold'>{item.pregunta}</h3>
                  <p className='mt-2 leading-7'>{item.respuesta}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby='cta' className='mt-14 rounded-3xl bg-gradient-to-br from-brand-800 to-brand-600 p-8 text-white'>
            <h2 id='cta' className='text-2xl font-bold text-white'>¿Quieres revisarlo con nosotros?</h2>
            <p className='mt-3 leading-7 text-brand-50'>
              Te asesoramos sin compromiso, en nuestra oficina de la Col. San Felipe, en {BUSINESS.address.city}, o a distancia.
            </p>
            <CtaButtons className='mt-6' />
            <Link href={cluster.url} className='mt-5 inline-flex items-center gap-2 font-semibold text-white underline'>
              {cluster.slug && <IconoRamo slug={cluster.slug} className='h-5 w-5' />}
              Ver la página de {cluster.nombre}
            </Link>
          </section>

          <section aria-labelledby='fuentes' className='mt-14'>
            <h2 id='fuentes' className='text-2xl font-bold'>Fuentes consultadas</h2>
            <ol className='mt-4 list-decimal space-y-2 pl-5 leading-7'>
              {post.fuentes.map((fuente) => (
                <li key={fuente.url}>
                  <a href={fuente.url} target='_blank' rel='nofollow noopener noreferrer' className='text-brand-700 underline'>{fuente.titulo}</a>
                  <span className='text-sm text-slate-500'> · consultado el {fechaTexto(fuente.consultado)}</span>
                </li>
              ))}
            </ol>
          </section>

          <section aria-label='Sobre la autora' className='mt-14 flex flex-col gap-5 rounded-3xl border border-slate-200 p-6 sm:flex-row sm:items-center'>
            <Image src='/claudia-pacheco-agente-de-seguros-chihuahua.webp' alt={BUSINESS.agentName} width={899} height={900} sizes='96px' className='h-24 w-24 rounded-full object-cover' />
            <div>
              <p className='font-display text-lg font-bold text-slate-900'>{BUSINESS.agentName}</p>
              <p className='leading-7'>Agente de seguros desde {BUSINESS.agentSince} y fundadora de {BUSINESS.name}.</p>
              {mostrable(BUSINESS.cnsfLicense) && <p className='text-sm'>Cédula CNSF: {BUSINESS.cnsfLicense}</p>}
              <Link href='/claudia-pacheco' className='mt-1 inline-block font-semibold text-brand-700 hover:underline'>Conoce su trayectoria →</Link>
            </div>
          </section>

          <p className='mt-10 text-sm leading-6 text-slate-500'>
            Este artículo es informativo. Las coberturas, sumas aseguradas, deducibles y primas dependen de la aseguradora y de la póliza contratada. En temas fiscales, confirma tu caso con tu contador.
          </p>
        </article>

        {relacionadas.length > 0 && (
          <section aria-labelledby='relacionadas' className='bg-slate-50 py-14'>
            <div className='mx-auto max-w-6xl px-4'>
              <h2 id='relacionadas' className='text-2xl font-bold md:text-3xl'>También te puede interesar</h2>
              <ul className='mt-8 grid gap-5 md:grid-cols-3'>
                {relacionadas.map((p) => (
                  <li key={p.slug}><TarjetaEntrada post={p} Titulo='h3' /></li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

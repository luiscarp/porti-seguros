import ListadoBlog from '@/components/blog/ListadoBlog'
import { BUSINESS } from '@/config/business'
import { CATEGORIAS, MIN_ENTRADAS_CATEGORIA } from '@/lib/blog-categorias.mjs'
import { categoriasConTotal, tarjetas } from '@/lib/blog-listado.mjs'

// /blog/categoria/[categoria]: solo categorías con entradas. Se indexa con 3 o más entradas (plan 6.1).
export async function getStaticPaths() {
  return { paths: categoriasConTotal().map((c) => ({ params: { categoria: c.id } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const posts = tarjetas(params.categoria)
  return { props: { categoria: params.categoria, posts, categorias: categoriasConTotal() } }
}

export default function CategoriaBlog({ categoria, posts, categorias }) {
  const nombre = CATEGORIAS[categoria]
  const path = `/blog/categoria/${categoria}`
  return (
    <ListadoBlog
      path={path}
      meta={{
        title: `${nombre} | Blog de ${BUSINESS.name}`,
        description: `Artículos de ${nombre.toLowerCase()} del blog de ${BUSINESS.name}: guías claras y con fuentes oficiales para decidir mejor en Chihuahua.`,
      }}
      titulo={`${nombre}: artículos del blog`}
      intro={`Guías de ${BUSINESS.name} sobre ${nombre.toLowerCase()}, con fuentes oficiales y la experiencia de ${BUSINESS.agentName}.`}
      migas={[{ nombre: 'Inicio', path: '/' }, { nombre: 'Blog', path: '/blog' }, { nombre, path }]}
      posts={posts}
      categorias={categorias}
      actual={categoria}
      noindex={posts.length < MIN_ENTRADAS_CATEGORIA}
    />
  )
}

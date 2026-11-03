import ListadoBlog from '@/components/blog/ListadoBlog'
import { PAGE_META } from '@/content/seo'
import { categoriasConTotal, tarjetas } from '@/lib/blog-listado.mjs'

// /blog: todas las entradas publicadas. Sin entradas, la página no existe (404) para no publicar una página vacía.
export async function getStaticProps() {
  const posts = tarjetas()
  if (posts.length === 0) return { notFound: true }
  return { props: { posts, categorias: categoriasConTotal() } }
}

export default function Blog({ posts, categorias }) {
  return (
    <ListadoBlog
      path='/blog'
      meta={PAGE_META['/blog']}
      titulo='Blog: guías de seguros en Chihuahua'
      intro='Respuestas claras y con fuentes oficiales sobre seguros de vida, retiro, auto, plataformas y gastos médicos, escritas por Claudia Pacheco, agente de seguros desde 2007.'
      migas={[{ nombre: 'Inicio', path: '/' }, { nombre: 'Blog', path: '/blog' }]}
      posts={posts}
      categorias={categorias}
    />
  )
}

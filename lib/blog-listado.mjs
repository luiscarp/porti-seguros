// Datos del índice del blog y de las páginas de categoría (getStaticProps).
import { CATEGORIAS, entradas } from './blog.mjs'
import { tarjeta } from './blog-props.mjs'

export function categoriasConTotal() {
  const conteo = new Map()
  for (const post of entradas()) conteo.set(post.categoria, (conteo.get(post.categoria) ?? 0) + 1)
  return Object.keys(CATEGORIAS)
    .filter((id) => conteo.has(id))
    .map((id) => ({ id, nombre: CATEGORIAS[id], total: conteo.get(id) }))
}

export const tarjetas = (categoria) => entradas().filter((post) => !categoria || post.categoria === categoria).map(tarjeta)

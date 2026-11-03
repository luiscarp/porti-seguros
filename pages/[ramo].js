import RamoPage from '@/components/RamoPage'
import { sinPendientes } from '@/config/business'
import { RAMOS, getRamo } from '@/content/seguros'
import { entradasDeCluster } from '@/lib/blog.mjs'
import { tarjeta } from '@/lib/blog-props.mjs'

// Aplica sinPendientes a todos los textos del ramo (en producción quita las marcas [DATO PENDIENTE]).
const limpiar = (valor) =>
  typeof valor === 'string' ? sinPendientes(valor)
    : Array.isArray(valor) ? valor.map(limpiar)
    : valor && typeof valor === 'object' ? Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, limpiar(v)]))
    : valor

// Cada ramo se genera como HTML estático en el build (SSG): el contenido llega completo a buscadores y rastreadores de IA.
export async function getStaticPaths() {
  return {
    paths: RAMOS.map((ramo) => ({ params: { ramo: ramo.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const ramo = getRamo(params.ramo)
  const relacionados = ramo.relacionados.map((slug) => {
    const { nombre } = getRamo(slug)
    return { slug, nombre }
  })
  // Hasta 3 artículos del blog de este ramo (solo publicados en build)
  const articulos = entradasDeCluster(`/${ramo.slug}`).map(tarjeta)
  return { props: { ramo: limpiar(ramo), relacionados, articulos } }
}

export default RamoPage

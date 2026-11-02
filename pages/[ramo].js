import RamoPage from '@/components/RamoPage'
import { RAMOS, getRamo } from '@/content/seguros'

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
  return { props: { ramo, relacionados } }
}

export default RamoPage

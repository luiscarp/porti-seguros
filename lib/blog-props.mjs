// Datos serializables del blog para getStaticProps (fechas en texto, nombre de categoría).
// Sin dependencias de servidor: el componente de la entrada usa fechaTexto en el navegador.
import { CATEGORIAS } from './blog-categorias.mjs'

// Resumen para listados (sin el cuerpo ni los bloques largos)
const resumen = ({ markdown, faq, fuentes, notaClaudia, notaClaudiaTitulo, ...post }) => post

const formato = new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
export const fechaTexto = (iso) => formato.format(new Date(`${iso}T00:00:00Z`))

// Lo que necesita una tarjeta de entrada
export const tarjeta = (post) => ({
  ...resumen(post),
  nombreCategoria: CATEGORIAS[post.categoria],
  fechaTexto: fechaTexto(post.fecha),
})

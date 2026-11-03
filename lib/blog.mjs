// Entradas del blog (content/blog/*.md): lectura, validación del frontmatter y Markdown → HTML.
// Lo usan las páginas (getStaticProps) y los scripts del build (sitemap, RSS, llms.txt, OG).
// Plan: docs/PLAN_BLOG_PORTISEGUROS.md, secciones 6.2–6.4.
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { z } from 'zod'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import { CATEGORIAS, MIN_ENTRADAS_CATEGORIA } from './blog-categorias.mjs'

const DIR = join(process.cwd(), 'content/blog')

export { CATEGORIAS, MIN_ENTRADAS_CATEGORIA }

// En `next dev` se muestran también las entradas en revisión, para revisar el diseño (plan, sección 10).
// En cualquier build (producción y previews) solo existen las publicadas.
export const MOSTRAR_NO_PUBLICADAS = process.env.NODE_ENV === 'development'

const fecha = z.union([z.date(), z.string()]).transform((valor) => new Date(valor).toISOString().slice(0, 10))

const esquema = z.object({
  title: z.string().min(1),
  h1: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'minúsculas y guiones, sin fecha'),
  description: z.string().min(1),
  fecha,
  actualizado: fecha,
  autor: z.literal('claudia-pacheco'),
  categoria: z.enum(Object.keys(CATEGORIAS)),
  cluster_url: z.string().startsWith('/'),
  palabra_clave: z.string().min(1),
  palabras_secundarias: z.array(z.string()).default([]),
  whatsapp: z.string().min(1),
  respuesta_corta: z.string().min(1),
  faq: z.array(z.object({ pregunta: z.string().min(1), respuesta: z.string().min(1) })).min(1),
  fuentes: z.array(z.object({ titulo: z.string().min(1), url: z.string().url(), consultado: fecha })).min(1),
  relacionados: z.array(z.string()).default([]),
  notaClaudiaTitulo: z.string().optional().default(''),
  notaClaudia: z.string().optional().default(''),
  imagen: z.string().startsWith('/'),
  status: z.enum(['borrador', 'revision', 'publicado']),
  notasRevision: z.string().optional(),
})

const contarPalabras = (texto) => texto.split(/\s+/).filter(Boolean).length

function leer(archivo) {
  const { data, content } = matter(readFileSync(join(DIR, archivo), 'utf8'))
  const resultado = esquema.safeParse(data)
  if (!resultado.success) {
    const detalle = resultado.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')
    throw new Error(`content/blog/${archivo}: frontmatter inválido — ${detalle}`)
  }
  if (`${resultado.data.slug}.md` !== archivo) throw new Error(`content/blog/${archivo}: el slug debe coincidir con el nombre del archivo`)
  // notasRevision es interno: nunca sale de este módulo
  const { notasRevision, ...post } = resultado.data
  return { ...post, markdown: content, palabras: contarPalabras(content), minutosLectura: Math.max(1, Math.round(contarPalabras(content) / 200)) }
}

// Todas las entradas válidas, sin filtrar por estado (validaciones y scripts que lo necesiten).
export function todasLasEntradas() {
  return readdirSync(DIR)
    .filter((archivo) => archivo.endsWith('.md'))
    .map(leer)
    .sort((a, b) => b.fecha.localeCompare(a.fecha) || a.title.localeCompare(b.title, 'es'))
}

// Entradas visibles en este entorno, la más reciente primero.
export function entradas() {
  return todasLasEntradas().filter((post) => post.status === 'publicado' || MOSTRAR_NO_PUBLICADAS)
}

export const entrada = (slug) => entradas().find((post) => post.slug === slug)

export const entradasDeCluster = (clusterUrl, max = 3) => entradas().filter((post) => post.cluster_url === clusterUrl).slice(0, max)

export const categoriasConEntradas = () => [...new Set(entradas().map((post) => post.categoria))]

// Markdown → HTML (tablas GFM, ids en encabezados, imágenes con carga diferida) y el índice de los H2.
export async function aHtml(markdown) {
  const html = String(
    await unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeSlug).use(rehypeStringify).process(markdown)
  ).replace(/<img /g, '<img loading="lazy" decoding="async" ')
  const indice = [...html.matchAll(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g)].map(([, id, texto]) => ({ id, texto: texto.replace(/<[^>]+>/g, '') }))
  return { html, indice }
}


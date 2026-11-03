// Revisa todas las entradas de content/blog (cualquier estado) con las reglas del plan del blog (6.7 y sección 2).
// Uso: npm run check-blog. Correrlo antes de cambiar una entrada a `status: publicado`.
import { todasLasEntradas } from '../lib/blog.mjs'

const STOPWORDS = new Set(['de', 'del', 'la', 'el', 'los', 'las', 'en', 'y', 'a', 'un', 'una', 'para', 'por', 'mi', 'tu', 'que', 'con'])
const normalizar = (texto) => texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9ñ ]+/g, ' ')
const palabrasClave = (frase) => normalizar(frase).split(/\s+/).filter((p) => p && !STOPWORDS.has(p))
// La palabra clave está presente si aparecen todas sus palabras significativas (sin acentos ni artículos),
// aceptando variantes de la misma raíz como lo hacen los buscadores (deducir/deducible, necesito/necesitas).
const raiz = (palabra) => palabra.slice(0, Math.min(palabra.length, 6))
const contiene = (texto, frase) => {
  const palabras = normalizar(texto).split(/\s+/)
  return palabrasClave(frase).every((p) => palabras.some((w) => w === p || (w.length >= 4 && raiz(w) === raiz(p))))
}
const contarPalabras = (texto) => texto.split(/\s+/).filter(Boolean).length
const PROHIBIDO = /\[PENDIENTE|\[DATO|\bTODO\b|\bXXX\b/
const VISIBLE = (post) => [post.title, post.h1, post.description, post.respuesta_corta, post.markdown, post.notaClaudia, post.notaClaudiaTitulo, ...post.faq.flatMap((f) => [f.pregunta, f.respuesta])].join('\n')

const entradas = todasLasEntradas()
const slugs = new Set(entradas.map((p) => p.slug))
let errores = 0
let avisos = 0

for (const post of entradas) {
  const e = []
  const a = []
  if (post.title.length > 60) e.push(`title de ${post.title.length} caracteres (máx. 60)`)
  if (post.description.length < 120 || post.description.length > 155) e.push(`description de ${post.description.length} caracteres (120–155)`)
  const rc = contarPalabras(post.respuesta_corta)
  if (rc < 40 || rc > 80) e.push(`respuesta corta de ${rc} palabras (40–80)`)
  if (post.fuentes.length < 2) e.push(`${post.fuentes.length} fuente(s) (mín. 2)`)
  if (post.faq.length < 4 || post.faq.length > 8) e.push(`${post.faq.length} preguntas frecuentes (4–8)`)
  if (post.actualizado < post.fecha) e.push('actualizado es anterior a fecha')
  if (PROHIBIDO.test(VISIBLE(post))) e.push('texto visible con [PENDIENTE], [DATO, TODO o XXX')
  if (!post.markdown.includes(`](${post.cluster_url})`)) e.push(`el cuerpo no enlaza a ${post.cluster_url}`)
  if (/^#\s/m.test(post.markdown)) e.push('el cuerpo tiene un H1 (#); el H1 lo pone la plantilla')
  for (const rel of post.relacionados) if (!slugs.has(rel)) e.push(`relacionado inexistente: ${rel}`)
  for (const [campo, texto] of [['title', post.title], ['h1', post.h1], ['slug', post.slug.replace(/-/g, ' ')], ['respuesta corta', post.respuesta_corta]]) {
    if (!contiene(texto, post.palabra_clave)) a.push(`palabra clave "${post.palabra_clave}" no está completa en ${campo}`)
  }
  if (!/chihuahua/i.test(`${post.h1} ${post.markdown.split('\n').find((l) => l.trim() && !l.startsWith('#')) ?? ''}`)) a.push('"Chihuahua" no aparece en el H1 ni en el primer párrafo')
  if (!post.notaClaudia.trim()) a.push('sin nota de Claudia (el bloque no se mostrará)')
  if (post.relacionados.length === 0) a.push('sin entradas relacionadas')

  errores += e.length
  avisos += a.length
  console.log(`\n${post.slug} [${post.status}]`)
  for (const m of e) console.log(`  ERROR  ${m}`)
  for (const m of a) console.log(`  aviso  ${m}`)
  if (!e.length && !a.length) console.log('  OK')
}

console.log(`\n${entradas.length} entradas: ${errores} error(es), ${avisos} aviso(s)`)
if (errores) process.exit(1)

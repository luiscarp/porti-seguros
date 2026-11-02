// Verifica longitudes de títulos (≤ 60) y meta descriptions (120–155) y que no se repitan.
// Uso: node scripts/check-meta.mjs
import { PAGE_META } from '../content/seo.js'

let errores = 0
const vistos = new Set()

console.log('Ruta | Título (car.) | Descripción (car.)')
for (const [ruta, { title, description }] of Object.entries(PAGE_META)) {
  const problemas = []
  if (title.length > 60) problemas.push('título > 60')
  if (description.length < 120 || description.length > 155) problemas.push('descripción fuera de 120–155')
  if (vistos.has(title) || vistos.has(description)) problemas.push('duplicado')
  vistos.add(title)
  vistos.add(description)
  errores += problemas.length
  console.log(`${ruta} | ${title.length} | ${description.length}${problemas.length ? '  ← ' + problemas.join(', ') : ''}`)
}

if (errores) {
  console.error(`\n${errores} problema(s) encontrados`)
  process.exit(1)
}
console.log('\nOK')

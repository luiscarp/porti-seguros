// Pruebas de aceptación del decodificador de VIN (sección 6 de sus instrucciones). Uso: npm run test-vin
import assert from 'node:assert/strict'
import { decodificarVIN } from '../lib/vin.mjs'
import { estadoVIN, filasLote, tablaTsv, resumenTexto } from '../lib/vin-presentacion.mjs'

const ANIO = 2026 // año de referencia fijo para que las pruebas no cambien con el calendario
let fallas = 0

function caso(nombre, fn) {
  try {
    fn()
    console.log(`ok    ${nombre}`)
  } catch (e) {
    fallas++
    console.log(`FALLA ${nombre}\n      ${e.message}`)
  }
}

const valido = (entrada, marca, pais, anio, alterno) => () => {
  const r = decodificarVIN(entrada, ANIO)
  assert.equal(r.completo, true)
  assert.deepEqual(r.errores, [])
  assert.equal(r.dvValido, true)
  assert.equal(r.marca, marca)
  assert.equal(r.pais, pais)
  assert.equal(r.anio, anio)
  if (alterno !== undefined) assert.equal(r.anioAlterno, alterno)
  assert.equal(estadoVIN(r).etiqueta, 'Válido')
}

caso('1HGCM82633A004352 → Válido, Honda, Estados Unidos, 2003', valido('1HGCM82633A004352', 'Honda', 'Estados Unidos', 2003))
caso('3N1CN7AD3KL812345 → Válido, Nissan, México, 2019 (alterno 1989)', valido('3N1CN7AD3KL812345', 'Nissan', 'México', 2019, 1989))
caso('3VW1K1AJ3HM204518 → Válido, Volkswagen, México, 2017', valido('3VW1K1AJ3HM204518', 'Volkswagen', 'México', 2017))
caso('3G1TB5CF3LL123456 → Válido, Chevrolet, México, 2020', valido('3G1TB5CF3LL123456', 'Chevrolet', 'México', 2020))
caso('KMHCT41B3EU612345 → Válido, Hyundai, Corea del Sur, 2014, aviso de año orientativo', () => {
  valido('KMHCT41B3EU612345', 'Hyundai', 'Corea del Sur', 2014)()
  const r = decodificarVIN('KMHCT41B3EU612345', ANIO)
  assert.ok(r.avisos.some((a) => a.includes('Año modelo tomado de la posición 10')))
})
caso('3N1CN7AD8KL812345 → Error: verificador no coincide (trae 8, da 3)', () => {
  const r = decodificarVIN('3N1CN7AD8KL812345', ANIO)
  assert.equal(r.dvValido, false)
  assert.equal(r.dv, '8')
  assert.equal(r.dvCalculado, '3')
  assert.equal(r.errores.length, 1)
  assert.equal(estadoVIN(r).etiqueta, 'Verificador no coincide')
  assert.equal(estadoVIN(r).tono, 'error')
})
caso('WVWZZZ1KZ6W000001 → Aviso (no error), Volkswagen, Alemania, 2006', () => {
  const r = decodificarVIN('WVWZZZ1KZ6W000001', ANIO)
  assert.deepEqual(r.errores, [])
  assert.equal(r.dvValido, false)
  assert.ok(r.avisos.some((a) => a.includes('Fuera de Norteamérica no siempre se usa')))
  assert.equal(r.marca, 'Volkswagen')
  assert.equal(r.pais, 'Alemania')
  assert.equal(r.anio, 2006)
  assert.equal(estadoVIN(r).tono, 'aviso')
})
caso('3N1CN7ADOKL812345 → Error por letra O con sugerencia', () => {
  const r = decodificarVIN('3N1CN7ADOKL812345', ANIO)
  assert.equal(r.completo, false)
  assert.ok(r.errores[0].includes('I, O ni Q'))
  assert.equal(r.sugerencia, '3N1CN7AD0KL812345')
  assert.equal(estadoVIN(r).tono, 'error')
})
const antigua = (entrada, incompleto) => () => {
  const r = decodificarVIN(entrada, ANIO)
  assert.equal(r.antiguo, true)
  assert.deepEqual(r.errores, [])
  assert.equal(r.posibleIncompleto, incompleto)
  assert.ok(r.avisos.some((a) => a.includes('Captura marca, año y modelo a mano')))
  assert.equal(estadoVIN(r).etiqueta, 'Serie antigua')
  assert.equal(estadoVIN(r).tono, 'aviso')
}
caso('1182045678 (10) → Serie antigua, sin error, pide datos a mano', antigua('1182045678', false))
caso('F10GLK12345 (11) → Serie antigua, sin error', antigua('F10GLK12345', false))
caso('3N1CN7AD3KL8123 (15) → Serie antigua, podrían faltar 2 caracteres', () => {
  antigua('3N1CN7AD3KL8123', true)()
  assert.ok(decodificarVIN('3N1CN7AD3KL8123', ANIO).avisos.some((a) => a.includes('faltan 2 caracteres')))
})
caso('AB12 → Error: demasiado corto', () => {
  const r = decodificarVIN('AB12', ANIO)
  assert.equal(r.completo, false)
  assert.ok(r.errores[0].startsWith('Tiene 4 caracteres'))
  assert.equal(estadoVIN(r).tono, 'error')
})
caso('3N1CN7AD3KL8123456 (18) → Error: sobra 1 carácter', () => {
  const r = decodificarVIN('3N1CN7AD3KL8123456', ANIO)
  assert.ok(r.errores.some((e) => e.includes('Sobran 1')))
  assert.equal(estadoVIN(r).tono, 'error')
})
caso('" 3n1-cn7ad3 kl812345 " → se limpia y da lo mismo que la segunda fila', () => {
  const a = decodificarVIN(' 3n1-cn7ad3 kl812345 ', ANIO)
  const b = decodificarVIN('3N1CN7AD3KL812345', ANIO)
  assert.deepEqual(a, b)
})
caso('Serie antigua acepta I, O y Q', () => {
  const r = decodificarVIN('IOQ1234', ANIO)
  assert.equal(r.antiguo, true)
  assert.deepEqual(r.errores, [])
})
caso('Varios VIN: separa por línea, coma y punto y coma; TSV con encabezado', () => {
  const filas = filasLote('1HGCM82633A004352\n3N1CN7AD8KL812345, AB12; 1182045678', ANIO)
  assert.equal(filas.length, 4)
  assert.deepEqual(filas.map((f) => f.estado.etiqueta), ['Válido', 'Verificador no coincide', 'Revisar captura', 'Serie antigua'])
  const tsv = tablaTsv(filas).split('\n')
  assert.equal(tsv.length, 5)
  assert.equal(tsv[0].split('\t').length, 7)
})
caso('Resumen de serie antigua incluye marca, año y modelo capturados', () => {
  const texto = resumenTexto(decodificarVIN('F10GLK12345', ANIO), { marca: 'Ford', anio: '1971', modelo: 'F-100' })
  assert.ok(texto.includes('Marca (capturada): Ford') && texto.includes('Año (capturado): 1971') && texto.includes('Modelo (capturado): F-100'))
})

console.log(fallas ? `\n${fallas} prueba(s) fallaron` : '\nOK: todas las pruebas pasan')
if (fallas) process.exit(1)

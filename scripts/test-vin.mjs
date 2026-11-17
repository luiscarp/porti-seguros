// Pruebas de aceptación del decodificador de VIN (tabla de base-vin/INSTRUCCIONES-CLAUDE-CODE.md). Uso: npm run test-vin
// Los bloques se leen de public/vin/datos con fs, igual que la página los pide con fetch.
import assert from 'node:assert/strict'
import fs from 'fs'
import path from 'path'
import { decodificarVIN, VIN_DB } from '../lib/vin.mjs'
import { estadoVIN, filasLote, tablaTsv, resumenTexto, desglose, ficha, textoModelo } from '../lib/vin-presentacion.mjs'

const ANIO = 2026 // año de referencia fijo para que las pruebas no cambien con el calendario
const PUBLICO = path.join(process.cwd(), 'public', 'vin')
const cargar = async (ruta) => JSON.parse(fs.readFileSync(path.join(PUBLICO, ruta), 'utf8'))
const dec = (vin) => decodificarVIN(vin, ANIO, cargar)
let fallas = 0

async function caso(nombre, fn) {
  try {
    await fn()
    console.log(`ok    ${nombre}`)
  } catch (e) {
    fallas++
    console.log(`FALLA ${nombre}\n      ${e.message}`)
  }
}

const valido = async (vin, { marca, pais, anio, modelo }) => {
  const r = await dec(vin)
  assert.equal(r.completo, true)
  assert.deepEqual(r.errores, [])
  assert.equal(r.dvValido, true)
  assert.equal(estadoVIN(r).etiqueta, 'Válido')
  if (marca) assert.equal(r.marca, marca)
  if (pais) assert.equal(r.pais, pais)
  if (anio) assert.equal(r.anio, anio)
  if (modelo) assert.equal(r.datos?.modelo, modelo)
  return r
}

await caso('1HGCM82633A004352 → Honda Accord EX-V6 2003, coupé, 6 cil., Marysville, Ohio', async () => {
  const r = await valido('1HGCM82633A004352', { marca: 'Honda', pais: 'Estados Unidos', anio: 2003, modelo: 'Accord' })
  assert.equal(r.datos.version, 'EX-V6')
  assert.equal(r.datos.carroceria, 'Coupé')
  assert.equal(r.datos.cilindros, '6')
  assert.equal(r.datos.planta_ciudad, 'Marysville')
  assert.equal(r.datos.planta_estado, 'Ohio')
  assert.ok(r.fuenteModelo.includes('NHTSA vPIC'))
})
await caso('3N1CN7AD3KL812345 → Nissan Versa 2019, sedán, 1.6 L, Aguascalientes', async () => {
  const r = await valido('3N1CN7AD3KL812345', { marca: 'Nissan', pais: 'México', anio: 2019, modelo: 'Versa' })
  assert.equal(r.anioAlterno, 1989)
  assert.equal(r.datos.carroceria, 'Sedán')
  assert.equal(r.datos.motor_litros, '1.6')
  assert.equal(r.datos.planta_ciudad, 'Aguascalientes')
})
await caso('3VW1K1AJ3HM204518 → Volkswagen Jetta 2017, México', () => valido('3VW1K1AJ3HM204518', { marca: 'Volkswagen', pais: 'México', anio: 2017, modelo: 'Jetta' }))
await caso('3G1TB5CF3LL123456 → Chevrolet Aveo 2020, 1.6 L', async () => {
  const r = await valido('3G1TB5CF3LL123456', { marca: 'Chevrolet', pais: 'México', anio: 2020, modelo: 'Aveo' })
  assert.equal(r.datos.motor_litros, '1.6')
})
await caso('KMHCT41B3EU612345 → Hyundai, Corea del Sur, 2014, sin modelo', async () => {
  const r = await valido('KMHCT41B3EU612345', { pais: 'Corea del Sur', anio: 2014 })
  assert.ok(r.marca.startsWith('Hyundai'))
  assert.equal(r.datos?.modelo, undefined)
  assert.ok(r.avisos.some((a) => a.includes('no está en las reglas de NHTSA')))
})
await caso('3N1CN7AD8KL812345 → Error: verificador trae 8, el cálculo da 3', async () => {
  const r = await dec('3N1CN7AD8KL812345')
  assert.equal(r.dv, '8')
  assert.equal(r.dvCalculado, '3')
  assert.ok(r.errores[0].includes('trae 8 y el cálculo da 3'))
  assert.equal(estadoVIN(r).etiqueta, 'Verificador no coincide')
  assert.equal(estadoVIN(r).tono, 'error')
})
await caso('WVWZZZ1KZ6W000001 → Aviso (no error) fuera de Norteamérica; Volkswagen, Alemania', async () => {
  const r = await dec('WVWZZZ1KZ6W000001')
  assert.deepEqual(r.errores, [])
  assert.equal(r.dvValido, false)
  assert.ok(r.avisos.some((a) => a.includes('Fuera de Norteamérica no siempre se usa')))
  assert.equal(r.marca, 'Volkswagen')
  assert.equal(r.pais, 'Alemania')
  assert.equal(estadoVIN(r).tono, 'aviso')
})
await caso('LSJA24U66MG123456 → MG, China, aviso de fuente secundaria, sin modelo', async () => {
  const r = await dec('LSJA24U66MG123456')
  assert.ok(r.marca.startsWith('MG'))
  assert.equal(r.pais, 'China')
  assert.equal(r.wmiVerificado, 'secundaria')
  assert.ok(r.avisos.some((a) => a.includes('fuente secundaria (Wikibooks)')))
  assert.equal(r.datos?.modelo, undefined)
})
await caso('3N1CN7ADOKL812345 → Error por letra O, sugiere 3N1CN7AD0KL812345', async () => {
  const r = await dec('3N1CN7ADOKL812345')
  assert.equal(r.completo, false)
  assert.ok(r.errores[0].includes('I, O ni Q'))
  assert.equal(r.sugerencia, '3N1CN7AD0KL812345')
  assert.equal(estadoVIN(r).tono, 'error')
})
await caso('1182045678 → Serie antigua de 10 caracteres', async () => {
  const r = await dec('1182045678')
  assert.equal(r.antiguo, true)
  assert.equal(r.longitud, 10)
  assert.deepEqual(r.errores, [])
  assert.equal(estadoVIN(r).etiqueta, 'Serie antigua')
})
await caso('1Z37H2S123456 → formatos de Chevrolet, otras GM, Chrysler y AMC; con Chevrolet, planta S = St. Louis', async () => {
  const r = await dec('1Z37H2S123456')
  assert.equal(r.antiguo, true)
  const marcas = r.formatosAntiguos.map((f) => f.marca).join(' | ')
  for (const m of ['Chevrolet', 'Oldsmobile', 'Chrysler', 'AMC']) assert.ok(marcas.includes(m), marcas)
  const chevrolet = r.formatosAntiguos.find((f) => f.marca === 'Chevrolet')
  assert.ok(chevrolet.posiciones.some((p) => p.caracteres === 'S' && p.lectura.includes('St. Louis')))
})
await caso('3N1CN7AD3KL8123 → Serie antigua, podrían faltar 2 caracteres', async () => {
  const r = await dec('3N1CN7AD3KL8123')
  assert.equal(r.antiguo, true)
  assert.equal(r.posibleIncompleto, true)
  assert.ok(r.avisos.some((a) => a.includes('faltan 2 caracteres')))
})
await caso('AB12 → Error: demasiado corto', async () => {
  const r = await dec('AB12')
  assert.ok(r.errores[0].startsWith('Tiene 4 caracteres'))
  assert.equal(estadoVIN(r).tono, 'error')
})
await caso('3N1CN7AD3KL8123456 → Error: sobra 1 carácter', async () => {
  const r = await dec('3N1CN7AD3KL8123456')
  assert.ok(r.errores.some((e) => e.includes('Sobran 1')))
})
await caso('" 3n1-cn7ad3 kl812345 " → se limpia y da lo mismo que el VIN limpio', async () => {
  assert.deepEqual(await dec(' 3n1-cn7ad3 kl812345 '), await dec('3N1CN7AD3KL812345'))
})

// Presentación
await caso('Desglose, ficha y resumen muestran modelo, motor, planta y fuente', async () => {
  const r = await dec('1HGCM82633A004352')
  assert.equal(textoModelo(r.datos), 'Accord EX-V6')
  assert.ok(desglose(r).find((f) => f.pos === '11').lectura.includes('Marysville'))
  assert.ok(ficha(r).some(([k, v]) => k === 'Motor' && v.includes('6 cil.')))
  const texto = resumenTexto(r)
  assert.ok(texto.includes('Modelo: Accord EX-V6') && texto.includes('Planta: Marysville, Ohio') && texto.includes('Fuente: Reglas NHTSA vPIC'))
})
await caso('Varios VIN: separa por línea, coma y punto y coma; TSV de 20 columnas', async () => {
  const filas = await filasLote('1HGCM82633A004352\n3N1CN7AD8KL812345, AB12; 1182045678', ANIO, cargar)
  assert.deepEqual(filas.map((f) => f.estado.etiqueta), ['Válido', 'Verificador no coincide', 'Revisar captura', 'Serie antigua'])
  assert.equal(filas[0].modelo, 'Accord EX-V6')
  const tsv = tablaTsv(filas).split('\n')
  assert.equal(tsv.length, 5)
  assert.equal(tsv[0].split('\t').length, 20)
})
await caso('Resumen de serie antigua incluye marca, año y modelo capturados', async () => {
  const texto = resumenTexto(await dec('F10GLK12345'), { marca: 'Ford', anio: '1971', modelo: 'F-100' })
  assert.ok(texto.includes('Marca: Ford') && texto.includes('Año modelo: 1971') && texto.includes('Modelo: F-100'))
})
await caso('Sin bloques (fetch falla) sigue dando país, año y verificador', async () => {
  const r = await decodificarVIN('3N1CN7AD3KL812345', ANIO, async () => { throw new Error('sin red') })
  assert.equal(r.dvValido, true)
  assert.equal(r.pais, 'México')
  assert.equal(r.anio, 2019)
})
await caso('El núcleo solo guarda descriptores de VIN reales, nunca VIN completos', () => {
  for (const d of Object.keys(VIN_DB.descriptores ?? {})) assert.match(d, /^[A-HJ-NPR-Z0-9]{8}\*[A-HJ-NPR-Z0-9]{2}$/)
})

console.log(fallas ? `\n${fallas} prueba(s) fallaron` : '\nOK: todas las pruebas pasan')
if (fallas) process.exit(1)

// Decodificador de VIN del sitio: une la lógica y la base que vienen del repositorio base-vin.
// lib/vin-logic.cjs, lib/vin-db.mjs y public/vin/datos/ se copian con scripts/sync-vin-db.mjs; no se editan aquí.
import logica from './vin-logic.cjs'
import VIN_DB from './vin-db.mjs'

export { VIN_DB }
export const limpiarVIN = logica.limpiarVIN

// En el navegador los bloques (datos/wmi/XX.json, datos/esquemas/N.json) se piden a /vin/… del propio sitio
export function cargarWeb(ruta) {
  return fetch(`/vin/${ruta}`).then((r) => {
    if (!r.ok) throw new Error(String(r.status))
    return r.json()
  })
}

// Asíncrono: el núcleo va en el bundle y los bloques de fabricante y modelo se cargan según el VIN
export const decodificarVIN = (entrada, anioActual, cargar = cargarWeb, db = VIN_DB) => logica.decodificarVIN(entrada, anioActual, db, cargar)
export const digitoVerificador = (vin, db = VIN_DB) => logica.digitoVerificador(vin, db)

// Consulta opcional a NHTSA vPIC: solo cuando la persona pulsa el botón; envía el VIN a NHTSA
const CAMPOS_NHTSA = [
  ['Marca', 'Make'], ['Modelo', 'Model'], ['Año', 'ModelYear'], ['Versión', 'Trim'], ['Serie', 'Series'], ['Carrocería', 'BodyClass'],
  ['Litros', 'DisplacementL'], ['Cilindros', 'EngineCylinders'], ['Combustible', 'FuelTypePrimary'], ['Transmisión', 'TransmissionStyle'],
  ['Tracción', 'DriveType'], ['Planta', 'PlantCity'], ['País de planta', 'PlantCountry'],
]
export async function consultarNhtsa(vin) {
  const r = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${encodeURIComponent(vin)}?format=json`)
  if (!r.ok) throw new Error(String(r.status))
  const o = ((await r.json()).Results ?? [])[0] ?? {}
  const campos = CAMPOS_NHTSA.filter(([, k]) => o[k]).map(([nombre, k]) => [nombre, k === 'DisplacementL' ? (+o[k]).toFixed(1) : o[k]])
  return { campos, error: o.ErrorText || '' }
}

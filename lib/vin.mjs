// Decodificador de VIN del sitio: une la lógica y la base que vienen del repositorio base-vin.
// lib/vin-logic.cjs y lib/vin-db.mjs se copian con scripts/sync-vin-db.mjs; no se editan aquí.
import logica from './vin-logic.cjs'
import VIN_DB from './vin-db.mjs'

export { VIN_DB }
export const limpiarVIN = logica.limpiarVIN
export const decodificarVIN = (entrada, anioActual, db = VIN_DB) => logica.decodificarVIN(entrada, anioActual, db)
export const digitoVerificador = (vin, db = VIN_DB) => logica.digitoVerificador(vin, db)

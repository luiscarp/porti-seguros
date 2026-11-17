// Presentación del resultado de decodificarVIN: estado, desglose por segmento y textos para copiar.
// Sin dependencias de servidor; lo usan el decodificador (navegador) y scripts/test-vin.mjs.
import { decodificarVIN } from './vin.mjs'

// Segmentos del VIN estándar (ISO 3779 / NOM-001-SSP-2008)
export const SEGMENTOS = [
  { id: 'wmi', desde: 1, hasta: 3, nombre: 'WMI', que: 'País y fabricante' },
  { id: 'vds', desde: 4, hasta: 8, nombre: 'VDS', que: 'Línea, carrocería y motor' },
  { id: 'dv', desde: 9, hasta: 9, nombre: 'Dígito verificador', que: 'Control de captura' },
  { id: 'anio', desde: 10, hasta: 10, nombre: 'Año modelo', que: 'Código de año' },
  { id: 'planta', desde: 11, hasta: 11, nombre: 'Planta', que: 'Planta de ensamble' },
  { id: 'serie', desde: 12, hasta: 17, nombre: 'Consecutivo', que: 'Secuencia de producción' },
]

export const segmentoDePosicion = (pos) => SEGMENTOS.find((s) => pos >= s.desde && pos <= s.hasta)

// Estado del resultado. `tono` controla el color; la etiqueta siempre va en texto (no solo color).
export function estadoVIN(r) {
  if (r.antiguo) return { clave: 'antiguo', etiqueta: 'Serie antigua', tono: 'aviso' }
  if (!r.completo) return { clave: 'error', etiqueta: 'Revisar captura', tono: 'error' }
  if (!r.dvValido && r.errores.length) return { clave: 'dv', etiqueta: 'Verificador no coincide', tono: 'error' }
  if (r.errores.length || !r.dvValido) return { clave: 'revisar', etiqueta: 'Revisar', tono: 'aviso' }
  return { clave: 'valido', etiqueta: 'Válido', tono: 'ok' }
}

export const textoAnio = (r) => (r.anio ? `${r.anio}${r.anioAlterno ? ` (alterno ${r.anioAlterno})` : ''}` : 'No codificado')
export const textoFabricante = (r) => (r.marca ? `${r.marca}${r.tipo ? ` · ${r.tipo}` : ''}` : r.completo ? 'No está en el catálogo' : '—')

// Filas del desglose: posición, caracteres, qué es y lectura
export function desglose(r) {
  if (!r.completo) return []
  return [
    { pos: '1–3', chars: r.wmi, que: 'WMI: país y fabricante', lectura: [r.marca ?? 'Fabricante fuera del catálogo', r.pais ?? r.region, r.pequenoFabricante ? 'fabricante de bajo volumen (9 en posición 3)' : null].filter(Boolean).join(' · ') },
    { pos: '4–8', chars: r.vds, que: 'VDS: línea, carrocería, motor', lectura: 'Depende de cada marca; se muestra sin traducir.' },
    { pos: '9', chars: r.dv, que: 'Dígito verificador', lectura: r.dvValido ? `Coincide (cálculo: ${r.dvCalculado})` : `No coincide: el cálculo da ${r.dvCalculado}` },
    { pos: '10', chars: r.codAnio, que: 'Año modelo', lectura: r.anio ? `${r.anio}${r.anioAlterno ? `; año alterno ${r.anioAlterno}` : ''}${r.anioRegla === 'reciente' ? ' (orientativo)' : ''}` : 'No es un código de año' },
    { pos: '11', chars: r.planta, que: 'Planta', lectura: 'Clave interna del fabricante; se muestra sin traducir.' },
    { pos: '12–17', chars: r.serie, que: 'Consecutivo', lectura: 'Secuencia de producción.' },
  ]
}

// Resumen en texto plano para copiar (incluye marca, año y modelo capturados a mano en series antiguas)
export function resumenTexto(r, manual = {}) {
  const estado = estadoVIN(r)
  const lineas = [`VIN: ${r.vin || '(vacío)'}`, `Resultado: ${estado.etiqueta}`]
  if (r.completo) {
    lineas.push(`Fabricante: ${textoFabricante(r)}`, `País: ${r.pais ?? r.region ?? 'No identificado'}`, `Año modelo: ${textoAnio(r)}`)
    lineas.push(`Dígito verificador: ${r.dv} (cálculo: ${r.dvCalculado})`, `Planta: ${r.planta}`, `Consecutivo: ${r.serie}`)
  }
  if (r.antiguo) {
    lineas.push(`Caracteres: ${r.vin.length}`)
    if (manual.marca) lineas.push(`Marca (capturada): ${manual.marca}`)
    if (manual.anio) lineas.push(`Año (capturado): ${manual.anio}`)
    if (manual.modelo) lineas.push(`Modelo (capturado): ${manual.modelo}`)
  }
  for (const e of r.errores) lineas.push(`Error: ${e}`)
  for (const a of r.avisos) lineas.push(`Aviso: ${a}`)
  return lineas.join('\n')
}

// Varios VIN: uno por línea, o separados por comas o punto y coma
export const partirLista = (texto) => String(texto || '').split(/[\n,;]+/).map((v) => v.trim()).filter(Boolean)

export function filasLote(texto, anioActual) {
  return partirLista(texto).map((entrada, i) => {
    const r = decodificarVIN(entrada, anioActual)
    return {
      n: i + 1,
      vin: r.vin,
      r,
      estado: estadoVIN(r),
      fabricante: r.completo ? (r.marca ?? 'No está en el catálogo') : '—',
      pais: r.completo ? (r.pais ?? r.region ?? '—') : '—',
      anio: r.completo ? (r.anio ? String(r.anio) : '—') : '—',
      observacion: [...r.errores, ...r.avisos][0] ?? '',
    }
  })
}

// Tabla separada por tabuladores para pegar en Excel
export function tablaTsv(filas) {
  const limpia = (t) => String(t).replace(/[\t\n\r]+/g, ' ')
  const encabezado = ['#', 'VIN', 'Resultado', 'Fabricante', 'País', 'Año modelo', 'Observación']
  return [encabezado, ...filas.map((f) => [f.n, f.vin, f.estado.etiqueta, f.fabricante, f.pais, f.anio, f.observacion])]
    .map((fila) => fila.map(limpia).join('\t'))
    .join('\n')
}

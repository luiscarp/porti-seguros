// Presentación del resultado de decodificarVIN: estado, ficha técnica, desglose y textos para copiar.
// Textos y reglas tomados de base-vin/web/index.html. Sin dependencias de servidor; lo usan los
// componentes del decodificador (navegador) y scripts/test-vin.mjs.
import { decodificarVIN } from './vin.mjs'

// Segmentos del VIN estándar (ISO 3779 / NOM-001-SSP-2008)
export const SEGMENTOS = [
  { id: 'wmi', desde: 1, hasta: 3, nombre: 'WMI', que: 'País y fabricante' },
  { id: 'vds', desde: 4, hasta: 8, nombre: 'VDS', que: 'Modelo, carrocería y motor' },
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

export const textoAnio = (r) => (r.anio ? `${r.anio}${r.anioAlterno ? ` (alterno ${r.anioAlterno})` : ''}` : 'No identificado')
export const textoFabricante = (r) => (r.marca ? `${r.marca}${r.tipo ? ` · ${r.tipo}` : ''}` : r.completo ? 'No catalogado' : '—')
export const textoPais = (r) => r.pais || r.paisFabricante || 'No identificado'
export const textoModelo = (d) => (d ? [d.modelo, d.version, d.serie].filter(Boolean).join(' ') : '')
export const textoPlanta = (d) => [d.planta_ciudad, d.planta_estado, d.planta_pais].filter(Boolean).join(', ')

export function motor(d) {
  const p = []
  if (d.motor_litros) p.push(`${d.motor_litros} L`)
  if (d.cilindros) p.push(`${d.cilindros} cil.${d.configuracion_motor ? `, ${d.configuracion_motor}` : ''}`)
  if (d.potencia_hp) p.push(`${d.potencia_hp} hp`)
  if (d.turbo === 'Sí') p.push('turbo')
  if (d.motor_modelo) p.push(`código ${d.motor_modelo}`)
  return p.join(' · ')
}

// Ficha técnica: solo los campos que la base trae para este VIN
export function ficha(r) {
  const d = r.datos ?? {}
  return [
    ['Modelo', d.modelo], ['Versión', d.version], ['Serie', d.serie], ['Carrocería', d.carroceria],
    ['Puertas', d.puertas], ['Motor', motor(d)], ['Combustible', [d.combustible, d.combustible_secundario].filter(Boolean).join(' / ')],
    ['Electrificación', d.electrificacion], ['Batería', d.bateria_kwh ? `${d.bateria_kwh} kWh` : ''],
    ['Transmisión', d.transmision], ['Tracción', d.traccion], ['Peso bruto vehicular', d.peso_bruto],
    ['Planta', [d.planta_empresa, d.planta_ciudad, d.planta_estado, d.planta_pais].filter(Boolean).join(', ') + (r.plantaDeTabla ? ' (por código de planta)' : '')],
  ].filter(([, valor]) => valor)
}

export const notaFuente = (r) =>
  r.fuenteModelo
    ? `Fuente: ${r.fuenteModelo}${r.esquema ? ` · esquema ${r.esquema}` : ''}. Datos de fabricación para el mercado de EE. UU.; el equipamiento vendido en México puede variar.`
    : ''

// Filas del desglose: posición, caracteres, qué es y lectura
export function desglose(r) {
  if (!r.completo) return []
  const d = r.datos ?? {}
  const modelo = textoModelo(d)
  const pl = textoPlanta(d)
  return [
    {
      pos: '1–3', seg: 'wmi', chars: r.wmi.slice(0, 3), que: 'Fabricante (WMI)',
      lectura: [
        r.marca ? `${r.marca}${r.tipo ? `, ${r.tipo.toLowerCase()}` : ''}.` : 'Fabricante no catalogado.',
        r.pais ? `Hecho en ${r.pais}.` : '',
        r.pequenoFabricante ? `El 9 indica fabricante de bajo volumen; su clave completa es ${r.wmi} (posiciones 1–3 y 12–14).` : '',
        r.fuenteFabricante ? `Fuente: ${r.fuenteFabricante}.` : '',
      ].filter(Boolean).join(' '),
    },
    { pos: '4–8', seg: 'vds', chars: r.vds, que: 'Descripción del vehículo (VDS)', lectura: modelo ? `${modelo}${motor(d) ? ` · motor ${motor(d)}` : ''}.` : 'Este código no está en las reglas de la base.' },
    { pos: '9', seg: 'dv', chars: r.dv, que: 'Dígito verificador', lectura: r.dvValido ? `Correcto: el cálculo también da ${r.dvCalculado}.` : `No coincide: el cálculo da ${r.dvCalculado}.` },
    {
      pos: '10', seg: 'anio', chars: r.codAnio, que: 'Año modelo',
      lectura: r.anio
        ? `${r.anio}${r.anioAlterno ? `. El código se repite cada 30 años (${r.anioAlterno}).` : '.'}${r.anioRegla === 'posicion7' ? ' Elegido por la posición 7: letra indica 2010 en adelante, número indica 1980 a 2009.' : ''}`
        : 'Código no reconocido.',
    },
    { pos: '11', seg: 'planta', chars: r.planta, que: 'Planta de ensamble', lectura: pl ? `${d.planta_empresa ? `${d.planta_empresa}, ` : ''}${pl}.` : 'Sin dato para este código.' },
    { pos: '12–17', seg: 'serie', chars: r.serie, que: 'Número consecutivo', lectura: 'Secuencia de producción de la unidad.' },
  ]
}

// Resumen en texto plano para copiar (en series antiguas incluye marca, año y modelo capturados a mano)
export function resumenTexto(r, manual = {}, enVivo = '') {
  if (r.antiguo) {
    return [
      `Número de serie: ${r.vin} (${r.longitud} caracteres)`, 'Resultado: Serie antigua, formato anterior a 1981',
      `Marca: ${manual.marca || 'sin capturar'}`, `Año modelo: ${manual.anio || 'sin capturar'}`, `Modelo: ${manual.modelo || 'sin capturar'}`,
      'Fuente de marca, año y modelo: captura manual',
    ].join('\n')
  }
  const d = r.datos ?? {}
  const l = [`VIN: ${r.vin}`, `Resultado: ${estadoVIN(r).etiqueta}`, `Fabricante: ${r.marca || 'No catalogado'}${r.tipo ? ` (${r.tipo})` : ''}`]
  if (textoModelo(d)) l.push(`Modelo: ${textoModelo(d)}`)
  if (d.carroceria) l.push(`Carrocería: ${d.carroceria}${d.puertas ? `, ${d.puertas} puertas` : ''}`)
  if (motor(d)) l.push(`Motor: ${motor(d)}`)
  if (d.combustible) l.push(`Combustible: ${d.combustible}`)
  if (d.transmision) l.push(`Transmisión: ${d.transmision}`)
  if (d.traccion) l.push(`Tracción: ${d.traccion}`)
  if (d.peso_bruto) l.push(`Peso bruto vehicular: ${d.peso_bruto}`)
  l.push(`País de fabricación: ${r.pais || 'No identificado'}`, `Año modelo: ${r.anio || 'No identificado'}`,
    `Dígito verificador: ${r.dv}${r.dvValido ? ' (correcto)' : ` (no coincide, cálculo ${r.dvCalculado})`}`)
  if (textoPlanta(d)) l.push(`Planta: ${textoPlanta(d)}`)
  if (r.fuenteModelo) l.push(`Fuente: ${r.fuenteModelo}`)
  if (enVivo) l.push(`Consulta en vivo NHTSA: ${enVivo}`)
  return l.join('\n')
}

// Observación de una fila del lote
export function observacion(r) {
  if (r.errores.length) return r.errores[0]
  if (r.antiguo) return r.posibleIncompleto ? 'Serie antigua o VIN incompleto: revisar captura' : 'Serie antigua: capturar marca, año y modelo a mano'
  if (r.dvValido === false) return r.avisos[0]
  if (r.marca && !(r.datos ?? {}).modelo) return 'Modelo sin dato en la base'
  return ''
}

// Varios VIN: uno por línea, o separados por comas o punto y coma
export const partirLista = (texto) => String(texto || '').split(/[\n,;]+/).map((v) => v.trim()).filter(Boolean)

export async function filasLote(texto, anioActual, cargar) {
  const filas = []
  for (const [i, entrada] of partirLista(texto).entries()) {
    let r
    try {
      r = await decodificarVIN(entrada, anioActual, cargar)
    } catch {
      r = { vin: entrada.toUpperCase().replace(/[^A-Z0-9]/g, ''), errores: ['No se pudieron cargar los datos'], avisos: [] }
    }
    const d = r.datos ?? {}
    filas.push({
      n: i + 1,
      vin: r.vin,
      r,
      estado: estadoVIN(r),
      fabricante: r.marca || '—',
      modelo: textoModelo(d) || '—',
      motor: d.motor_litros ? `${d.motor_litros} L` : '—',
      pais: r.pais || '—',
      anio: r.anio ? String(r.anio) : '—',
      observacion: observacion(r),
    })
  }
  return filas
}

// Tabla separada por tabuladores para pegar en Excel (mismas columnas que la página de base-vin)
export function tablaTsv(filas) {
  const limpia = (t) => String(t ?? '').replace(/[\t\n\r]+/g, ' ')
  const encabezado = ['Número de serie', 'Resultado', 'Fabricante', 'Tipo', 'Modelo', 'Versión', 'Carrocería', 'Puertas', 'Motor (L)', 'Cilindros', 'Combustible', 'Transmisión', 'Tracción', 'Peso bruto', 'País', 'Año modelo', 'Verificador', 'Planta', 'Fuente del modelo', 'Observación']
  return [encabezado, ...filas.map(({ r, estado, observacion: obs }) => {
    const d = r.datos ?? {}
    return [r.vin, estado.etiqueta, r.marca, r.tipo, d.modelo, d.version, d.carroceria, d.puertas, d.motor_litros, d.cilindros,
      d.combustible, d.transmision, d.traccion, d.peso_bruto, r.pais, r.anio,
      r.completo ? (r.dvValido ? 'Correcto' : 'No coincide') : r.antiguo ? 'No aplica' : '',
      [d.planta_ciudad, d.planta_pais].filter(Boolean).join(', '), r.fuenteModelo, obs]
  })]
    .map((fila) => fila.map(limpia).join('\t'))
    .join('\n')
}

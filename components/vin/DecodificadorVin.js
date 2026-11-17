import { useEffect, useMemo, useRef, useState } from 'react'
import { consultarNhtsa, decodificarVIN, limpiarVIN } from '@/lib/vin.mjs'
import { SEGMENTOS, desglose, estadoVIN, ficha, notaFuente, resumenTexto, segmentoDePosicion, textoAnio, textoFabricante, textoModelo, textoPais } from '@/lib/vin-presentacion.mjs'
import { EtiquetaEstado, MENSAJE_COPIA_FALLIDA, botonSecundario, campo, copiar } from '@/components/vin/comunes'

// Color de cada segmento en la placa (borde + fondo claro; la leyenda repite el nombre en texto)
const COLOR_SEGMENTO = {
  wmi: 'border-sky-500 bg-sky-50',
  vds: 'border-violet-500 bg-violet-50',
  dv: 'border-amber-500 bg-amber-50',
  anio: 'border-emerald-500 bg-emerald-50',
  planta: 'border-rose-500 bg-rose-50',
  serie: 'border-slate-500 bg-slate-100',
}

function Placa({ vin, conSegmentos }) {
  return (
    <div className='-mx-1 overflow-x-auto px-1 pb-2' tabIndex={0} role='group' aria-label={`Número de serie, ${vin.length} caracteres`}>
      <ol className='flex min-w-max gap-1'>
        {vin.split('').map((c, i) => {
          const seg = conSegmentos ? segmentoDePosicion(i + 1) : null
          return (
            <li key={i} className={`flex w-9 flex-col items-center rounded-lg border-2 py-1 ${seg ? COLOR_SEGMENTO[seg.id] : 'border-slate-300 bg-white'}`}>
              <span className='text-[10px] font-semibold text-slate-500'>{i + 1}</span>
              <span className='font-mono text-lg font-bold text-slate-900'>{c}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function Leyenda() {
  return (
    <ul className='mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700'>
      {SEGMENTOS.map((s) => (
        <li key={s.id} className='flex items-center gap-2'>
          <span className={`inline-block h-3.5 w-3.5 rounded border-2 ${COLOR_SEGMENTO[s.id]}`} aria-hidden='true' />
          {s.desde === s.hasta ? s.desde : `${s.desde}–${s.hasta}`}: {s.nombre}
        </li>
      ))}
    </ul>
  )
}

function Dato({ nombre, valor }) {
  return (
    <div>
      <dt className='text-xs font-semibold uppercase tracking-wider text-slate-500'>{nombre}</dt>
      <dd className='mt-1 font-semibold text-slate-900'>{valor}</dd>
    </div>
  )
}

function FichaTecnica({ r }) {
  const filas = ficha(r)
  if (!filas.length) return null
  return (
    <div className='mt-6 rounded-xl border border-slate-200 p-4'>
      <h3 className='text-base font-bold'>Ficha técnica</h3>
      <dl className='mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2'>
        {filas.map(([k, v]) => (
          <div key={k}>
            <dt className='text-xs font-semibold uppercase tracking-wider text-slate-500'>{k}</dt>
            <dd className='mt-0.5 text-slate-900'>{v}</dd>
          </div>
        ))}
      </dl>
      {notaFuente(r) && <p className='mt-3 text-sm text-slate-600'>{notaFuente(r)}</p>}
    </div>
  )
}

function FormatosAntiguos({ r }) {
  return (r.formatosAntiguos ?? []).map((f) =>
    f.posiciones.length === 0 ? (
      <p key={`${f.marca}${f.desde}`} className='mt-4 text-sm text-slate-600'>
        {f.marca} {f.desde}–{f.hasta}: usa {r.longitud} caracteres; la fuente no publica tabla de posiciones.
      </p>
    ) : (
      <div key={`${f.marca}${f.desde}`} className='mt-6'>
        <h3 className='text-base font-bold'>Si es {f.marca} ({f.desde}–{f.hasta})</h3>
        <div className='mt-2 overflow-x-auto rounded-xl border border-slate-200'>
          <table className='w-full min-w-[480px] text-left text-sm'>
            <thead className='bg-brand-50 text-slate-900'>
              <tr>
                {['Posición', 'Caracteres', 'Qué es', 'Lectura'].map((t) => <th key={t} scope='col' className='px-3 py-2'>{t}</th>)}
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-200'>
              {f.posiciones.map((p) => (
                <tr key={p.pos}>
                  <td className='px-3 py-2 font-semibold'>{p.pos}</td>
                  <td className='px-3 py-2 font-mono font-bold'>{p.caracteres}</td>
                  <td className='px-3 py-2'>{p.significado}</td>
                  <td className='px-3 py-2'>{p.lectura || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className='mt-2 text-sm text-slate-600'>Fuente secundaria: {f.fuente}. Las lecturas solo cubren ejemplos publicados.</p>
      </div>
    )
  )
}

const MENSAJE_SIN_DATOS = 'No se pudieron cargar los datos de fabricante y modelo. Revisa tu conexión; país, año y verificador siguen siendo válidos.'

export default function DecodificadorVin() {
  const [entrada, setEntrada] = useState('')
  const [r, setR] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [manual, setManual] = useState({ marca: '', anio: '', modelo: '' })
  const [mensajeCopia, setMensajeCopia] = useState('')
  const [vivo, setVivo] = useState({ estado: 'inactivo' })
  const turno = useRef(0)
  const anioActual = useMemo(() => new Date().getFullYear(), [])

  const vacio = limpiarVIN(entrada) === ''

  // Decodifica en cada cambio; descarta respuestas de capturas anteriores
  useEffect(() => {
    const mio = ++turno.current
    setVivo({ estado: 'inactivo' })
    if (vacio) {
      setR(null)
      setCargando(false)
      return
    }
    setCargando(true)
    decodificarVIN(entrada, anioActual)
      .catch(() => ({ vin: limpiarVIN(entrada), errores: [MENSAJE_SIN_DATOS], avisos: [] }))
      .then((res) => {
        if (mio !== turno.current) return
        setR(res)
        setCargando(false)
      })
  }, [entrada, anioActual, vacio])

  const estado = r ? estadoVIN(r) : null
  const filas = r ? desglose(r) : []
  const d = r?.datos ?? {}
  const textoVivo = vivo.estado === 'listo' ? vivo.campos.map(([k, v]) => `${k} ${v}`).join(', ') : ''

  const cambiarManual = (e) => setManual((m) => ({ ...m, [e.target.name]: e.target.value }))
  const copiarResumen = async () => {
    const ok = await copiar(resumenTexto(r, manual, textoVivo))
    setMensajeCopia(ok ? 'Resumen copiado.' : MENSAJE_COPIA_FALLIDA)
  }
  const consultar = async () => {
    const mio = turno.current // si cambia la captura mientras responde NHTSA, se descarta
    setVivo({ estado: 'consultando' })
    try {
      const res = await consultarNhtsa(r.vin)
      if (mio === turno.current) setVivo({ estado: 'listo', ...res })
    } catch {
      if (mio === turno.current) setVivo({ estado: 'error' })
    }
  }

  return (
    <div>
      <label htmlFor='vin' className='font-semibold text-slate-900'>Número de serie (VIN)</label>
      <div className='mt-2 flex items-center gap-3'>
        <input
          id='vin'
          type='text'
          inputMode='text'
          autoComplete='off'
          autoCapitalize='characters'
          spellCheck={false}
          value={entrada}
          onChange={(e) => { setEntrada(e.target.value); setMensajeCopia('') }}
          placeholder='Ej. 3N1CN7AD3KL812345'
          aria-describedby='vin-ayuda vin-contador'
          className={`${campo} mt-0 font-mono text-lg uppercase tracking-wider`}
        />
      </div>
      <p className='mt-2 flex flex-wrap justify-between gap-2 text-sm text-slate-600'>
        <span id='vin-ayuda'>Se ignoran espacios y guiones. Se revisa mientras escribes.</span>
        <span id='vin-contador' className='font-semibold'>{limpiarVIN(entrada).length} de 17 caracteres</span>
      </p>

      {/* Anuncio para lectores de pantalla: estado y primer mensaje */}
      <p className='sr-only' aria-live='polite' role='status'>
        {vacio || !r ? '' : cargando ? 'Buscando en la base…' : `${estado.etiqueta}. ${[...r.errores, ...r.avisos][0] ?? ''}`}
      </p>

      {!vacio && r && (
        <div className={`mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-opacity md:p-6 ${cargando ? 'opacity-60' : ''}`} aria-busy={cargando}>
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <EtiquetaEstado estado={estado} grande />
            {(r.completo || r.antiguo) && (
              <button type='button' onClick={copiarResumen} className={botonSecundario}>Copiar resumen</button>
            )}
          </div>
          {mensajeCopia && <p className='mt-3 text-sm font-medium text-slate-700' role='status'>{mensajeCopia}</p>}

          {r.completo && (
            <dl className='mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Dato nombre='Fabricante' valor={textoFabricante(r)} />
              <Dato nombre='Modelo' valor={textoModelo(d) || 'Sin dato en la base'} />
              <Dato nombre='País de fabricación' valor={textoPais(r)} />
              <Dato nombre='Año modelo' valor={textoAnio(r)} />
            </dl>
          )}
          {r.antiguo && (
            <dl className='mt-5 grid gap-4 sm:grid-cols-2'>
              <Dato nombre='Longitud' valor={`${r.longitud} caracteres`} />
              <Dato nombre='Formato' valor='Anterior a 1981' />
            </dl>
          )}

          {(r.errores.length > 0 || r.avisos.length > 0) && (
            <ul className='mt-5 space-y-2'>
              {r.errores.map((m) => (
                <li key={m} className='rounded-lg bg-red-50 px-4 py-2 text-sm text-red-900'><strong>Error:</strong> {m}</li>
              ))}
              {r.avisos.map((m) => (
                <li key={m} className='rounded-lg bg-amber-50 px-4 py-2 text-sm text-amber-900'><strong>Aviso:</strong> {m}</li>
              ))}
            </ul>
          )}

          {r.sugerencia && (
            <div className='mt-4 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 px-4 py-3 text-sm'>
              <span>Corrección sugerida: <span className='font-mono font-bold'>{r.sugerencia}</span></span>
              <button type='button' onClick={() => setEntrada(r.sugerencia)} className={botonSecundario}>Aplicar corrección</button>
            </div>
          )}

          {(r.completo || r.antiguo) && (
            <div className='mt-6'>
              <h3 className='text-base font-bold'>Placa</h3>
              <div className='mt-2'>
                <Placa vin={r.vin} conSegmentos={r.completo} />
              </div>
              {r.completo && <Leyenda />}
            </div>
          )}

          {r.antiguo && <FormatosAntiguos r={r} />}

          {r.antiguo && (
            <fieldset className='mt-6 rounded-xl border border-slate-200 p-4'>
              <legend className='px-1 font-bold text-slate-900'>Datos de la factura o tarjeta de circulación (opcional)</legend>
              <p className='text-sm text-slate-600'>Captura los datos desde la factura o la tarjeta de circulación. Se incluyen al copiar el resumen.</p>
              <div className='mt-3 grid gap-3 sm:grid-cols-3'>
                {[['marca', 'Marca'], ['anio', 'Año modelo'], ['modelo', 'Modelo']].map(([nombre, etiqueta]) => (
                  <div key={nombre}>
                    <label htmlFor={`manual-${nombre}`} className='text-sm font-semibold text-slate-900'>{etiqueta}</label>
                    <input id={`manual-${nombre}`} name={nombre} value={manual[nombre]} onChange={cambiarManual} inputMode={nombre === 'anio' ? 'numeric' : 'text'} maxLength={nombre === 'anio' ? 4 : undefined} autoComplete='off' className={campo} />
                  </div>
                ))}
              </div>
            </fieldset>
          )}

          {filas.length > 0 && (
            <div className='mt-6'>
              <h3 className='text-base font-bold'>Desglose</h3>
              <div className='mt-2 overflow-x-auto rounded-xl border border-slate-200'>
                <table className='w-full min-w-[560px] text-left text-sm'>
                  <thead className='bg-brand-50 text-slate-900'>
                    <tr>
                      <th scope='col' className='px-3 py-2'>Posición</th>
                      <th scope='col' className='px-3 py-2'>Caracteres</th>
                      <th scope='col' className='px-3 py-2'>Qué es</th>
                      <th scope='col' className='px-3 py-2'>Lectura</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-slate-200'>
                    {filas.map((f) => (
                      <tr key={f.pos}>
                        <td className='px-3 py-2 font-semibold'>{f.pos}</td>
                        <td className='px-3 py-2 font-mono font-bold'>{f.chars}</td>
                        <td className='px-3 py-2'>{f.que}</td>
                        <td className='px-3 py-2'>{f.lectura}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {r.completo && <FichaTecnica r={r} />}

          {r.completo && (
            <div className='mt-6 border-t border-slate-200 pt-5'>
              <div className='flex flex-wrap items-center gap-3'>
                <button type='button' onClick={consultar} disabled={vivo.estado === 'consultando'} className={botonSecundario}>
                  {vivo.estado === 'consultando' ? 'Consultando a NHTSA…' : 'Consultar NHTSA en línea'}
                </button>
                <p className='text-sm text-slate-600'>Envía este VIN a vPIC de la NHTSA para completar datos que falten. Es opcional.</p>
              </div>
              <div aria-live='polite'>
                {vivo.estado === 'error' && (
                  <p className='mt-3 rounded-lg bg-amber-50 px-4 py-2 text-sm text-amber-900'>No se pudo consultar a NHTSA desde aquí (sin conexión o el sitio bloquea la consulta). La decodificación local sigue siendo válida.</p>
                )}
                {vivo.estado === 'listo' && vivo.campos.length === 0 && <p className='mt-3 text-sm text-slate-600'>NHTSA no tiene datos de este VIN.</p>}
                {vivo.estado === 'listo' && vivo.campos.length > 0 && (
                  <div className='mt-4 rounded-xl border border-slate-200 p-4'>
                    <h3 className='text-base font-bold'>Respuesta en vivo de NHTSA</h3>
                    <dl className='mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2'>
                      {vivo.campos.map(([k, v]) => (
                        <div key={k}>
                          <dt className='text-xs font-semibold uppercase tracking-wider text-slate-500'>{k}</dt>
                          <dd className='mt-0.5 text-slate-900'>{v}</dd>
                        </div>
                      ))}
                    </dl>
                    {vivo.error && <p className='mt-3 text-sm text-slate-600'>NHTSA: {vivo.error}</p>}
                    <p className='mt-2 text-sm text-slate-600'>Valores tal como los entrega NHTSA, en inglés.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

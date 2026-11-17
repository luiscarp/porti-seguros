import { useMemo, useState } from 'react'
import { decodificarVIN } from '@/lib/vin.mjs'
import { SEGMENTOS, desglose, detallesModelo, estadoVIN, fuenteModelo, resumenTexto, segmentoDePosicion, textoAnio, textoFabricante, textoModelo } from '@/lib/vin-presentacion.mjs'
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

export default function DecodificadorVin() {
  const [entrada, setEntrada] = useState('')
  const [manual, setManual] = useState({ marca: '', anio: '', modelo: '' })
  const [mensajeCopia, setMensajeCopia] = useState('')
  const anioActual = useMemo(() => new Date().getFullYear(), [])

  const vacio = entrada.replace(/[^A-Za-z0-9]/g, '') === ''
  const r = useMemo(() => decodificarVIN(entrada, anioActual), [entrada, anioActual])
  const estado = estadoVIN(r)
  const filas = desglose(r)

  const cambiarManual = (e) => setManual((m) => ({ ...m, [e.target.name]: e.target.value }))
  const copiarResumen = async () => {
    const ok = await copiar(resumenTexto(r, manual))
    setMensajeCopia(ok ? 'Resumen copiado.' : MENSAJE_COPIA_FALLIDA)
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
        <span id='vin-contador' className='font-semibold'>{r.vin.length} de 17 caracteres</span>
      </p>

      {/* Anuncio para lectores de pantalla: estado y primer mensaje */}
      <p className='sr-only' aria-live='polite' role='status'>
        {vacio ? '' : `${estado.etiqueta}. ${[...r.errores, ...r.avisos][0] ?? ''}`}
      </p>

      {!vacio && (
        <div className='mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6'>
          <div className='flex flex-wrap items-center justify-between gap-3'>
            <EtiquetaEstado estado={estado} grande />
            {(r.completo || r.antiguo) && (
              <button type='button' onClick={copiarResumen} className={botonSecundario}>Copiar resumen</button>
            )}
          </div>
          {mensajeCopia && <p className='mt-3 text-sm font-medium text-slate-700' role='status'>{mensajeCopia}</p>}

          {r.completo && (
            <>
              <dl className='mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                <Dato nombre='Fabricante' valor={textoFabricante(r)} />
                <Dato nombre='Modelo' valor={textoModelo(r) || 'Sin dato en la base'} />
                <Dato nombre='País' valor={r.pais ?? r.region ?? 'No identificado'} />
                <Dato nombre='Año modelo' valor={textoAnio(r)} />
              </dl>
              {r.modelo && (
                <p className='mt-3 text-sm text-slate-600'>
                  {[detallesModelo(r.modelo), fuenteModelo(r)].filter(Boolean).join('. ')}.
                </p>
              )}
            </>
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

          {r.antiguo && (
            <fieldset className='mt-6 rounded-xl border border-slate-200 p-4'>
              <legend className='px-1 font-bold text-slate-900'>Datos de la factura o tarjeta de circulación (opcional)</legend>
              <p className='text-sm text-slate-600'>En series anteriores a 1981 la marca, el año y el modelo no se leen por posición. Si los capturas, se incluyen en el resumen que copias.</p>
              <div className='mt-3 grid gap-3 sm:grid-cols-3'>
                {[['marca', 'Marca'], ['anio', 'Año'], ['modelo', 'Modelo']].map(([nombre, etiqueta]) => (
                  <div key={nombre}>
                    <label htmlFor={`manual-${nombre}`} className='text-sm font-semibold text-slate-900'>{etiqueta}</label>
                    <input id={`manual-${nombre}`} name={nombre} value={manual[nombre]} onChange={cambiarManual} inputMode={nombre === 'anio' ? 'numeric' : 'text'} className={campo} />
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
        </div>
      )}
    </div>
  )
}

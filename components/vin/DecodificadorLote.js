import { useEffect, useMemo, useRef, useState } from 'react'
import { filasLote, tablaTsv } from '@/lib/vin-presentacion.mjs'
import { EtiquetaEstado, MENSAJE_COPIA_FALLIDA, botonSecundario, campo, copiar } from '@/components/vin/comunes'

// Varios VIN a la vez: uno por línea (también acepta comas y punto y coma).
export default function DecodificadorLote() {
  const [texto, setTexto] = useState('')
  const [mensajeCopia, setMensajeCopia] = useState('')
  const anioActual = useMemo(() => new Date().getFullYear(), [])
  const [filas, setFilas] = useState([])
  const [cargando, setCargando] = useState(false)
  const turno = useRef(0)

  // Decodifica la lista en cada cambio; descarta resultados de capturas anteriores
  useEffect(() => {
    const mio = ++turno.current
    setCargando(true)
    filasLote(texto, anioActual).then((res) => {
      if (mio !== turno.current) return
      setFilas(res)
      setCargando(false)
    })
  }, [texto, anioActual])
  const porRevisar = filas.filter((f) => f.estado.tono !== 'ok').length

  const copiarTabla = async () => {
    const ok = await copiar(tablaTsv(filas))
    setMensajeCopia(ok ? 'Tabla copiada. Pégala en Excel o Google Sheets.' : MENSAJE_COPIA_FALLIDA)
  }

  return (
    <div>
      <label htmlFor='vin-lote' className='font-semibold text-slate-900'>Números de serie</label>
      <textarea
        id='vin-lote'
        rows={5}
        value={texto}
        onChange={(e) => { setTexto(e.target.value); setMensajeCopia('') }}
        spellCheck={false}
        autoCapitalize='characters'
        placeholder={'Uno por línea, por ejemplo:\n3N1CN7AD3KL812345\n3VW1K1AJ3HM204518'}
        aria-describedby='vin-lote-ayuda'
        className={`${campo} font-mono uppercase`}
      />
      <p id='vin-lote-ayuda' className='mt-2 text-sm text-slate-600'>Uno por línea; también puedes separarlos con comas o punto y coma.</p>

      <p className='mt-4 font-semibold text-slate-900' aria-live='polite' role='status'>
        {filas.length > 0 ? `${filas.length} ${filas.length === 1 ? 'número' : 'números'}; ${porRevisar ? `${porRevisar} por revisar` : 'todos válidos'}.` : ''}
      </p>

      {filas.length > 0 && (
        <>
          <div className={`mt-3 overflow-x-auto rounded-xl border border-slate-200 transition-opacity ${cargando ? 'opacity-60' : ''}`} aria-busy={cargando}>
            <table className='w-full min-w-[960px] text-left text-sm'>
              <thead className='bg-brand-50 text-slate-900'>
                <tr>
                  {['#', 'VIN', 'Resultado', 'Fabricante', 'Modelo', 'Motor', 'País', 'Año', 'Observación'].map((t) => (
                    <th key={t} scope='col' className='px-3 py-2'>{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200 bg-white'>
                {filas.map((f) => (
                  <tr key={f.n} className='align-top'>
                    <td className='px-3 py-2'>{f.n}</td>
                    <td className='px-3 py-2 font-mono font-semibold'>{f.vin || '—'}</td>
                    <td className='px-3 py-2'><EtiquetaEstado estado={f.estado} /></td>
                    <td className='px-3 py-2'>{f.fabricante}</td>
                    <td className='px-3 py-2'>{f.modelo}</td>
                    <td className='px-3 py-2'>{f.motor}</td>
                    <td className='px-3 py-2'>{f.pais}</td>
                    <td className='px-3 py-2'>{f.anio}</td>
                    <td className='min-w-[280px] px-3 py-2 text-slate-600'>{f.observacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='mt-4 flex flex-wrap items-center gap-3'>
            <button type='button' onClick={copiarTabla} className={botonSecundario}>Copiar tabla para Excel</button>
            {mensajeCopia && <p className='text-sm font-medium text-slate-700' role='status'>{mensajeCopia}</p>}
          </div>
        </>
      )}
    </div>
  )
}

import { useState } from 'react'
import Link from 'next/link'
import { whatsappLink } from '@/config/business'
import { RAMOS } from '@/content/seguros'
import { track } from '@/lib/analytics'

// Formulario corto sin base de datos: arma el mensaje y abre WhatsApp. No pide CURP, RFC, salud ni tarjetas.
const OPCIONES = [...RAMOS.map((ramo) => ramo.nombre), 'Otro / no estoy seguro']

export function mensajeCotizacion({ nombre, telefono, tipo, mensaje }) {
  const partes = [`Hola, soy ${nombre.trim()}. Me interesa cotizar: ${tipo}.`]
  if (mensaje.trim()) partes.push(mensaje.trim().replace(/\.?$/, '.'))
  partes.push(`Mi teléfono: ${telefono.trim()}. (Desde: /cotizar)`)
  return partes.join(' ')
}

function validar({ nombre, telefono, tipo, consentimiento }) {
  const errores = {}
  if (!nombre.trim()) errores.nombre = 'Escribe tu nombre.'
  if (telefono.replace(/\D/g, '').length !== 10) errores.telefono = 'Escribe un teléfono de 10 dígitos.'
  if (!tipo) errores.tipo = 'Elige el tipo de seguro.'
  if (!consentimiento) errores.consentimiento = 'Necesitamos tu autorización para contactarte.'
  return errores
}

const campo = 'mt-2 block w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500'

export default function FormularioCotizar({ onEnviar }) {
  const [datos, setDatos] = useState({ nombre: '', telefono: '', tipo: '', mensaje: '', consentimiento: false })
  const [errores, setErrores] = useState({})

  const cambiar = (e) => {
    const { name, value, type, checked } = e.target
    setDatos((d) => ({ ...d, [name]: type === 'checkbox' ? checked : value }))
    setErrores((errs) => ({ ...errs, [name]: undefined }))
  }

  const enviar = (e) => {
    e.preventDefault()
    const encontrados = validar(datos)
    setErrores(encontrados)
    if (Object.keys(encontrados).length) return
    track('envio_cotizar', { pagina: '/cotizar', tipo: datos.tipo })
    onEnviar?.(datos)
    window.open(whatsappLink(mensajeCotizacion(datos)), '_blank', 'noopener,noreferrer')
  }

  const error = (nombre) =>
    errores[nombre] && <p id={`error-${nombre}`} className='mt-1 text-sm font-medium text-red-700'>{errores[nombre]}</p>

  return (
    <form onSubmit={enviar} noValidate className='rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8'>
      <h2 className='text-2xl font-bold'>Solicita tu cotización</h2>
      <p className='mt-2 text-slate-600'>Al enviar se abre WhatsApp con tu mensaje listo; solo tienes que mandarlo.</p>

      <div className='mt-6 space-y-5'>
        <div>
          <label htmlFor='nombre' className='font-semibold text-slate-900'>Nombre</label>
          <input id='nombre' name='nombre' type='text' autoComplete='name' value={datos.nombre} onChange={cambiar}
            aria-invalid={!!errores.nombre} aria-describedby={errores.nombre ? 'error-nombre' : undefined} className={campo} />
          {error('nombre')}
        </div>

        <div>
          <label htmlFor='telefono' className='font-semibold text-slate-900'>Teléfono</label>
          <input id='telefono' name='telefono' type='tel' inputMode='tel' autoComplete='tel-national' placeholder='614 000 0000'
            value={datos.telefono} onChange={cambiar}
            aria-invalid={!!errores.telefono} aria-describedby={errores.telefono ? 'error-telefono' : undefined} className={campo} />
          {error('telefono')}
        </div>

        <div>
          <label htmlFor='tipo' className='font-semibold text-slate-900'>Tipo de seguro</label>
          <select id='tipo' name='tipo' value={datos.tipo} onChange={cambiar}
            aria-invalid={!!errores.tipo} aria-describedby={errores.tipo ? 'error-tipo' : undefined} className={campo}>
            <option value=''>Elige una opción</option>
            {OPCIONES.map((opcion) => (
              <option key={opcion} value={opcion}>{opcion}</option>
            ))}
          </select>
          {error('tipo')}
        </div>

        <div>
          <label htmlFor='mensaje' className='font-semibold text-slate-900'>
            Mensaje <span className='font-normal text-slate-500'>(opcional)</span>
          </label>
          <textarea id='mensaje' name='mensaje' rows={3} value={datos.mensaje} onChange={cambiar}
            placeholder='Por ejemplo: auto 2020 para uso personal' className={campo} />
        </div>

        <div>
          <label className='flex items-start gap-3'>
            <input type='checkbox' name='consentimiento' checked={datos.consentimiento} onChange={cambiar}
              aria-invalid={!!errores.consentimiento} aria-describedby={errores.consentimiento ? 'error-consentimiento' : undefined}
              className='mt-1 h-5 w-5 rounded border-slate-300 text-brand-700 focus:ring-brand-500' />
            <span className='text-sm leading-6 text-slate-700'>
              Acepto que PorTi Seguros me contacte para darme la cotización, conforme al{' '}
              <Link href='/aviso-de-privacidad' className='font-semibold text-brand-700 underline'>aviso de privacidad</Link>.
            </span>
          </label>
          {error('consentimiento')}
        </div>
      </div>

      <button type='submit' className='mt-8 w-full rounded-full bg-green-700 px-6 py-3.5 font-bold text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2'>
        Enviar por WhatsApp
      </button>
    </form>
  )
}

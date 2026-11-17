import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/solid'

// Piezas compartidas del decodificador de VIN: estado (texto + icono + color) y copiado al portapapeles.

const TONOS = {
  ok: { clases: 'bg-green-50 text-green-900 ring-green-600/30', Icono: CheckCircleIcon, icono: 'text-green-700' },
  aviso: { clases: 'bg-amber-50 text-amber-900 ring-amber-600/30', Icono: ExclamationTriangleIcon, icono: 'text-amber-600' },
  error: { clases: 'bg-red-50 text-red-900 ring-red-600/30', Icono: XCircleIcon, icono: 'text-red-700' },
}

export function EtiquetaEstado({ estado, grande = false }) {
  const { clases, Icono, icono } = TONOS[estado.tono]
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-bold ring-1 ring-inset ${clases} ${grande ? 'px-4 py-1.5 text-base' : 'px-2.5 py-1 text-xs'}`}>
      <Icono className={`${grande ? 'h-5 w-5' : 'h-4 w-4'} ${icono}`} aria-hidden='true' />
      {estado.etiqueta}
    </span>
  )
}

// Copia texto al portapapeles; si la API no está disponible o falla, intenta con un área de texto temporal.
export async function copiar(texto) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(texto)
      return true
    }
  } catch {
    // sigue con el método alterno
  }
  try {
    const area = document.createElement('textarea')
    area.value = texto
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(area)
    return ok
  } catch {
    return false
  }
}

export const MENSAJE_COPIA_FALLIDA = 'No se pudo copiar automáticamente. Selecciona el texto y cópialo con Ctrl+C (o mantén presionado en el celular).'

export const botonSecundario = 'rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2'
export const campo = 'mt-2 block w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500'

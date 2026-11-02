import { BUSINESS, whatsappLink } from '@/config/business'

// Botones de WhatsApp (primario) y llamada. `tono` según el fondo: 'oscuro' o 'claro'.
export default function CtaButtons({ whatsappText = 'Hola, me puedes ayudar para cotizar un seguro', tono = 'oscuro', className = '' }) {
  const secundario = tono === 'oscuro'
    ? 'border-white/40 text-white hover:bg-white/10'
    : 'border-slate-300 text-slate-800 hover:bg-slate-50'
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={whatsappLink(whatsappText)}
        target='_blank'
        rel='noopener noreferrer'
        className='whitespace-nowrap rounded-full bg-green-700 px-6 py-3 text-center font-bold text-white shadow-sm hover:bg-green-800'
      >
        Escríbenos por WhatsApp
      </a>
      <a href={`tel:${BUSINESS.phoneE164}`} className={`whitespace-nowrap rounded-full border px-6 py-3 text-center font-bold ${secundario}`}>
        Llamar al {BUSINESS.phoneDisplay}
      </a>
    </div>
  )
}

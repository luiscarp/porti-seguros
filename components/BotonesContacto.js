import Image from 'next/image'
import { BUSINESS, whatsappLink } from '@/config/business'

// Bloque de WhatsApp y llamada de la portada y /seguros (antes eran <h1>).
export default function BotonesContacto({ whatsappText = 'Hola, me puedes ayudar para cotizar un seguro' }) {
  return (
    <div className='flex flex-col pb-20 lg:flex-row lg:justify-evenly'>
      <a
        className='mt-6 flex flex-col items-center'
        href={whatsappLink(whatsappText)}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src='/whatsapp.png' alt='' width={480} height={480} className='mt-5 w-14 md:mt-14 md:w-24 lg:w-24' />
        <span className='text-md mt-2 text-center font-bold italic text-amber-500 md:text-3xl lg:text-xl'>
          Haz clic aquí para chatear por WhatsApp
        </span>
      </a>

      <a className='mt-6 flex flex-col items-center' href={`tel:${BUSINESS.phoneE164}`}>
        <Image src='/telefono.png' alt='' width={100} height={100} className='mt-5 w-14 md:mt-14 md:w-24 lg:w-24' />
        <span className='text-md mt-2 flex flex-col items-center font-bold text-white md:text-3xl lg:text-xl'>
          <span className='italic'>Llámanos</span>
          <span>{BUSINESS.agentName}</span>
          <span>{BUSINESS.phoneDisplay}</span>
        </span>
      </a>
    </div>
  )
}

import CtaButtons from '@/components/CtaButtons'
import { BUSINESS } from '@/config/business'

// Llamada a la acción al final de cada página.
export default function CtaBanda() {
  return (
    <section className='px-4 py-16'>
      <div className='mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-brand-800 to-brand-600 px-6 py-12 text-center text-white shadow-xl md:px-12'>
        <h2 className='text-2xl font-bold text-white md:text-3xl'>Agenda una asesoría sin compromiso</h2>
        <p className='mx-auto mt-4 max-w-2xl text-lg leading-8 text-brand-50'>
          Escríbenos por WhatsApp o llámanos. Te atendemos en nuestra oficina de la Col. San Felipe, en {BUSINESS.address.city}, o a distancia.
        </p>
        <CtaButtons className='mt-8 justify-center' />
      </div>
    </section>
  )
}

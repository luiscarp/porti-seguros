import { Inter } from 'next/font/google'
import Link from 'next/link'
import Stats from '@/components/Stats'
import Logos from '@/components/Logos'
import Authentication from '@/components/Authentication'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import Carrusel from '@/components/Carrusel'
import TarjetasRamos from '@/components/TarjetasRamos'
import BotonesContacto from '@/components/BotonesContacto'
import { BUSINESS } from '@/config/business'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' h-max flex flex-col'>
      <Seo path='/' />
      <Navbar home='True'></Navbar>


      <div className='mb-1 md:mb-8 mt-8 px-4 flex flex-col text-center items-center text-white'>

        <h1 className='text-lg md:text-4xl font-bold'>
          Agente de seguros en Chihuahua: <span className='block mt-1 md:mt-4 italic text-amber-500'>protegemos lo que más te importa</span>
        </h1>

        <p className='mt-3 text-sm md:text-xl'>
          Asesoría personalizada con {BUSINESS.agentName}, agente de seguros desde {BUSINESS.agentSince}.
        </p>

      </div>

      <Carrusel></Carrusel>

      <section aria-labelledby='nuestros-seguros' className='mt-8 mb-20'>
        <h2 id='nuestros-seguros' className='mb-6 text-center text-xl font-bold text-white md:text-3xl'>Nuestros seguros</h2>
        <TarjetasRamos />
      </section>

      <Logos></Logos>

      <BotonesContacto />

      <Stats></Stats>

      <div className=' flex flex-col items-center mt-6 pb-6'>

        <Link href={BUSINESS.social.googleMaps} target="_blank" className=' text-sm md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>UBICANOS <span className='italic text-amber-500'>AQUI</span></Link>

        <iframe
          className="w-full h-62 my-5"
          title="Mapa de la oficina de PorTi Seguros en Chihuahua"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.405464122056!2d-106.10082354946199!3d28.650814896327724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea437103ecc5b9%3A0xc7c0c950a9cb4843!2sPorti%20Seguros!5e0!3m2!1ses!2smx!4v1706236223308!5m2!1ses!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <address className='not-italic flex flex-col items-center text-md md:text-3xl lg:text-4xl md:text-center text-white font-bold'>
          <span>Av. Carbonel <span className='italic text-amber-500'>#4107 - Interior #1</span></span>
          <span>Col. San Felipe</span>
          <span>Chihuahua, Chihuahua</span>
        </address>

      </div>




      <Footer className='mt-6'></Footer>


    </div>
  )
}

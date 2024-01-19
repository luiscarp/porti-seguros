import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-sky-800 h-max'>
      <Head>
        <title>Por Ti Seguros</title>
        <link rel="icon" href="/logopestana.png" />
        {/* Asegúrate de reemplazar "/path-to-your-favicon.ico" con la ruta real de tu favicon */}
      </Head>
      <main className='  flex flex-col'>
        <div className=' m-2 flex justify-end'>
          <Image
            src="/logo2.png"  // Ruta relativa o URL de la imagen
            alt="Logotipo Por Ti" // Texto alternativo para la imagen
            width={500}                 // Ancho de la imagen en píxeles
            height={300}
            className=' w-24 md:w-44'              // Altura de la imagen en píxeles




          ></Image>

        </div>

        <div className=' flex flex-col text-xs md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold mt-2'>

          <h1>ASEGURATE CON NOSOTROS</h1>

          <h1 className=' mt-1 md:mt-4'>VIVE SIN PREOCUPACIONES</h1>

          <h1 className=' mt-1 md:mt-4 italic text-amber-500'>OBTÉN TU SEGURO HOY</h1>


        </div>

        <div className=' flex mt-4'>

          <div className=' md:w-2/3 lg:w-2/3 mt-4 md:mt-12 z-10 flex flex-col text-xs md:text-xl lg:text-4xl items-start md:items-center text-white font-semibold'>

            <p>Gastos Médicos Mayores</p>

            <p className=' mt:1 md:mt-2 lg:mt-5 '>Seguros de auto</p>

            <p className=' mt:1 md:mt-2  lg:mt-4'>Seguros de APP</p>

            <p className=' mt:1 md:mt-2  lg:mt-4'>Seguros de daños</p>

            <p className=' mt:1 md:mt-2  lg:mt-4'>Servicio público</p>

            <p className=' mt:1 md:mt-2  lg:mt-4'>Planes de retiro</p>

            <p className=' mt:1 md:mt-2  lg:mt-4'>Seguro de vida</p>




          </div>

          <Image
            src="/ClaudiaPacheco.png"  // Ruta relativa o URL de la imagen
            alt="Imagen Claudia Pacheco" // Texto alternativo para la imagen
            width={500}                 // Ancho de la imagen en píxeles
            height={300}
            className=' w-48 md:w-96 lg:w-3/5 mt-5 md:mt-14 lg:mt-20 absolute right-0'              // Altura de la imagen en píxeles
          >


          </Image>

        </div>


        <Link
          className=' flex flex-col items-center mt-6'
          href="https://wa.me/526142884270?text=Hola%2C%20me%20puedes%20ayudar%20para%20cotizar%20un%20seguro"
          target="_blank">
          <Image

            src="/whatsapp.png"  // Ruta relativa o URL de la imagen
            alt="Whatapp" // Texto alternativo para la imagen
            width={500}                 // Ancho de la imagen en píxeles
            height={300}
            className=' w-14 md:w-24 lg:w-40 mt-5 md:mt-14 '


          >

          </Image>
          <div className=' flex flex-col text-xs md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>

            <h1 className='   italic text-amber-500'>CONTÁCTANOS</h1>

            <h1>Claudia Pacheco</h1>

            <h1 className=' '>614-288-42-70</h1>




          </div>


        </Link>

        <div className=' flex flex-col items-center mt-6'>

          <h1 className=' text-xs md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>UBICANOS <span className='italic text-amber-500'>AQUI</span></h1>

          <iframe
          className="w-full h-62"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d694.7432525175395!2d-106.1007561601926!3d28.65113121622741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1705630808222!5m2!1ses!2smx"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

<h1 className=' text-xs md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>Av. Carbonel <span className='italic text-amber-500'>#4107</span></h1>

<h1 className=' text-xs md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>Col. San Felipe</h1>
<h1 className=' text-xs md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>Chihuahua, Chihuahua</h1>

        </div>



      </main>



    </div>
  )
}

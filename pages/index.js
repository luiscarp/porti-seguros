import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Stats from './components/Stats'
import Logos from './components/Logos'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carrusel from './components/Carrusel'
import { NextSeo } from 'next-seo'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' h-max flex flex-col'>
      <Head>
        <link rel="icon" href="/logopestana.png" />
      </Head>
      <NextSeo
        title="PorTi Seguros"
        description="  En Por Ti Seguros, situados en el corazón de Chihuahua, Chihuahua, en la vibrante Colonia San Felipe, Av. Carbonel, nos destacamos como líderes en el mercado de seguros. Especializados en una amplia gama de servicios, ofrecemos seguros de auto, incluyendo cobertura amplia y seguros específicos para conductores de Uber y Didi. Nuestra oferta se extiende a seguros de daños a terceros, asegurando una protección integral para todas las partes involucradas. Además, en Por Ti Seguros, somos expertos en seguros de daños, con opciones diseñadas para proteger tu patrimonio contra una variedad de riesgos. Con un enfoque particular en la seguridad y el bienestar de nuestra comunidad, proporcionamos seguros de vida y seguros de gastos médicos mayores, diseñados para ofrecer tranquilidad y seguridad financiera. Nuestro equipo de asesores de seguros altamente cualificados está disponible para guiarte a través de nuestras opciones de inversiones, asegurando que tus decisiones financieras estén alineadas con tus objetivos personales y profesionales. En Por Ti Seguros, nuestro compromiso es ofrecer soluciones de seguros personalizadas y de alta calidad para satisfacer todas tus necesidades. Ya sea que busques un seguro para tu auto, tu salud, tu vida o tu patrimonio, somos tu aliado confiable en seguros en Chihuahua. "
        openGraph={{
          title: 'PorTi Seguros',
          description: 'En Por Ti Seguros, situados en el corazón de Chihuahua, Chihuahua, en la vibrante Colonia San Felipe, Av. Carbonel, nos destacamos como líderes en el mercado de seguros. Especializados en una amplia gama de servicios, ofrecemos seguros de auto, incluyendo cobertura amplia y seguros específicos para conductores de Uber y Didi. Nuestra oferta se extiende a seguros de daños a terceros, asegurando una protección integral para todas las partes involucradas. Además, en Por Ti Seguros, somos expertos en seguros de daños, con opciones diseñadas para proteger tu patrimonio contra una variedad de riesgos. Con un enfoque particular en la seguridad y el bienestar de nuestra comunidad, proporcionamos seguros de vida y seguros de gastos médicos mayores, diseñados para ofrecer tranquilidad y seguridad financiera. Nuestro equipo de asesores de seguros altamente cualificados está disponible para guiarte a través de nuestras opciones de inversiones, asegurando que tus decisiones financieras estén alineadas con tus objetivos personales y profesionales. En Por Ti Seguros, nuestro compromiso es ofrecer soluciones de seguros personalizadas y de alta calidad para satisfacer todas tus necesidades. Ya sea que busques un seguro para tu auto, tu salud, tu vida o tu patrimonio, somos tu aliado confiable en seguros en Chihuahua. ',
          // Aquí puedes añadir más configuraciones de Open Graph si lo necesitas
        }}
      />
      <Navbar home='True'></Navbar>





      <div className='mb-1 md:mb-8 mt-8 flex flex-col text-sm text-center md:text-3xl md:text-center items-center text-white font-bold'>


        <h1 className=' text-center'>VIVE SIN PREOCUPACIONES</h1>

        <h1 className='text-center mt-1 md:mt-4 italic text-amber-500'>OBTÉN TU SEGURO HOY</h1>


      </div>

      <Carrusel></Carrusel>

      <div className=' mt-4 mb-20 flex flex-col items-center'>


        <div className='w-full flex flex-col mt-2 items-center '>

          <div className='text-sm text-center md:text-3xl md:text-center items-center text-white font-bold mt-4'>
            <h1 className=' text-center'>Conoce nuestros servicios</h1>
          </div>

          <div className='flex flex-col items-center'>

            <div className=' flex flex-row w-screen justify-evenly '>




              <div className='  w-1/2 mt-2 mx-1 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/gastosmedicos.webp"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className=' w-36 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Gastos médicos mayores</h1>


              </div>


              <div className='  w-1/2 mt-2 mx-1 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/seguroauto.png"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className=' w-36 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>seguros de auto</h1>


              </div>


              <div className='  hidden md:block w-1/2 mt-2 mx-1  flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/segurodanosdf.png"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className='  w-24 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Seguro de daños</h1>


              </div>

            </div>

            <div className='flex flex-row w-screen justify-evenly '>

              <div className=' w-1/2 mt-2 mx-1 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/serviciopublico.png"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className=' w-36 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Servicio público</h1>


              </div>

              <div className=' w-1/2 mt-2 mx-1 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/seguroapp.png"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className=' w-36 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Seguros de App</h1>


              </div>

              <div className='  hidden md:block  w-1/2 mt-2 mx-1 flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/segurovida.png"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className=' w-36 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Seguros de vida</h1>


              </div>





            </div>

            <div className='flex flex-row w-screen justify-evenly md:hidden lg:hidden '>

              <div className=' w-1/2 mt-2 mx-1 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/segurovida.png"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className=' w-36 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Seguros de vida</h1>


              </div>

              <div className=' w-1/2 mt-2 mx-1 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/segurodanosdf.png"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className=' w-36 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Seguro de daños</h1>


              </div>







            </div>


            <div className='flex flex-row w-screen justify-evenly '>

              <div className='  w-1/2 mt-2 mx-1 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white font-normal'>

                <Image
                  src="/planesretiro.png"  // Ruta relativa o URL de la imagen
                  alt="Imagen equipo" // Texto alternativo para la imagen
                  width={500}                 // Ancho de la imagen en píxeles
                  height={300}
                  className=' w-36 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Planes de retiro</h1>


              </div>


            </div>











          </div>







        </div>



      </div>

      <Logos></Logos>

      <div className='flex flex-col lg:flex-row lg:justify-evenly pb-20'>

        <Link
          className=' flex flex-col items-center mt-6'
          href="https://wa.me/526142884270?text=Hola%2C%20me%20puedes%20ayudar%20para%20cotizar%20un%20seguro"
          target="_blank">
          <Image

            src="/whatsapp.png"  // Ruta relativa o URL de la imagen
            alt="Whatapp" // Texto alternativo para la imagen
            width={500}                 // Ancho de la imagen en píxeles
            height={300}
            className=' w-14 md:w-24 lg:w-24 mt-5 md:mt-14'


          >

          </Image>
          <div className=' flex flex-col text-center text-md md:text-3xl lg:text-xl md:text-center items-center text-white font-bold'>

            <h1 className='   italic text-amber-500'>HAZ CLICK AQUÍ PARA CHATEAR</h1>





          </div>


        </Link>


        <div className=' flex flex-col items-center'>



          <Image

            src="/telefono.png"  // Ruta relativa o URL de la imagen
            alt="Whatapp" // Texto alternativo para la imagen
            width={500}                 // Ancho de la imagen en píxeles
            height={300}
            className=' w-14 md:w-24 lg:w-24 mt-5 md:mt-14'


          >

          </Image>
          <div className=' flex flex-col text-md md:text-3xl lg:text-xl md:text-center items-center text-white font-bold'>

            <h1 className='   italic'>Llámanos</h1>
            <h1>Claudia Pacheco</h1>

            <h1 className=' '>614-288-42-70</h1>





          </div>

        </div>
      </div>

      <Stats></Stats>

      <div className=' flex flex-col items-center mt-6 pb-6'>

        <Link href={"https://maps.app.goo.gl/KJdJJAhK91t8cVjd9"} target="_blank" className=' text-sm md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>UBICANOS <span className='italic text-amber-500'>AQUI</span></Link>

        <iframe
          className="w-full h-62 my-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.405464122056!2d-106.10082354946199!3d28.650814896327724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea437103ecc5b9%3A0xc7c0c950a9cb4843!2sPorti%20Seguros!5e0!3m2!1ses!2smx!4v1706236223308!5m2!1ses!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <h1 className=' text-md md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>Av. Carbonel <span className='italic text-amber-500'>#4107</span></h1>

        <h1 className=' text-md md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>Col. San Felipe</h1>
        <h1 className=' text-md md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>Chihuahua, Chihuahua</h1>

      </div>




      <Footer className='mt-6'></Footer>


    </div>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-sky-800 h-max flex flex-col'>
      <Head>
        <title>Por Ti Seguros</title>
        <link rel="icon" href="/logopestana.png" />
        {/* Asegúrate de reemplazar "/path-to-your-favicon.ico" con la ruta real de tu favicon */}
      </Head>

      <div className=' flex justify-center'>
        <Image
          src="/logo2.png"  // Ruta relativa o URL de la imagen
          alt="Logotipo Por Ti" // Texto alternativo para la imagen
          width={500}                 // Ancho de la imagen en píxeles
          height={300}
          className='w-24 md:w-60 mt-1 '              // Altura de la imagen en píxeles




        ></Image>

      </div>

      <div className='flex flex-col text-sm text-center md:text-3xl md:text-center items-center text-white font-bold mt-2'>
        <h1 className=' text-center'>VIVE SIN PREOCUPACIONES</h1>

        <h1 className='text-center mt-1 md:mt-4 italic text-amber-500'>OBTÉN TU SEGURO HOY</h1>


      </div>

      <div className=' mt-4 flex flex-col items-center'>
        <Image
          src="/esloganEquipoCompleto.png"  // Ruta relativa o URL de la imagen
          alt="Imagen equipo" // Texto alternativo para la imagen
          width={500}                 // Ancho de la imagen en píxeles
          height={300}
          className=' w-44 md:w-96 lg:w-full'              // Altura de la imagen en píxeles
        >


        </Image>

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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
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
                  className=' w-20 md:w-60 lg:w-80'              // Altura de la imagen en píxeles
                >


                </Image>

                <h1 className=' text-center'>Planes de retiro</h1>


              </div>


            </div>











          </div>







        </div>



      </div>

      <div className='flex flex-col lg:flex-row lg:justify-evenly'>

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
          <div className=' flex flex-col text-md md:text-3xl lg:text-xl md:text-center items-center text-white font-bold'>

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

      <div className=' flex flex-col items-center mt-6'>

        <Link href={"https://maps.app.goo.gl/FD1fKQn4YLMdYWs37"} target="_blank" className=' text-sm md:text-3xl lg:text-4xl md:text-center items-center text-white font-bold'>UBICANOS <span className='italic text-amber-500'>AQUI</span></Link>

        <iframe
          className="w-full h-62 my-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2914102616724!2d-106.10341192466376!3d28.65099197565474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea437103ecc5b9%3A0xc7c0c950a9cb4843!2sPon%20Seguros!5e0!3m2!1ses!2smx!4v1705691026361!5m2!1ses!2smx"
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





    </div>
  )
}

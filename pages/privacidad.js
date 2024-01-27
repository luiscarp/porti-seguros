import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'

function privacidad() {
    return (
        <div className='bg-sky-800 flex flex-col'>

            <Head>
                <title>Por Ti Seguros | Aviso de privacidad</title>
                <link rel="icon" href="/logopestana.png" />
                {/* Asegúrate de reemplazar "/path-to-your-favicon.ico" con la ruta real de tu favicon */}
            </Head>

            <div className=' mb-6'>
                <Navbar></Navbar>

                <div className=' mt-8 flex flex-col text-sm text-center md:text-3xl md:text-center items-center text-white font-bold'>


                    <h1 className=' text-center'>Aviso de privacidad</h1>



                </div>

                <div className=' mt-8 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white'>


                    <h1 className=' text-center font-bold'>Fecha de Última Actualización: 27/01/2024 </h1>

                    <p className=' text-justify p-4'>En "Por Ti Seguros", respetamos su privacidad y nos comprometemos a proteger la información personal que usted nos proporciona. Este Aviso de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos su información personal, en conformidad con las leyes aplicables en materia de protección de datos personales.</p>

                    <h1 className=' text-center font-bold'> 1. Información que Recopilamos:</h1>

                    <p className=' text-justify p-4'> Recopilamos información que usted nos proporciona directamente al utilizar nuestros servicios, incluyendo pero no limitado a:

                        Datos personales como nombre, dirección, correo electrónico, número de teléfono.
                        Información financiera y de seguros para procesar las transacciones.
                        Cualquier otra información que usted elija proporcionar relacionada con sus necesidades de seguro.</p>

                    <h1 className=' text-center font-bold'> 2. Uso de la Información:</h1>

                    <p className=' text-justify p-4'>Utilizamos su información para:

                        Proveer, mantener y mejorar nuestros servicios.
                        Procesar transacciones y enviar avisos sobre sus transacciones.
                        Comunicarnos con usted sobre productos, servicios, ofertas y promociones.
                        Detectar y prevenir actividades fraudulentas.</p>

                    <h1 className=' text-center font-bold'> 3. Compartir Información:</h1>

                    <p className=' text-justify p-4'>No vendemos su información personal a terceros. Sin embargo, podemos compartir información con:

                        Socios y proveedores de servicios que necesitan acceso a dicha información para llevar a cabo trabajos en nuestro nombre.
                        En respuesta a un proceso legal (por ejemplo, una orden judicial).
                        Si creemos que la divulgación es necesaria o apropiada para proteger los derechos, la propiedad o la seguridad de "Por Ti Seguros", nuestros clientes u otros.</p>

                    <h1 className=' text-center font-bold'> 4. Seguridad de la Información:</h1>

                    <p className=' text-justify p-4'>Tomamos medidas razonables para proteger su información personal contra pérdida, robo y uso indebido, así como acceso no autorizado, divulgación, alteración y destrucción.</p>

                    <h1 className=' text-center font-bold'> 5. Acceso y Corrección de su Información:</h1>

                    <p className=' text-justify p-4'>Usted tiene derecho a acceder, corregir o eliminar su información personal que tenemos en nuestra posesión. Para solicitar acceso, corrección o eliminación, póngase en contacto con nosotros a través de nuestros numeros telefonicos .</p>

                    <h1 className=' text-center font-bold'> 6. Cambios a Nuestro Aviso de Privacidad:</h1>

                    <p className=' text-justify p-4'>"Por Ti Seguros" puede modificar este Aviso de Privacidad ocasionalmente. Cualquier cambio será publicado en esta página con la fecha de la última actualización.</p>

                    <h1 className=' text-center font-bold'> 7. Contacto:</h1>

                    <p className=' text-justify p-4'>Si tiene preguntas o comentarios sobre este Aviso de Privacidad, por favor contáctenos en 614-288-42-70.


                    </p>

                    <p className=' text-justify p-4'>Gracias por confiar en "Por Ti Seguros".</p>




                </div>
            </div>

            <Footer></Footer>



        </div>
    )
}

export default privacidad

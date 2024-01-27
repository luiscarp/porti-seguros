import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'

function terminos() {
    return (
        <div className='bg-sky-800 flex flex-col'>
            <Head>
                <title>Por Ti Seguros | Terminos y Condiciones</title>
                <link rel="icon" href="/logopestana.png" />
                {/* Asegúrate de reemplazar "/path-to-your-favicon.ico" con la ruta real de tu favicon */}
            </Head>
            <Navbar></Navbar>

            <div className=' mt-8 flex flex-col text-sm text-center md:text-3xl md:text-center items-center text-white font-bold'>


                <h1 className=' text-center'>Terminos y condiciones</h1>



            </div>

            <div className=' mt-8 flex flex-col text-xs text-center md:text-xl md:text-center items-center text-white'>


                <h1 className=' text-center font-bold'>Fecha de Última Actualización: 27/01/2024 </h1>

                <p className=' text-justify p-4'>Bienvenido a "Por Ti Seguros". Los siguientes términos y condiciones (los "Términos") rigen su acceso y uso de nuestros servicios, incluyendo cualquier contenido, funcionalidad y servicios ofrecidos en o a través de www.portiseguros.com.mx</p>

                <h1 className=' text-center font-bold'> 1. Aceptación de los Términos:</h1>

                <p className=' text-justify p-4'>Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con alguno de los términos o condiciones establecidos aquí, no debe utilizar nuestros servicios.</p>

                <h1 className=' text-center font-bold'> 2. Cambios a los Términos:</h1>

                <p className=' text-justify p-4'> Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento a nuestra discreción. Todo cambio será efectivo inmediatamente después de su publicación en el sitio web y su uso continuado de nuestros servicios después de la publicación de los cambios constituirá su aceptación de dichos cambios.</p>

                <h1 className=' text-center font-bold'> 3. Servicios de Seguros:</h1>

                <p className=' text-justify p-4'>"Por Ti Seguros" ofrece una variedad de productos de seguros. Cada producto de seguro está sujeto a sus propias condiciones, limitaciones y exclusiones, que se describen en la póliza correspondiente.</p>

                <h1 className=' text-center font-bold'> 4. Elegibilidad:</h1>

                <p className=' text-justify p-4'>Para utilizar nuestros servicios, debe tener al menos 18 años de edad y cumplir con todos los requisitos legales aplicables.</p>

                <h1 className=' text-center font-bold'> 5. Registro y Cuenta:</h1>

                <p className=' text-justify p-4'> Puede ser necesario registrarse y crear una cuenta para acceder a ciertas funcionalidades. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, así como de todas las actividades que ocurran bajo su cuenta.</p>

                <h1 className=' text-center font-bold'> 6. Privacidad:</h1>

                <p className=' text-justify p-4'> Su privacidad es importante para nosotros. Nuestra Política de Privacidad explica cómo recopilamos, usamos y compartimos su información personal. Al utilizar nuestros servicios, usted acepta nuestra Política de Privacidad.</p>

                <h1 className=' text-center font-bold'> 7. Propiedad Intelectual:</h1>

                <p className=' text-justify p-4'> El contenido, diseño, gráficos, logotipos, imágenes, software y otros materiales proporcionados en nuestros servicios son propiedad de "Por Ti Seguros" o sus licenciantes y están protegidos por leyes de propiedad intelectual.</p>

                <h1 className=' text-center font-bold'> 8. Uso Prohibido:</h1>

                <p className=' text-justify p-4'> Al utilizar nuestros servicios, usted se compromete a no:

                    Utilizar los servicios para cualquier propósito ilegal o no autorizado.
                    Violar cualquier ley, reglamento, contrato, propiedad intelectual o derecho de terceros.
                    Cometer fraude o falsificar información.</p>

                <h1 className=' text-center font-bold'> 9. Limitación de Responsabilidad:</h1>

                <p className=' text-justify p-4'>"Por Ti Seguros" no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos o uso, relacionados con su acceso o uso de nuestros servicios.</p>

                <h1 className=' text-center font-bold'> 10. Indemnización:</h1>

                <p className=' text-justify p-4'>Usted acuerda indemnizar y eximir de responsabilidad a "Por Ti Seguros", sus afiliados, oficiales, empleados y agentes, de cualquier reclamo, demanda, pérdida, responsabilidad y gastos (incluidos los honorarios de abogados) que surjan de su uso de nuestros servicios..


                </p>

                <h1 className=' text-center font-bold'> 11. Ley Aplicable y Jurisdicción:</h1>

                <p className=' text-justify p-4'>"Por Ti Seguros" puede modificar este Aviso de Privacidad ocasionalmente. Cualquier cambio será publicado en esta página con la fecha de la última actualización.</p>

                <h1 className=' text-center font-bold'> 12. Contacto:</h1>

                <p className=' text-justify p-4'>Para cualquier pregunta o consulta sobre estos Términos, por favor contáctenos en el numero telefonico 614-288-42-70.


                </p>

                <p className=' text-justify p-4'>Al utilizar nuestros servicios, usted reconoce que ha leído, entendido y aceptado estos Términos y Condiciones.</p>

            </div>



            <Footer></Footer>

        </div>
    )
}

export default terminos

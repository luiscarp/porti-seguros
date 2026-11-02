import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'

function terminos() {
    return (
        <div>
            <Seo path='/terminos' />
            <Navbar></Navbar>

            <PageHero titulo="Términos y condiciones" migas={[{ nombre: "Inicio", href: "/" }, { nombre: "Términos y condiciones" }]} />

            <main className='mx-auto max-w-3xl px-4 py-12'>


                <p className='text-sm text-slate-500'>Fecha de Última Actualización: 27/01/2024 </p>

                <p className='mt-4 leading-7'>Bienvenido a "PorTi Seguros". Los siguientes términos y condiciones (los "Términos") rigen su acceso y uso de nuestros servicios, incluyendo cualquier contenido, funcionalidad y servicios ofrecidos en o a través de www.portiseguros.com.mx</p>

                <h2 className='mt-10 text-xl font-bold'> 1. Aceptación de los Términos:</h2>

                <p className='mt-4 leading-7'>Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos. Si no está de acuerdo con alguno de los términos o condiciones establecidos aquí, no debe utilizar nuestros servicios.</p>

                <h2 className='mt-10 text-xl font-bold'> 2. Cambios a los Términos:</h2>

                <p className='mt-4 leading-7'> Nos reservamos el derecho de modificar o reemplazar estos Términos en cualquier momento a nuestra discreción. Todo cambio será efectivo inmediatamente después de su publicación en el sitio web y su uso continuado de nuestros servicios después de la publicación de los cambios constituirá su aceptación de dichos cambios.</p>

                <h2 className='mt-10 text-xl font-bold'> 3. Servicios de Seguros:</h2>

                <p className='mt-4 leading-7'>"PorTi Seguros" ofrece una variedad de productos de seguros. Cada producto de seguro está sujeto a sus propias condiciones, limitaciones y exclusiones, que se describen en la póliza correspondiente.</p>

                <h2 className='mt-10 text-xl font-bold'> 4. Elegibilidad:</h2>

                <p className='mt-4 leading-7'>Para utilizar nuestros servicios, debe tener al menos 18 años de edad y cumplir con todos los requisitos legales aplicables.</p>

                <h2 className='mt-10 text-xl font-bold'> 5. Registro y Cuenta:</h2>

                <p className='mt-4 leading-7'> Puede ser necesario registrarse y crear una cuenta para acceder a ciertas funcionalidades. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, así como de todas las actividades que ocurran bajo su cuenta.</p>

                <h2 className='mt-10 text-xl font-bold'> 6. Privacidad:</h2>

                <p className='mt-4 leading-7'> Su privacidad es importante para nosotros. Nuestra Política de Privacidad explica cómo recopilamos, usamos y compartimos su información personal. Al utilizar nuestros servicios, usted acepta nuestra Política de Privacidad.</p>

                <h2 className='mt-10 text-xl font-bold'> 7. Propiedad Intelectual:</h2>

                <p className='mt-4 leading-7'> El contenido, diseño, gráficos, logotipos, imágenes, software y otros materiales proporcionados en nuestros servicios son propiedad de "PorTi Seguros" o sus licenciantes y están protegidos por leyes de propiedad intelectual.</p>

                <h2 className='mt-10 text-xl font-bold'> 8. Uso Prohibido:</h2>

                <p className='mt-4 leading-7'> Al utilizar nuestros servicios, usted se compromete a no:

                    Utilizar los servicios para cualquier propósito ilegal o no autorizado.
                    Violar cualquier ley, reglamento, contrato, propiedad intelectual o derecho de terceros.
                    Cometer fraude o falsificar información.</p>

                <h2 className='mt-10 text-xl font-bold'> 9. Limitación de Responsabilidad:</h2>

                <p className='mt-4 leading-7'>"PorTi Seguros" no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos o uso, relacionados con su acceso o uso de nuestros servicios.</p>

                <h2 className='mt-10 text-xl font-bold'> 10. Indemnización:</h2>

                <p className='mt-4 leading-7'>Usted acuerda indemnizar y eximir de responsabilidad a "PorTi Seguros", sus afiliados, oficiales, empleados y agentes, de cualquier reclamo, demanda, pérdida, responsabilidad y gastos (incluidos los honorarios de abogados) que surjan de su uso de nuestros servicios..


                </p>

                <h2 className='mt-10 text-xl font-bold'> 11. Ley Aplicable y Jurisdicción:</h2>

                <p className='mt-4 leading-7'>"PorTi Seguros" puede modificar este Aviso de Privacidad ocasionalmente. Cualquier cambio será publicado en esta página con la fecha de la última actualización.</p>

                <h2 className='mt-10 text-xl font-bold'> 12. Contacto:</h2>

                <p className='mt-4 leading-7'>Para cualquier pregunta o consulta sobre estos Términos, por favor contáctenos en el numero telefonico 614-288-42-70.


                </p>

                <p className='mt-4 leading-7'>Al utilizar nuestros servicios, usted reconoce que ha leído, entendido y aceptado estos Términos y Condiciones.</p>

            </main>



            <Footer></Footer>

        </div>
    )
}

export default terminos

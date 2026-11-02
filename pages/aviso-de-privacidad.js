import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'

function privacidad() {
    return (
        <div>

            <Seo path='/aviso-de-privacidad' />

            <div>
                <Navbar></Navbar>

                <PageHero titulo="Aviso de privacidad" migas={[{ nombre: "Inicio", href: "/" }, { nombre: "Aviso de privacidad" }]} />

                <main className='mx-auto max-w-3xl px-4 py-12'>


                    <p className='text-sm text-slate-500'>Fecha de Última Actualización: 27/01/2024 </p>

                    <p className='mt-4 leading-7'>En "Por Ti Seguros", respetamos su privacidad y nos comprometemos a proteger la información personal que usted nos proporciona. Este Aviso de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos su información personal, en conformidad con las leyes aplicables en materia de protección de datos personales.</p>

                    <h2 className='mt-10 text-xl font-bold'> 1. Información que Recopilamos:</h2>

                    <p className='mt-4 leading-7'> Recopilamos información que usted nos proporciona directamente al utilizar nuestros servicios, incluyendo pero no limitado a:

                        Datos personales como nombre, dirección, correo electrónico, número de teléfono.
                        Información financiera y de seguros para procesar las transacciones.
                        Cualquier otra información que usted elija proporcionar relacionada con sus necesidades de seguro.</p>

                    <h2 className='mt-10 text-xl font-bold'> 2. Uso de la Información:</h2>

                    <p className='mt-4 leading-7'>Utilizamos su información para:

                        Proveer, mantener y mejorar nuestros servicios.
                        Procesar transacciones y enviar avisos sobre sus transacciones.
                        Comunicarnos con usted sobre productos, servicios, ofertas y promociones.
                        Detectar y prevenir actividades fraudulentas.</p>

                    <h2 className='mt-10 text-xl font-bold'> 3. Compartir Información:</h2>

                    <p className='mt-4 leading-7'>No vendemos su información personal a terceros. Sin embargo, podemos compartir información con:

                        Socios y proveedores de servicios que necesitan acceso a dicha información para llevar a cabo trabajos en nuestro nombre.
                        En respuesta a un proceso legal (por ejemplo, una orden judicial).
                        Si creemos que la divulgación es necesaria o apropiada para proteger los derechos, la propiedad o la seguridad de "Por Ti Seguros", nuestros clientes u otros.</p>

                    <h2 className='mt-10 text-xl font-bold'> 4. Seguridad de la Información:</h2>

                    <p className='mt-4 leading-7'>Tomamos medidas razonables para proteger su información personal contra pérdida, robo y uso indebido, así como acceso no autorizado, divulgación, alteración y destrucción.</p>

                    <h2 className='mt-10 text-xl font-bold'> 5. Acceso y Corrección de su Información:</h2>

                    <p className='mt-4 leading-7'>Usted tiene derecho a acceder, corregir o eliminar su información personal que tenemos en nuestra posesión. Para solicitar acceso, corrección o eliminación, póngase en contacto con nosotros a través de nuestros numeros telefonicos .</p>

                    <h2 className='mt-10 text-xl font-bold'> 6. Cambios a Nuestro Aviso de Privacidad:</h2>

                    <p className='mt-4 leading-7'>"Por Ti Seguros" puede modificar este Aviso de Privacidad ocasionalmente. Cualquier cambio será publicado en esta página con la fecha de la última actualización.</p>

                    <h2 className='mt-10 text-xl font-bold'> 7. Contacto:</h2>

                    <p className='mt-4 leading-7'>Si tiene preguntas o comentarios sobre este Aviso de Privacidad, por favor contáctenos en 614-288-42-70.


                    </p>

                    <p className='mt-4 leading-7'>Gracias por confiar en "Por Ti Seguros".</p>




                </main>
            </div>

            <Footer></Footer>



        </div>
    )
}

export default privacidad

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import AvisoPrivacidadAnterior from '@/components/AvisoPrivacidadAnterior'
import { BUSINESS, MOSTRAR_PENDIENTES } from '@/config/business'

// BORRADOR (C7) — REVISIÓN LEGAL OBLIGATORIA antes de publicar.
// Validar contra la Ley Federal de Protección de Datos Personales en Posesión de los Particulares vigente
// y su reglamento. Al aprobarse, cambiar BORRADOR a false y actualizar ULTIMA_ACTUALIZACION.
// Mientras sea borrador, todo build (producción y previews) muestra el aviso anterior (components/AvisoPrivacidadAnterior.js).
const BORRADOR = true
const ULTIMA_ACTUALIZACION = '[PENDIENTE: fecha de aprobación]'

function Seccion({ titulo, children }) {
    return (
        <section className='mt-10'>
            <h2 className='text-xl font-bold md:text-2xl'>{titulo}</h2>
            <div className='mt-3 space-y-3 leading-7'>{children}</div>
        </section>
    )
}

function Lista({ items }) {
    return (
        <ul className='list-disc space-y-2 pl-6'>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

function privacidad() {
    const { address } = BUSINESS
    return (
        <div>
            <Seo path='/aviso-de-privacidad' />
            <Navbar />

            <PageHero titulo='Aviso de privacidad' migas={[{ nombre: 'Inicio', href: '/' }, { nombre: 'Aviso de privacidad' }]} />

            <main className='mx-auto max-w-3xl px-4 py-12'>
                {BORRADOR && !MOSTRAR_PENDIENTES ? (
                    <AvisoPrivacidadAnterior />
                ) : (
                <>
                {BORRADOR && (
                    <p role='note' className='rounded-xl border border-amber-300 bg-amber-50 p-4 font-semibold text-amber-900'>
                        Borrador pendiente de revisión legal. No publicar hasta su aprobación.
                    </p>
                )}
                <p className='mt-6 text-sm text-slate-500'>Última actualización: {ULTIMA_ACTUALIZACION}</p>

                <Seccion titulo='1. Responsable de tus datos personales'>
                    <p>
                        {BUSINESS.agentName}, agente de seguros que opera con el nombre comercial {BUSINESS.name} (razón social: {BUSINESS.legalName}), con domicilio en {address.street}, Col. {address.neighborhood}, C.P. {address.postalCode}, {address.city}, {address.region}, es responsable del tratamiento de los datos personales que nos proporcionas.
                    </p>
                </Seccion>

                <Seccion titulo='2. Datos personales que recabamos'>
                    <p>A través de este sitio web y de WhatsApp recabamos únicamente datos de identificación y contacto:</p>
                    <Lista items={['Nombre.', 'Número de teléfono.', 'El tipo de seguro que te interesa y el mensaje que decidas escribirnos.']} />
                    <p>
                        En el sitio no solicitamos CURP, RFC, datos de salud, información financiera ni números de tarjeta. Si decides contratar un seguro, la aseguradora puede requerir información adicional, incluidos datos personales sensibles como los relativos a tu salud en seguros de vida o de gastos médicos. Esos datos se recabarán por separado, con tu consentimiento expreso y por escrito, y te informaremos cómo se tratarán.
                    </p>
                </Seccion>

                <Seccion titulo='3. Para qué usamos tus datos'>
                    <p>Finalidades necesarias para atender tu solicitud:</p>
                    <Lista
                        items={[
                            'Responder tus mensajes y solicitudes de información.',
                            'Elaborar cotizaciones con las aseguradoras con las que trabajamos.',
                            'Gestionar la contratación, renovación y seguimiento de tus pólizas.',
                            'Acompañarte en el trámite de siniestros ante la aseguradora.',
                        ]}
                    />
                    <p>
                        [PENDIENTE: definir si habrá finalidades secundarias, por ejemplo enviar información sobre nuevos productos. Si las hay, deben listarse aquí con un mecanismo para que puedas negarte a ellas.]
                    </p>
                </Seccion>

                <Seccion titulo='4. Con quién compartimos tus datos'>
                    <p>
                        Para cotizar y contratar, compartimos tus datos con las aseguradoras que elijas, que los tratarán conforme a sus propios avisos de privacidad. También podremos compartirlos con autoridades cuando una ley lo requiera. No vendemos tus datos personales.
                    </p>
                </Seccion>

                <Seccion titulo='5. WhatsApp'>
                    <p>
                        Cuando nos escribes por WhatsApp, incluido el formulario de cotización que abre WhatsApp con tu mensaje, la comunicación se realiza a través de ese servicio, que es operado por un tercero y está sujeto a sus propios términos y políticas de privacidad.
                    </p>
                </Seccion>

                <Seccion titulo='6. Cookies y analítica'>
                    <p>
                        Este sitio utiliza herramientas de analítica para conocer cómo se usa y mejorarlo: Google Analytics 4, que utiliza cookies, y Vercel Web Analytics y Speed Insights. Registramos datos de navegación como las páginas visitadas y los clics en los botones de contacto; no registramos tu nombre, teléfono ni el contenido de tus mensajes.
                    </p>
                    <p>
                        Puedes bloquear o eliminar las cookies desde la configuración de tu navegador. [PENDIENTE: confirmar con asesoría legal si se requiere un aviso o banner de consentimiento de cookies.]
                    </p>
                </Seccion>

                <Seccion titulo='7. Tus derechos ARCO y revocación del consentimiento'>
                    <p>
                        Tienes derecho a acceder a tus datos personales, rectificarlos, cancelarlos u oponerte a su tratamiento (derechos ARCO), así como a revocar tu consentimiento. Para ejercerlos, envía tu solicitud por [PENDIENTE: medio oficial, por ejemplo correo electrónico] indicando tu nombre, el derecho que deseas ejercer y un medio para responderte. Atenderemos tu solicitud en los plazos que establece la ley.
                    </p>
                </Seccion>

                <Seccion titulo='8. Cambios a este aviso'>
                    <p>Cualquier cambio a este aviso de privacidad se publicará en esta página con su fecha de actualización.</p>
                </Seccion>

                <Seccion titulo='9. Autoridad'>
                    <p>
                        Si consideras que tu derecho a la protección de datos personales fue vulnerado, puedes acudir ante la autoridad competente. [PENDIENTE: confirmar con asesoría legal el nombre y datos de la autoridad competente según la ley vigente.]
                    </p>
                </Seccion>

                <p className='mt-12 text-sm text-slate-500'>
                    Consulta también nuestros <Link href='/terminos' className='font-semibold text-brand-700 underline'>términos y condiciones</Link>.
                </p>
                </>
                )}
            </main>

            <Footer />
        </div>
    )
}

export default privacidad

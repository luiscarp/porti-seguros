// Aviso de privacidad publicado hasta ahora (texto sin cambios, versión del 27/01/2024).
// Se muestra en todo build mientras el nuevo aviso (pages/aviso-de-privacidad.js) siga en BORRADOR.
// Eliminar este archivo cuando el nuevo aviso tenga aprobación legal.

function Lista({ items }) {
    return (
        <ul className='mt-3 list-disc space-y-2 pl-6 leading-7'>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

export default function AvisoPrivacidadAnterior() {
    return (
        <>
            <p className='text-sm text-slate-500'>Fecha de Última Actualización: 27/01/2024</p>

            <p className='mt-4 leading-7'>En &quot;PorTi Seguros&quot;, respetamos su privacidad y nos comprometemos a proteger la información personal que usted nos proporciona. Este Aviso de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos su información personal, en conformidad con las leyes aplicables en materia de protección de datos personales.</p>

            <h2 className='mt-10 text-xl font-bold'>1. Información que Recopilamos:</h2>
            <p className='mt-4 leading-7'>Recopilamos información que usted nos proporciona directamente al utilizar nuestros servicios, incluyendo pero no limitado a:</p>
            <Lista
                items={[
                    'Datos personales como nombre, dirección, correo electrónico, número de teléfono.',
                    'Información financiera y de seguros para procesar las transacciones.',
                    'Cualquier otra información que usted elija proporcionar relacionada con sus necesidades de seguro.',
                ]}
            />

            <h2 className='mt-10 text-xl font-bold'>2. Uso de la Información:</h2>
            <p className='mt-4 leading-7'>Utilizamos su información para:</p>
            <Lista
                items={[
                    'Proveer, mantener y mejorar nuestros servicios.',
                    'Procesar transacciones y enviar avisos sobre sus transacciones.',
                    'Comunicarnos con usted sobre productos, servicios, ofertas y promociones.',
                    'Detectar y prevenir actividades fraudulentas.',
                ]}
            />

            <h2 className='mt-10 text-xl font-bold'>3. Compartir Información:</h2>
            <p className='mt-4 leading-7'>No vendemos su información personal a terceros. Sin embargo, podemos compartir información con:</p>
            <Lista
                items={[
                    'Socios y proveedores de servicios que necesitan acceso a dicha información para llevar a cabo trabajos en nuestro nombre.',
                    'En respuesta a un proceso legal (por ejemplo, una orden judicial).',
                    'Si creemos que la divulgación es necesaria o apropiada para proteger los derechos, la propiedad o la seguridad de "PorTi Seguros", nuestros clientes u otros.',
                ]}
            />

            <h2 className='mt-10 text-xl font-bold'>4. Seguridad de la Información:</h2>
            <p className='mt-4 leading-7'>Tomamos medidas razonables para proteger su información personal contra pérdida, robo y uso indebido, así como acceso no autorizado, divulgación, alteración y destrucción.</p>

            <h2 className='mt-10 text-xl font-bold'>5. Acceso y Corrección de su Información:</h2>
            <p className='mt-4 leading-7'>Usted tiene derecho a acceder, corregir o eliminar su información personal que tenemos en nuestra posesión. Para solicitar acceso, corrección o eliminación, póngase en contacto con nosotros a través de nuestros numeros telefonicos .</p>

            <h2 className='mt-10 text-xl font-bold'>6. Cambios a Nuestro Aviso de Privacidad:</h2>
            <p className='mt-4 leading-7'>&quot;PorTi Seguros&quot; puede modificar este Aviso de Privacidad ocasionalmente. Cualquier cambio será publicado en esta página con la fecha de la última actualización.</p>

            <h2 className='mt-10 text-xl font-bold'>7. Contacto:</h2>
            <p className='mt-4 leading-7'>Si tiene preguntas o comentarios sobre este Aviso de Privacidad, por favor contáctenos en 614-288-42-70.</p>

            <p className='mt-4 leading-7'>Gracias por confiar en &quot;PorTi Seguros&quot;.</p>
        </>
    )
}

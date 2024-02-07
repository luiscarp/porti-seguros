import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

import { Card } from 'flowbite-react'


function productos() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/logopestana.png" />
            </Head>
            <NextSeo
                title="PorTi Seguros"
                description="Por Ti seguros, ubicados en Chihuahua, somos agentes de seguros dedicados a vender todo tipo de seguros de auto, daños, de vida, gastos médicos mayores, uber, didi, somos asesores profesionales en el area"
                openGraph={{
                    title: 'PorTi Seguros',
                    description: 'Por Ti seguros, ubicados en Chihuahua, somos agentes de seguros dedicados a vender todo tipo de seguros de auto, daños, de vida, gastos médicos mayores, uber, didi, somos asesores profesionales en el area',
                    // Aquí puedes añadir más configuraciones de Open Graph si lo necesitas
                }}
            />
            <Navbar producto='True'></Navbar>

            <div className='mb-1 md:mb-8 mt-8 flex flex-col text-sm text-center md:text-3xl md:text-center items-center text-white font-bold'>


                <h1 className=' text-center'>Conoce nuestros</h1>

                <h1 className='text-center mt-1 md:mt-4 italic text-amber-500'>PRODUCTOS Y SERVICIOS</h1>


            </div>

            <div className='flex flex-col justify-center mb-4 items-center'>

                <img src='/portadaproductos.png' className='sm:w-1/3'></img>

                <span className=' mt-6 mx-auto text-sm text-center md:text-3xl md:text-center items-center text-white font-bold'> En PorTi Seguros estamos a tu servicio con una variedad de productos y <span className='text-amber-500'>servicios a tu medida</span></span>
            </div>
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



            <div className='md:hidden flex flex-col'>
                <Link
                    href={"/seguroauto"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4 mb-6"
                        imgAlt="Seguros de auto"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707331110/DALL_E_2024-02-07_12.34.33_-_Una_imagen_llamativa_que_represente_la_oferta_de_seguros_de_da%C3%B1os_a_terceros_y_cobertura_amplia_para_veh%C3%ADculos_de_cualquier_marca_y_modelo_adaptados_xs9bhq.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Seguros de Auto
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Nuestra oferta de seguros incluye dos tipos principales de cobertura: daños a terceros y cobertura amplia.

                            Además de estas coberturas básicas, nuestros seguros también te brindan acceso a servicios esenciales como grúas en caso de avería, auxilio en carretera para situaciones como pinchazos de neumáticos o problemas mecánicos, y asistencia en carretera para ayudarte en cualquier emergencia mientras estás en movimiento. Todo esto está diseñado para brindarte tranquilidad y seguridad en cada viaje que realices con tu vehículo.                        </p>
                    </Card>


                </Link>

                <Link
                    href={"/serviciopublico"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4 mb-6"
                        imgAlt="Seguros de auto"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707332172/DALL_E_2024-02-07_12.55.57_-_Una_imagen_que_represente_la_idea_de_seguros_dise%C3%B1ados_espec%C3%ADficamente_para_veh%C3%ADculos_que_prestan_servicios_p%C3%BAblicos_como_taxis_veh%C3%ADculos_de_alquile_fvcxzd.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Servicio público
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los seguros para servicio público son pólizas diseñadas para vehículos que brindan servicios a la comunidad, como taxis, Uber, autobuses y vehículos de reparto. Estas pólizas ofrecen coberturas especiales adaptadas a las necesidades de estos vehículos, como protección en caso de accidentes para el conductor y los pasajeros, así como para terceros afectados. También pueden incluir protección para bienes transportados y asistencia en carretera.
                        </p>
                    </Card>


                </Link>

            </div>
            <div className='hidden md:flex md:flex-row md:justify-around'>
                <Link
                    href={"/seguroauto"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4"
                        imgAlt="Seguros de auto"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707331110/DALL_E_2024-02-07_12.34.33_-_Una_imagen_llamativa_que_represente_la_oferta_de_seguros_de_da%C3%B1os_a_terceros_y_cobertura_amplia_para_veh%C3%ADculos_de_cualquier_marca_y_modelo_adaptados_xs9bhq.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Seguros de Auto
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Nuestra oferta de seguros incluye dos tipos principales de cobertura: daños a terceros y cobertura amplia.

                            Además de estas coberturas básicas, nuestros seguros también te brindan acceso a servicios esenciales como grúas en caso de avería, auxilio en carretera para situaciones como pinchazos de neumáticos o problemas mecánicos, y asistencia en carretera para ayudarte en cualquier emergencia mientras estás en movimiento. Todo esto está diseñado para brindarte tranquilidad y seguridad en cada viaje que realices con tu vehículo.                        </p>
                    </Card>


                </Link>

                <Link
                    href={"/serviciopublico"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4"
                        imgAlt="Seguros de auto"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707332172/DALL_E_2024-02-07_12.55.57_-_Una_imagen_que_represente_la_idea_de_seguros_dise%C3%B1ados_espec%C3%ADficamente_para_veh%C3%ADculos_que_prestan_servicios_p%C3%BAblicos_como_taxis_veh%C3%ADculos_de_alquile_fvcxzd.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Servicio público
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los seguros para servicio público son pólizas diseñadas para vehículos que brindan servicios a la comunidad, como taxis, Uber, autobuses y vehículos de reparto. Estas pólizas ofrecen coberturas especiales adaptadas a las necesidades de estos vehículos, como protección en caso de accidentes para el conductor y los pasajeros, así como para terceros afectados. También pueden incluir protección para bienes transportados y asistencia en carretera.
                        </p>
                    </Card>


                </Link>

            </div>

            <div className='md:hidden flex flex-col mt-4'>
                <Link
                    href={"/gastosmedicos"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4 mb-6"
                        imgAlt="gastos medicos mayores"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707334222/DALL_E_2024-02-07_13.30.08_-_Una_imagen_que_represente_la_idea_de_seguros_de_gastos_m%C3%A9dicos_mayores_p%C3%B3lizas_dise%C3%B1adas_para_cubrir_los_costos_asociados_con_tratamientos_m%C3%A9dicos_y_zo2zov.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Gastos médicos mayores
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los seguros de gastos médicos mayores son pólizas diseñadas para cubrir los costos asociados con tratamientos médicos y hospitalarios de gran magnitud. Estos seguros ofrecen una cobertura amplia que incluye hospitalización, cirugías, consultas médicas, medicamentos y otros servicios relacionados con la atención médica. Su objetivo principal es proteger a los asegurados contra los altos costos médicos que podrían surgir como resultado de enfermedades graves, accidentes o lesiones. Los asegurados pueden elegir entre una variedad de planes y opciones de cobertura para adaptarse a sus necesidades y presupuesto. Los seguros de gastos médicos mayores brindan tranquilidad financiera y acceso a atención médica de calidad cuando más se necesita.

                        </p>
                    </Card>


                </Link>

                <Link
                    href={"/segurosvida"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4 mb-6"
                        imgAlt="Seguros de vida"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707334929/DALL_E_2024-02-07_13.41.56_-_Visualizaci%C3%B3n_creativa_que_represente_el_concepto_de_seguros_de_vida_enfoc%C3%A1ndose_en_la_tranquilidad_y_soporte_financiero_que_brindan_a_las_familias_t_kr3hjt.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Seguros de vida
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los seguros de vida son pólizas que proporcionan una suma de dinero a los beneficiarios designados en caso del fallecimiento del asegurado. El objetivo principal es ofrecer protección financiera a los seres queridos del asegurado, asegurándose de que tengan apoyo económico en su ausencia. Estos seguros pueden variar en términos de cobertura, desde el pago de un monto fijo hasta incluir beneficios adicionales como el ahorro, la inversión o la cobertura de enfermedades graves. Los asegurados eligen la cantidad de la cobertura y los beneficiarios, adaptando la póliza a sus necesidades y situación financiera. Los seguros de vida son una herramienta clave para la planificación financiera familiar, proporcionando tranquilidad al asegurado de que sus seres queridos estarán protegidos económicamente.
                        </p>
                    </Card>


                </Link>

            </div>
            <div className='hidden md:flex md:flex-row md:justify-around mt-8'>
                <Link
                    href={"/gastosmedicos"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4"
                        imgAlt="gastos medicos mayores"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707334222/DALL_E_2024-02-07_13.30.08_-_Una_imagen_que_represente_la_idea_de_seguros_de_gastos_m%C3%A9dicos_mayores_p%C3%B3lizas_dise%C3%B1adas_para_cubrir_los_costos_asociados_con_tratamientos_m%C3%A9dicos_y_zo2zov.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Gastos médicos mayores
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los seguros de gastos médicos mayores son pólizas diseñadas para cubrir los costos asociados con tratamientos médicos y hospitalarios de gran magnitud. Estos seguros ofrecen una cobertura amplia que incluye hospitalización, cirugías, consultas médicas, medicamentos y otros servicios relacionados con la atención médica. Su objetivo principal es proteger a los asegurados contra los altos costos médicos que podrían surgir como resultado de enfermedades graves, accidentes o lesiones. Los asegurados pueden elegir entre una variedad de planes y opciones de cobertura para adaptarse a sus necesidades y presupuesto. Los seguros de gastos médicos mayores brindan tranquilidad financiera y acceso a atención médica de calidad cuando más se necesita.

                        </p>

                    </Card>


                </Link>

                <Link
                    href={"/segurosvida"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4"
                        imgAlt="Seguros de vida"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707334929/DALL_E_2024-02-07_13.41.56_-_Visualizaci%C3%B3n_creativa_que_represente_el_concepto_de_seguros_de_vida_enfoc%C3%A1ndose_en_la_tranquilidad_y_soporte_financiero_que_brindan_a_las_familias_t_kr3hjt.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Seguros de vida
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los seguros de vida son pólizas que proporcionan una suma de dinero a los beneficiarios designados en caso del fallecimiento del asegurado. El objetivo principal es ofrecer protección financiera a los seres queridos del asegurado, asegurándose de que tengan apoyo económico en su ausencia. Estos seguros pueden variar en términos de cobertura, desde el pago de un monto fijo hasta incluir beneficios adicionales como el ahorro, la inversión o la cobertura de enfermedades graves. Los asegurados eligen la cantidad de la cobertura y los beneficiarios, adaptando la póliza a sus necesidades y situación financiera. Los seguros de vida son una herramienta clave para la planificación financiera familiar, proporcionando tranquilidad al asegurado de que sus seres queridos estarán protegidos económicamente.
                        </p>
                    </Card>


                </Link>

            </div>

            <div className='md:hidden flex flex-col mt-4 mb-6'>
                <Link
                    href={"/danos"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4 mb-6"
                        imgAlt="seguro de danos"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707335707/DALL_E_2024-02-07_13.54.36_-_Una_imagen_que_represente_el_concepto_de_seguros_de_da%C3%B1os_mostrando_una_p%C3%B3liza_de_seguro_protegiendo_una_variedad_de_bienes_como_una_casa_un_veh%C3%ADcul_bbj5jv.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Seguro de daños
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los seguros de daños son pólizas diseñadas para proteger al asegurado contra pérdidas económicas derivadas de daños a sus bienes o propiedades. Estos seguros pueden cubrir una amplia gama de situaciones, incluyendo daños por incendio, inundación, robo, vandalismo, y otros riesgos específicos. La cobertura puede aplicarse a diversas propiedades, como viviendas, vehículos, equipos electrónicos y comerciales, entre otros. El objetivo principal de estos seguros es proporcionar una compensación financiera para reparar o reemplazar los bienes afectados, minimizando así el impacto económico para el asegurado. Dependiendo de la póliza, el seguro de daños puede incluir también responsabilidad civil, protegiendo al asegurado contra reclamaciones de terceros por daños causados.

                        </p>
                    </Card>


                </Link>

                <Link
                    href={"/planesretiro"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4 mb-6"
                        imgAlt="planes de retiro"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707336148/DALL_E_2024-02-07_14.02.18_-_Una_imagen_que_ilustre_el_concepto_de_planes_de_retiro_mostrando_elementos_como_un_cerdito_hucha_gr%C3%A1ficos_de_crecimiento_financiero_y_una_persona_m_ubvnyx.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Planes de retiro
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los planes de retiro son estrategias de ahorro e inversión a largo plazo destinadas a proporcionar ingresos durante la jubilación. Permiten contribuciones regulares que se invierten para crecer con el tiempo. Al jubilarse, los participantes reciben pagos regulares o una suma global. Estos planes ofrecen beneficios fiscales y están diseñados para asegurar una fuente de ingresos estable en la jubilación.
                        </p>
                    </Card>


                </Link>

            </div>
            <div className='hidden md:flex md:flex-row md:justify-around mt-8'>
                <Link
                    href={"/danos"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4 mb-6"
                        imgAlt="seguro de danos"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707335707/DALL_E_2024-02-07_13.54.36_-_Una_imagen_que_represente_el_concepto_de_seguros_de_da%C3%B1os_mostrando_una_p%C3%B3liza_de_seguro_protegiendo_una_variedad_de_bienes_como_una_casa_un_veh%C3%ADcul_bbj5jv.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Seguro de daños
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los seguros de daños son pólizas diseñadas para proteger al asegurado contra pérdidas económicas derivadas de daños a sus bienes o propiedades. Estos seguros pueden cubrir una amplia gama de situaciones, incluyendo daños por incendio, inundación, robo, vandalismo, y otros riesgos específicos. La cobertura puede aplicarse a diversas propiedades, como viviendas, vehículos, equipos electrónicos y comerciales, entre otros. El objetivo principal de estos seguros es proporcionar una compensación financiera para reparar o reemplazar los bienes afectados, minimizando así el impacto económico para el asegurado. Dependiendo de la póliza, el seguro de daños puede incluir también responsabilidad civil, protegiendo al asegurado contra reclamaciones de terceros por daños causados.

                        </p>

                    </Card>


                </Link>

                <Link
                    href={"/planesretiro"}
                    target='_blank'

                >
                    <Card
                        className="max-w-sm mx-4 mb-6"
                        imgAlt="planes de retiro"
                        imgSrc="https://res.cloudinary.com/dz9dt7nqo/image/upload/v1707336148/DALL_E_2024-02-07_14.02.18_-_Una_imagen_que_ilustre_el_concepto_de_planes_de_retiro_mostrando_elementos_como_un_cerdito_hucha_gr%C3%A1ficos_de_crecimiento_financiero_y_una_persona_m_ubvnyx.webp"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Planes de retiro
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Los planes de retiro son estrategias de ahorro e inversión a largo plazo destinadas a proporcionar ingresos durante la jubilación. Permiten contribuciones regulares que se invierten para crecer con el tiempo. Al jubilarse, los participantes reciben pagos regulares o una suma global. Estos planes ofrecen beneficios fiscales y están diseñados para asegurar una fuente de ingresos estable en la jubilación.
                        </p>
                    </Card>


                </Link>

            </div>






            <Footer></Footer>

        </div>
    )
}

export default productos

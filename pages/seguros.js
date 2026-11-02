import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import TarjetasRamos from '@/components/TarjetasRamos'
import BotonesContacto from '@/components/BotonesContacto'

function seguros() {
    return (
        <div>
            <Seo path='/seguros' />
            <Navbar producto='True'></Navbar>

            <div className='mx-auto mt-8 mb-8 max-w-3xl px-4 text-center text-white'>
                <h1 className='text-2xl font-bold md:text-4xl'>
                    Tipos de seguros en Chihuahua <span className='block mt-1 md:mt-4 italic text-amber-500'>a tu medida</span>
                </h1>
                <p className='mt-6 text-lg leading-8'>
                    En PorTi Seguros te asesoramos para proteger a tu familia, tu patrimonio y tu negocio. Elige el seguro que te interesa para conocer qué cubre, qué considerar al elegir y cómo te acompañamos. Si no sabes por dónde empezar, escríbenos y lo revisamos juntos.
                </p>
            </div>

            <section aria-labelledby='nuestros-seguros' className='pb-10'>
                <h2 id='nuestros-seguros' className='mb-6 text-center text-xl font-bold text-white md:text-3xl'>Nuestros seguros</h2>
                <TarjetasRamos />
            </section>

            <BotonesContacto />

            <Footer></Footer>
        </div>
    )
}

export default seguros

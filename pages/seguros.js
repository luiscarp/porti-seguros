import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import TarjetasRamos from '@/components/TarjetasRamos'
import CtaBanda from '@/components/CtaBanda'

function seguros() {
    return (
        <div>
            <Seo path='/seguros' />
            <Navbar />

            <main>
                <PageHero
                    titulo='Tipos de seguros en Chihuahua'
                    intro={['En PorTi Seguros te asesoramos para proteger a tu familia, tu patrimonio y tu negocio. Elige el seguro que te interesa para conocer qué cubre, qué considerar al elegir y cómo te acompañamos. Si no sabes por dónde empezar, escríbenos y lo revisamos juntos.']}
                    migas={[{ nombre: 'Inicio', href: '/' }, { nombre: 'Seguros' }]}
                />

                <section aria-labelledby='nuestros-seguros' className='bg-slate-50 py-16'>
                    <h2 id='nuestros-seguros' className='mb-10 text-center text-3xl font-bold'>Nuestros seguros</h2>
                    <TarjetasRamos />
                </section>

                <CtaBanda />
            </main>

            <Footer />
        </div>
    )
}

export default seguros

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import CtaBanda from '@/components/CtaBanda'

// Enlace provisional a las reseñas; T10 lo cambia por el enlace oficial "Pedir reseñas" de Google.
const RESENAS_GOOGLE = 'https://www.google.com/search?q=portiseguros+google+maps#lrd=0x86ea437103ecc5b9:0xc7c0c950a9cb4843,3,,,,'

function opiniones() {
    return (
        <div>
            <Seo path='/opiniones' />
            <Navbar />

            <main>
                <PageHero
                    titulo='Opiniones de nuestros clientes'
                    intro={['Lo que dicen las familias y negocios de Chihuahua que confían en nosotros sobre la asesoría y el acompañamiento que reciben.']}
                    migas={[{ nombre: 'Inicio', href: '/' }, { nombre: 'Opiniones' }]}
                >
                    <a
                        href={RESENAS_GOOGLE}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mt-8 inline-block rounded-full bg-white px-6 py-3 font-bold text-brand-800 hover:bg-brand-50'
                    >
                        Déjanos tu opinión en Google
                    </a>
                </PageHero>

                <section className='mx-auto max-w-6xl px-4 py-12'>
                    <iframe
                        title='Testimonios de clientes de PorTi Seguros'
                        id='testimonialto-portiseguros-tag-all-light-animated'
                        src='https://embed-v2.testimonial.to/w/portiseguros?animated=on&theme=light&shadowColor=000000&speed=1&hideDate=on&hideSource&tag=all&showHeartAnim'
                        loading='lazy'
                        className='h-[800px] w-full rounded-2xl'
                    ></iframe>
                </section>

                <CtaBanda />
            </main>

            <Footer />
        </div>
    )
}

export default opiniones

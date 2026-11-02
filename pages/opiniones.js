import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import CtaBanda from '@/components/CtaBanda'
import { BUSINESS, isPending } from '@/config/business'

// Enlace oficial "Pedir reseñas"; mientras esté pendiente se usa la ficha de Google Maps.
const RESENAS_GOOGLE = isPending(BUSINESS.social.googleReviews) ? BUSINESS.social.googleMaps : BUSINESS.social.googleReviews

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

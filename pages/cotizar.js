import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from "@/components/Seo";
import PageHero from '@/components/PageHero';
import CtaButtons from '@/components/CtaButtons';

import React from 'react'

// Provisional: T11 agrega el formulario corto que abre WhatsApp con el mensaje armado.
function cotizar() {
    return (
        <div>
            <Seo path="/cotizar" />
            <Navbar />
            <main>
                <PageHero
                    titulo='Cotiza tu seguro'
                    intro={['Cuéntanos qué necesitas proteger y te preparamos una cotización sin compromiso. Te respondemos por WhatsApp o por teléfono.']}
                    migas={[{ nombre: 'Inicio', href: '/' }, { nombre: 'Cotizar' }]}
                >
                    <CtaButtons whatsappText='Hola, quiero cotizar un seguro (página Cotizar).' className='mt-8' />
                </PageHero>
            </main>
            <Footer />
        </div>
    )
}

export default cotizar

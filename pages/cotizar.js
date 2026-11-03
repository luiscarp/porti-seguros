import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from "@/components/Seo";
import PageHero from '@/components/PageHero';
import FormularioCotizar from '@/components/FormularioCotizar';
import { BUSINESS } from '@/config/business';

import React from 'react'

const PASOS = [
    'Llenas el formulario con tus datos básicos y el seguro que te interesa.',
    'Se abre WhatsApp con tu mensaje listo para enviarlo.',
    'Te contactamos para conocer lo que necesitas y prepararte opciones de distintas aseguradoras.',
]

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
                />

                <div className='mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-5'>
                    <div className='lg:col-span-3'>
                        <FormularioCotizar />
                    </div>

                    <aside className='space-y-8 lg:col-span-2'>
                        <section>
                            <h2 className='text-xl font-bold'>¿Cómo funciona?</h2>
                            <ol className='mt-4 space-y-3'>
                                {PASOS.map((paso, i) => (
                                    <li key={paso} className='flex gap-3 leading-7'>
                                        <span className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white' aria-hidden='true'>{i + 1}</span>
                                        <span>{paso}</span>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        <section className='rounded-2xl bg-slate-50 p-6'>
                            <h2 className='text-xl font-bold'>Tus datos, solo los necesarios</h2>
                            <p className='mt-2 leading-7'>
                                Para cotizar no te pedimos CURP, RFC, datos de salud, números de tarjeta ni documentos. Si más adelante la aseguradora necesita información adicional, te lo explicamos en persona.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl font-bold'>¿Prefieres llamar?</h2>
                            <p className='mt-2 leading-7'>Lunes a viernes de 9:00 a 18:00 y sábado de 10:00 a 14:00.</p>
                            <a href={`tel:${BUSINESS.phoneE164}`} className='mt-4 inline-block rounded-full border border-slate-300 px-6 py-3 font-bold text-slate-800 hover:bg-slate-50'>
                                Llamar al {BUSINESS.phoneDisplay}
                            </a>
                        </section>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default cotizar

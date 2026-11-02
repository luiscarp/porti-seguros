import React from 'react'
import Link from 'next/link'
import { BUSINESS, isPending, whatsappLink } from '@/config/business'
import { useMensajeWhatsapp } from '@/content/whatsapp'
import { RAMOS } from '@/content/seguros'

const DIAS = { Mo: 'lunes', Tu: 'martes', We: 'miércoles', Th: 'jueves', Fr: 'viernes', Sa: 'sábado', Su: 'domingo' }

function horario({ days, opens, closes }) {
    const rango = days.length > 1 ? `${DIAS[days[0]]} a ${DIAS[days[days.length - 1]]}` : DIAS[days[0]]
    return `${rango.charAt(0).toUpperCase() + rango.slice(1)}: ${opens} a ${closes}`
}

function Footer() {
    const { address } = BUSINESS
    const mensaje = useMensajeWhatsapp()
    return (
        <footer className='bg-brand-900 text-brand-100'>
            <div className='mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <p className='font-display text-2xl font-bold text-white'>{BUSINESS.name}</p>
                    <p className='mt-1 text-sm'>{BUSINESS.agentName}, agente de seguros desde {BUSINESS.agentSince}</p>
                    <p className='mt-1 text-sm'>Cédula CNSF: {BUSINESS.cnsfLicense}</p>
                    <address className='mt-4 text-sm not-italic leading-6'>
                        {address.street}<br />
                        Col. {address.neighborhood}, C.P. {address.postalCode}<br />
                        {address.city}, {address.region}
                    </address>
                    <ul className='mt-4 space-y-1 text-sm'>
                        {BUSINESS.hours.map((h) => (
                            <li key={h.days.join()}>{horario(h)}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className='text-sm font-bold uppercase tracking-wider text-white'>Seguros</h2>
                    <ul className='mt-4 space-y-2 text-sm'>
                        {RAMOS.map((ramo) => (
                            <li key={ramo.slug}>
                                <Link href={`/${ramo.slug}`} className='hover:text-white hover:underline'>{ramo.nombre}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className='text-sm font-bold uppercase tracking-wider text-white'>Contacto</h2>
                    <ul className='mt-4 space-y-2 text-sm'>
                        <li><a href={`tel:${BUSINESS.phoneE164}`} className='hover:text-white hover:underline'>Teléfono: {BUSINESS.phoneDisplay}</a></li>
                        <li><a href={whatsappLink(mensaje)} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline'>WhatsApp: {BUSINESS.phoneDisplay}</a></li>
                        <li><a href={BUSINESS.social.googleMaps} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline'>Cómo llegar</a></li>
                        <li><a href={BUSINESS.social.facebook} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline'>Facebook</a></li>
                        {!isPending(BUSINESS.social.instagram) && (
                            <li><a href={BUSINESS.social.instagram} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline'>Instagram</a></li>
                        )}
                        <li><Link href='/claudia-pacheco' className='hover:text-white hover:underline'>Claudia Pacheco</Link></li>
                        <li><Link href='/opiniones' className='hover:text-white hover:underline'>Opiniones</Link></li>
                        <li><Link href='/preguntas-frecuentes' className='hover:text-white hover:underline'>Preguntas frecuentes</Link></li>
                        <li><Link href='/contacto' className='hover:text-white hover:underline'>Contacto</Link></li>
                        <li><Link href='/cotizar' className='hover:text-white hover:underline'>Cotizar</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-sm font-bold uppercase tracking-wider text-white'>Legal y recursos</h2>
                    <ul className='mt-4 space-y-2 text-sm'>
                        <li><Link href='/aviso-de-privacidad' className='hover:text-white hover:underline'>Aviso de privacidad</Link></li>
                        <li><Link href='/terminos' className='hover:text-white hover:underline'>Términos y condiciones</Link></li>
                        <li><a href='https://www.gob.mx/cnsf' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline'>Comisión Nacional de Seguros y Fianzas (CNSF)</a></li>
                        <li><a href='https://www.condusef.gob.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline'>CONDUSEF</a></li>
                    </ul>
                </div>
            </div>

            <div className='border-t border-white/10'>
                <p className='mx-auto max-w-6xl px-4 py-6 text-xs leading-5 text-brand-200'>
                    © {new Date().getFullYear()} {BUSINESS.name}. Las coberturas, sumas aseguradas, deducibles y primas dependen de la aseguradora y de la póliza contratada.
                </p>
            </div>
        </footer>
    )
}

export default Footer

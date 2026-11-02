import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BUSINESS, whatsappLink } from '@/config/business'
import { useMensajeWhatsapp } from '@/content/whatsapp'

const NAVIGATION = [
    { name: 'Inicio', href: '/' },
    { name: 'Seguros', href: '/seguros' },
    { name: 'Claudia Pacheco', href: '/claudia-pacheco' },
    { name: 'Opiniones', href: '/opiniones' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Cotizar', href: '/cotizar' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// Las páginas de ramo (/[ramo]) cuentan como parte de "Seguros".
function isCurrent(pathname, href) {
    return pathname === href || (href === '/seguros' && pathname === '/[ramo]')
}

export default function Navbar() {
    const { pathname } = useRouter()
    const mensaje = useMensajeWhatsapp()

    return (
        <Disclosure as='nav' aria-label='Principal' className='sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur'>
            {({ open }) => (
                <>
                    <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20'>
                        <Link href='/' className='flex shrink-0 items-center'>
                            <Image src='/porti-seguros-logo.png' alt={BUSINESS.name} width={1722} height={582} priority className='h-9 w-auto md:h-12' />
                        </Link>

                        <div className='hidden items-center gap-1 lg:flex'>
                            {NAVIGATION.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                                    className={classNames(
                                        isCurrent(pathname, item.href) ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                                        'rounded-full px-3 py-2 text-sm font-semibold xl:px-4'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className='hidden items-center gap-3 lg:flex'>
                            <a href={`tel:${BUSINESS.phoneE164}`} className='hidden items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-700 xl:flex'>
                                <PhoneIcon className='h-4 w-4' aria-hidden='true' />
                                {BUSINESS.phoneDisplay}
                            </a>
                            <a
                                href={whatsappLink(mensaje)}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='rounded-full bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-green-800'
                            >
                                WhatsApp
                            </a>
                        </div>

                        <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 lg:hidden'>
                            <span className='sr-only'>{open ? 'Cerrar menú' : 'Abrir menú'}</span>
                            {open ? <XMarkIcon className='h-6 w-6' aria-hidden='true' /> : <Bars3Icon className='h-6 w-6' aria-hidden='true' />}
                        </Disclosure.Button>
                    </div>

                    <Disclosure.Panel className='border-t border-slate-200 lg:hidden'>
                        <div className='space-y-1 px-4 pb-4 pt-2'>
                            {NAVIGATION.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    href={item.href}
                                    aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                                    className={classNames(
                                        isCurrent(pathname, item.href) ? 'bg-brand-50 text-brand-700' : 'text-slate-700 hover:bg-slate-100',
                                        'block rounded-lg px-3 py-2 text-base font-semibold'
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                            <div className='flex gap-2 pt-2'>
                                <a href={`tel:${BUSINESS.phoneE164}`} className='flex-1 rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-bold text-slate-800'>
                                    Llamar
                                </a>
                                <a
                                    href={whatsappLink(mensaje)}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='flex-1 rounded-full bg-green-700 px-4 py-2 text-center text-sm font-bold text-white'
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

import {
  BanknotesIcon,
  DevicePhoneMobileIcon,
  GlobeAmericasIcon,
  HeartIcon,
  HomeModernIcon,
  ScaleIcon,
  TicketIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

// Iconos de línea propios para lo que Heroicons no tiene (auto, taxi, gastos médicos), con el mismo trazo.
function Svg({ children, ...props }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' {...props}>
      {children}
    </svg>
  )
}

function AutoIcon(props) {
  return (
    <Svg {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 15.75V12l1.8-4.2A1.5 1.5 0 0 1 6.93 6.9h10.14a1.5 1.5 0 0 1 1.38.9l1.8 4.2v3.75a.75.75 0 0 1-.75.75h-1.5M3.75 15.75a.75.75 0 0 0 .75.75H6m-2.25-4.5h16.5M6 16.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm9 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-6 0h6' />
    </Svg>
  )
}

function TaxiIcon(props) {
  return (
    <Svg {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6.9V4.5h3v2.4M3.75 17.25V13.5l1.8-4.2a1.5 1.5 0 0 1 1.38-.9h10.14a1.5 1.5 0 0 1 1.38.9l1.8 4.2v3.75a.75.75 0 0 1-.75.75h-1.5M3.75 17.25a.75.75 0 0 0 .75.75H6m-2.25-4.5h16.5M6 18a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm9 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-6 0h6' />
    </Svg>
  )
}

function MedicoIcon(props) {
  return (
    <Svg {...props}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 8.25v7.5M8.25 12h7.5M6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75Z' />
    </Svg>
  )
}

const ICONOS = {
  'seguros-de-vida': HeartIcon,
  'seguro-uber-didi': DevicePhoneMobileIcon,
  'seguro-para-taxi': TaxiIcon,
  'seguro-de-auto': AutoIcon,
  'gastos-medicos-mayores': MedicoIcon,
  'plan-personal-de-retiro': BanknotesIcon,
  'seguro-de-danos': HomeModernIcon,
  'responsabilidad-civil': ScaleIcon,
  'seguro-eventos-masivos': TicketIcon,
  'seguro-flotillas': TruckIcon,
  'seguro-de-viaje': GlobeAmericasIcon,
}

export default function IconoRamo({ slug, className = 'h-6 w-6' }) {
  const Icono = ICONOS[slug] ?? HeartIcon
  return <Icono className={className} aria-hidden='true' />
}

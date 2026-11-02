import { useEffect } from 'react'
import Script from 'next/script'
import { GA_ID, rastrearClics } from '@/lib/analytics'

// GA4 con next/script (afterInteractive) y rastreo de clics de contacto.
export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID) return
    document.addEventListener('click', rastrearClics)
    return () => document.removeEventListener('click', rastrearClics)
  }, [])

  if (!GA_ID) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
      <Script id='ga4' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  )
}

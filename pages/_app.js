import '@/styles/globals.css'
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { SessionProvider } from "next-auth/react"
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-montserrat', display: 'swap' })

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div className={`${inter.variable} ${montserrat.variable} font-sans`}>
      <DefaultSeo {...SEO} />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
      <SpeedInsights />

    </div>
  )
}

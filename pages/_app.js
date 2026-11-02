import '@/styles/globals.css'
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { SessionProvider } from "next-auth/react"
import { Inter, Montserrat } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-montserrat', display: 'swap' })

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <div className={`${inter.variable} ${montserrat.variable} font-sans`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
      <SpeedInsights />

    </div>
  )
}

import '@/styles/globals.css'
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { SessionProvider } from "next-auth/react"



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
      <Analytics />
      <SpeedInsights />

    </>
  )
}

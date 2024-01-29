import '@/styles/globals.css'
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';



export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />

    </>
  )
}

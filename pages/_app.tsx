import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

import { Montserrat } from '@next/font/google'
const textFont = Montserrat({ subsets: ['latin'] })

import './style/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={textFont.className}
      aria-label="Application"
      role="application"
    >
      <Analytics />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

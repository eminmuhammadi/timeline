import type { AppProps } from 'next/app'
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
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

// These styles apply to every route in the application
import './globals.css'

import { Montserrat } from '@next/font/google'
const textFont = Montserrat({ subsets: ['latin'] })

interface IRootLayout {
  children: React.ReactNode
}

const RootLayout = (layout: IRootLayout) => {
  return (
    <html lang="en">
      <head />
      <body>
        <main className={textFont.className}>{layout.children}</main>
      </body>
    </html>
  )
}

export default RootLayout
import '@/styles/globals.css'
import '@radix-ui/themes/styles.css'

import { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { Theme } from '@radix-ui/themes'

import Footer from '@/components/footer'
import cn from 'classnames'
import Navbar from '@/components/navbar'

export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata: Metadata = {
  // viewport: { width: 'device-width', initialScale: 1 },
  icons: { icon: '/favicon.ico', apple: '/favicon.ico' },
}

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <div
            className={cn('min-h-screen bg-background', jetbrains.className)}
          >
            <Navbar font={jetbrains} />
            <div className="mx-auto max-w-4xl py-10 md:py-20">{children}</div>
          </div>
          <Footer font={jetbrains} />
        </Theme>
      </body>
    </html>
  )
}

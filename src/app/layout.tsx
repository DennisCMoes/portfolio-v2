import '@/styles/globals.css'
import '@radix-ui/themes/styles.css'

import { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { Theme } from '@radix-ui/themes'
import Footer from '@/components/footer'

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
          <div className={`min-h-screen bg-background ${jetbrains.className}`}>
            <div className="mx-auto max-w-2xl py-24">{children}</div>
          </div>
          <Footer font={jetbrains} />
        </Theme>
      </body>
    </html>
  )
}

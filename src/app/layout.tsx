import '@/styles/globals.css'
import '@radix-ui/themes/styles.css'

import { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { Theme } from '@radix-ui/themes'

export const metadata: Metadata = {
  viewport: { width: 'device-width', initialScale: 1 },
  icons: { icon: '/favicon.ico', apple: '/favicon.ico' },
}

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <div className={`bg-background min-h-screen ${jetbrains.className}`}>
            <div className="max-w-2xl mx-auto py-24">{children}</div>
          </div>
        </Theme>
      </body>
    </html>
  )
}

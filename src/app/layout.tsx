import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'

import Footer from '@/components/footer'
import cn from 'classnames'
import Navbar from '@/components/navbar'
import ScrollToTopBtn from '@/components/scrollToTop'

export const metadata: Metadata = {
  title: 'DM',
  icons: { icon: '/favicon.ico', apple: '/favicon.ico' },
  openGraph: {
    title: 'DM',
    type: 'website',
    url: 'https://dennismoes.com',
    images: {
      url: '/open-graph.jpg',
      width: 1080,
      height: 1080,
    },
  },
}

const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <div
            className={cn(
              'min-h-screen bg-background-light transition-colors duration-300 dark:bg-background-dark',
              jetbrains.className
            )}
          >
            <Navbar font={jetbrains} />
            <div className="mx-auto max-w-4xl py-10 md:py-20">{children}</div>
            <ScrollToTopBtn />
          </div>
          <Footer font={jetbrains} />
        </MantineProvider>
      </body>
    </html>
  )
}

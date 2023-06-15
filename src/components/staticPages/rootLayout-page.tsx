'use client'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

import { Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function RootLayoutPage({ children }: { children: ReactNode }) {
  const [scroll, scrollTo] = useWindowScroll()

  function scrollToTop() {
    scrollTo({ y: 0 })
  }

  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* FIXME: When outcommented there is an error about extra css styling */}
        {/* <ThemeProvider attribute="class" enableSystem={true}> */}
        <div className="flex flex-col min-h-screen transition-colors duration-300 bg-background-light dark:bg-background-dark text-primary-dark dark:text-primary-light">
          <Navbar />
          <div className="flex-1">
            {children}
            <div className="w-full inline-flex sticky bottom-5 right-5 justify-end px-4 mb-4">
              <Transition transition="slide-up" mounted={scroll.y > 100}>
                {(transitionStyles) => (
                  <button
                    style={{ ...transitionStyles, transitionProperty: 'all' }}
                    className="flex items-center bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark py-2 px-4 rounded-md md:hover:px-6"
                    onClick={scrollToTop}
                  >
                    Scroll to top
                  </button>
                )}
              </Transition>
            </div>
          </div>
          <Footer />
        </div>
        {/* </ThemeProvider> */}
        <Analytics />
      </body>
    </html>
  )
}

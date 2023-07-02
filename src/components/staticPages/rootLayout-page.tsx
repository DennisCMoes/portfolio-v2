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

  // TODO: Change this to accommodate HTML standards
  return (
    <html lang="en">
      <body>
        {/* FIXME: When outcommented there is an error about extra css styling */}
        {/* <ThemeProvider attribute="class" enableSystem={true}> */}
        <div className="flex flex-col min-h-screen transition-colors duration-300 bg-background-light dark:bg-background-dark text-primary-dark dark:text-primary-light">
          <Navbar />
          <main className={`${inter.className} flex-1 min-h-screen px-4`}>
            {children}
          </main>
          <Footer />
        </div>
        {/* <div className="w-full inline-flex sticky bottom-5 right-5 justify-end px-4 mb-4">
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
          </div> */}
        {/* </ThemeProvider> */}
        <Analytics debug={false} />
      </body>
    </html>
  )
}

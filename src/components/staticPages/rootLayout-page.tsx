'use client'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

import { Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export default function RootLayoutPage({ children }: { children: ReactNode }) {
  const [scroll, scrollTo] = useWindowScroll()

  function scrollToTop() {
    scrollTo({ y: 0 })
  }

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" enableSystem={true}>
          <div className="flex flex-col min-h-screen transition-colors duration-300 bg-background-light dark:bg-background-dark text-primary-dark dark:text-primary-light">
            <Navbar />
            <div className="flex-1">
              {children}
              <div className="w-full inline-flex sticky bottom-5 right-5 justify-end px-4 mb-4">
                <Transition transition="slide-up" mounted={scroll.y > 100}>
                  {(transitionStyles) => (
                    <button
                      style={transitionStyles}
                      className="flex items-center bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark py-2 px-4 rounded-md"
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
        </ThemeProvider>
      </body>
    </html>
  )
}

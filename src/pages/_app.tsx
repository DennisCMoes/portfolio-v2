import '@/styles/globals.css'
import '@/styles/link.css'

import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

import type { AppProps } from 'next/app'

import { Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

export default function App({ Component, pageProps }: AppProps) {
  const [scroll, scrollTo] = useWindowScroll()

  function scrollToTop() {
    scrollTo({ y: 0 })
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-primary-dark dark:text-primary-light">
        <Navbar />
        <div className="flex-1">
          {/* ORIGINAL NEXTJS COMPONENT */}
          <Component {...pageProps} />
          {/* SCROLL TO TOP BUTTON */}
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
    </>
  )
}

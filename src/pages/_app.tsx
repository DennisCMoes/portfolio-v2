import '@/styles/globals.css'
import '@/styles/link.css'

import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

import type { AppProps } from 'next/app'

import { Affix, Transition, rem } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

export default function App({ Component, pageProps }: AppProps) {
  const [scroll, scrollTo] = useWindowScroll()

  function scrollToTop() {
    scrollTo({ y: 0 })
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {/* FIXME: The footer clips with the scroll back button */}
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <button
              style={transitionStyles}
              className="flex items-center bg-secondary-light text-primary-light py-2 px-4 rounded-md"
              onClick={scrollToTop}
            >
              Scroll to top
            </button>
          )}
        </Transition>
      </Affix>
      <Footer />
    </>
  )
}

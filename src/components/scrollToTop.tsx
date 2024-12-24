'use client'

import { Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

export default function ScrollToTopBtn() {
  const [scroll, scrollTo] = useWindowScroll()

  const scrollToTop = () => scrollTo({ y: 0 })

  return (
    <div className="sticky bottom-5 ml-auto inline-flex w-full justify-end pr-4">
      <Transition transition={'slide-up'} mounted={scroll.y > 100}>
        {(transitionStyles) => (
          <button
            style={{ ...transitionStyles, transitionProperty: 'all' }}
            className="mb-4 rounded-md bg-primary px-4 py-2 text-background-light"
            onClick={scrollToTop}
          >
            Scroll to top
          </button>
        )}
      </Transition>
    </div>
  )
}

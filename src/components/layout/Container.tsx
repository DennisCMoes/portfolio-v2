import { ReactNode } from 'react'

type Params = {
  size: 'm' | 'l'
  children: ReactNode
}

export default function LayoutContainer({ size, children }: Params) {
  const getContainerSize = (): string => {
    switch (size) {
      case 'm':
        return 'max-w-2xl'
      case 'l':
        return 'max-w-3xl'
    }
  }

  return (
    <section className={`${getContainerSize()} mx-auto`}>{children}</section>
  )
}

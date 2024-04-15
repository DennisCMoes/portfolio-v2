import { ReactNode } from 'react'

type Params = {
  size: 'm' | 'l' | 'xl'
  children?: ReactNode
}

export default function LayoutContainer({ size, children }: Params) {
  const getContainerSize = (): string => {
    switch (size) {
      case 'm':
        return 'max-w-2xl'
      case 'l':
        return 'max-w-3xl'
      case 'xl':
        return 'max-w-4xl'
    }
  }

  return (
    <section className={`${getContainerSize()} mx-auto`}>
      {children && children}
    </section>
  )
}

import LayoutContainer from '@/components/layout/Container'
import { ReactNode } from 'react'

type Params = {
  children: ReactNode
}

export default function ProjectDetailLayout({ children }: Params) {
  return <LayoutContainer size="l">{children}</LayoutContainer>
}

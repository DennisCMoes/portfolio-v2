'use client'

import type { MDXComponents } from 'mdx/types'
import { ReactNode } from 'react'

const CustomHeader = ({
  level,
  children,
}: {
  level: number
  children: ReactNode
}): JSX.Element => {
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    default:
      return <p>{children}</p>
  }
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <CustomHeader level={1} children={props.children} />,
    h2: (props) => <CustomHeader level={2} children={props.children} />,
    h3: (props) => <CustomHeader level={3} children={props.children} />,
    ...components,
  }
}

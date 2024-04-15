import { ReactNode } from 'react'

export default function CustomHeader({
  level,
  children,
}: {
  level: 1 | 2 | 3
  children: ReactNode
}): JSX.Element {
  switch (level) {
    case 1:
      return <h1 className="text-3xl">{children}</h1>
    case 2:
      return <h2 className="text-2xl">{children}</h2>
    case 3:
      return <h3 className="text-xl">{children}</h3>
    default:
      return <p>{children}</p>
  }
}

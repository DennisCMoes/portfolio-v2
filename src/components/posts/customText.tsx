import { ReactNode } from 'react'

export default function CustomText({
  level,
  children,
}: {
  level: 0 | 1 | 2 | 3
  children: ReactNode
}): JSX.Element {
  switch (level) {
    case 0:
      return <p className="mb-4">{children}</p>
    case 1:
      return <h1 className="text-3xl mt-8 mb-1">{children}</h1>
    case 2:
      return <h2 className="text-2xl mt-8 mb-1">{children}</h2>
    case 3:
      return <h3 className="text-xl mt-8 mb-1">{children}</h3>
  }
}

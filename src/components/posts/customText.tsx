import { ReactNode } from 'react'

export default function CustomText({
  level,
  children,
}: {
  level: -1 | 0 | 1 | 2 | 3
  children: ReactNode
}): JSX.Element {
  switch (level) {
    case -1:
      return <p className="mb-0 text-sm">{children}</p>
    case 0:
      return <p className="mb-4">{children}</p>
    case 1:
      return <h1 className="mb-1 mt-8 text-3xl">{children}</h1>
    case 2:
      return <h2 className="mb-1 mt-8 text-2xl">{children}</h2>
    case 3:
      return <h3 className="mb-1 mt-8 text-xl">{children}</h3>
  }
}

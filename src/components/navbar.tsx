'use client'

import { NextFont } from 'next/dist/compiled/@next/font'
import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = { font: NextFont }

export default function Navbar({ font }: Props) {
  const pathname = usePathname()

  const isCurrentUrl = (regex: RegExp): boolean => regex.test(pathname)

  const isHomeUrl = isCurrentUrl(/^\/$/gm)
  const isAboutUrl = isCurrentUrl(/about/gm)

  return (
    <nav
      className={cn(
        'mx-auto flex max-w-2xl flex-row gap-4 px-4 py-2 md:px-0',
        font.className
      )}
    >
      <Link
        href={'/'}
        aria-disabled={isHomeUrl}
        tabIndex={isHomeUrl ? -1 : undefined}
        className={cn('font-medium transition-colors duration-150', {
          'pointer-events-none text-primary hover:text-primary/75': isHomeUrl,
          'text-secondary hover:text-secondary/75': !isHomeUrl,
        })}
      >
        Home
      </Link>
      <Link
        href={'/about'}
        aria-disabled={isHomeUrl}
        tabIndex={isHomeUrl ? -1 : undefined}
        className={cn('font-medium transition-colors duration-150', {
          'text-primary hover:text-primary/75': isAboutUrl,
          'text-secondary hover:text-secondary/75': !isAboutUrl,
        })}
      >
        About
      </Link>
    </nav>
  )
}

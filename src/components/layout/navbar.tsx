'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const getClassOfLink = (regex: RegExp): string => {
    const currentRoute = regex.test(pathname)

    return currentRoute ? 'font-medium' : ''
  }

  // .navbar {
  //   display: flex;
  //   align-items: center;
  //   padding: var(--navbar-padding, 0.5rem/* 8px */);
  //   min-height: 4rem/* 64px */;
  //   width: 100%;
  // }
  // :where(.navbar > *:not(script, style)) {
  //   display: inline-flex;
  //   align-items: center;
  // }

  return (
    <nav className="flex min-h-16 w-full items-center bg-base-100">
      <div className="w-full max-w-2xl md:mx-auto">
        <div className="flex flex-row gap-4">
          <Link className={getClassOfLink(/^\/>$/gm)} href={'/'}>
            Home
          </Link>
          <Link className={getClassOfLink(/projects/gm)} href={'/projects'}>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

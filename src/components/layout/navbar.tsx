'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const getClassOfLink = (regex: RegExp): string => {
    const currentRoute = regex.test(pathname)

    return currentRoute ? 'font-medium' : ''
  }

  return (
    <nav className="navbar bg-base-100">
      <div className="max-w-2xl w-full mx-auto">
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

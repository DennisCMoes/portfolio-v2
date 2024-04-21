'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const getClassOfLink = (regex: RegExp): string => {
    const currentRoute = regex.test(pathname)
    return currentRoute
      ? 'text-black font-medium hover:text-gray-700'
      : 'text-gray-600 hover:text-gray-800'
  }

  return (
    <nav className="flex min-h-16 w-full items-center bg-base-100">
      <div className="w-full max-w-2xl md:mx-auto">
        <div className="flex flex-row gap-4">
          <Link className={getClassOfLink(/^\/$/gm)} href={'/'}>
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

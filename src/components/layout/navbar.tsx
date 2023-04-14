import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ACTIVE_LINK = ''
const NOT_ACTIVE_LINK = 'text-tertiary'

export default function Navbar() {
  const router = useRouter()
  const [path, setPath] = useState<string>('')

  useEffect(() => {
    setPath(router.pathname)
  }, [router])

  return (
    <nav className="w-full py-2 px-4 md:px-0 inline-flex items-center justify-center bg-background-light dark:bg-background-dark text-secondary-light dark:text-secondary-dark">
      <div className="max-w-4xl w-full flex-row inline-flex justify-between">
        <div>
          <Link href="/">
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <path
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="inline-flex items-center justify-between gap-4 md:gap-12">
          <Link
            href="/"
            className={path === '/' ? ACTIVE_LINK : NOT_ACTIVE_LINK}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={path === '/about' ? ACTIVE_LINK : NOT_ACTIVE_LINK}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={path === '/projects' ? ACTIVE_LINK : NOT_ACTIVE_LINK}
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

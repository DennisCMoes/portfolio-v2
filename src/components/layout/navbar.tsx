import Link from 'next/link'
import { useWindowScroll } from '@mantine/hooks'
import { usePathname } from 'next/navigation'

const ACTIVE_LINK = 'font-medium hover:text-primary-dark/75'
const NOT_ACTIVE_LINK = 'text-tertiary hover:text-tertiary/75'

export default function Navbar(): JSX.Element {
  const pathname = usePathname()
  const [scroll] = useWindowScroll()

  /**
   * Check if the current page is the same as the one the user wants to check for.
   *
   * @param {RegExp} regex The pattern we want to check for
   * @returns The class for a active or non active link
   */
  function getLinkClass(regex: RegExp): string {
    const currentRoute = regex.test(pathname)

    const styling = `transition-colors ${
      currentRoute ? ACTIVE_LINK : NOT_ACTIVE_LINK
    }`

    return styling
  }

  return (
    <nav
      className={`w-full py-2 px-4 md:px-0 inline-flex items-center justify-center transition-all duration-300 bg-background-light dark:bg-primary-dark text-primary-dark dark:text-primary-light sticky top-0 z-10 dark:shadow-none ${
        scroll.y > 25 && 'shadow-sm'
      }`}
    >
      <div className="max-w-4xl w-full flex-row inline-flex justify-between">
        <div className="flex flex-row items-center justify-center space-x-1.5">
          <Link href="/">
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black hover:text-black/75 transition-colors"
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
          <Link href="/" className={getLinkClass(/^\/$/gm)}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass(/about/gm)}>
            About
          </Link>
          <Link href="/projects" className={getLinkClass(/.projects/gm)}>
            Projects
          </Link>
        </div>
      </div>
    </nav>
  )
}

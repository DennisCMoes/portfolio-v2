import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], weight: '400' })

// TODO: Find a way to remove the footer on this page
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Coming soon</title>
      </Head>
      <main
        className={`${inter.className} bg-primary-light min-h-screen flex items-center justify-center`}
      >
        <div className="max-w-3xl space-y-2">
          <p className="text-7xl font-semibold">Coming Soon</p>
          <p className="text-2xl">
            From a simple calculator to an full e-learning platform. Soon you
            will be able to view all my projects on this page.
          </p>
          <Link
            href="/"
            className="inline-flex flex-row items-center justify-center bg-secondary-light text-primary-light py-3 px-12 rounded-md"
          >
            <svg
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1"
            >
              <path
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Head back home
          </Link>
        </div>
      </main>
    </>
  )
}

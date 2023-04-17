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
        <meta
          name="description"
          content="The projects page of my personal website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="A list of my projects projects" />
        <meta
          property="og:url"
          content="https://portfolio-v2-bay-chi.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://portfolio-v2-bay-chi.vercel.app/images/pages/projects-page.png"
        />
        <meta property="og:type" content="website" /> {/* Website or article */}
        <meta
          property="og:description"
          content="When finished you can find all my projects on this page"
        />
      </Head>
      <main className={inter.className}>
        <section className="min-h-screen max-w-4xl grid items-center justify-center mx-auto px-4">
          <div className="-mt-48 space-y-4">
            <div>
              <p className="text-7xl font-semibold">Coming Soon</p>
              <p className="text-2xl">
                From a simple calculator to an full e-learning platform. Soon
                you will be able to view all my projects on this page.
              </p>
            </div>
            <Link
              href="/"
              className="flex items-center bg-primary-dark text-primary-light py-4 px-12 md:hover:px-14 transition-all max-w-fit rounded-md"
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
        </section>
      </main>
    </>
  )
}

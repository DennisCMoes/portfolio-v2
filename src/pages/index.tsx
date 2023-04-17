import Head from 'next/head'
import Link from 'next/link'

import { Inter } from 'next/font/google'
import { useRef } from 'react'

import WorkExperience from '@/components/ui/work-experience'
import WorkExperienceList from '@/data/work.json'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function Home() {
  const secondSection = useRef<HTMLElement>(null)

  function scrollToSecondSection() {
    // Get the scrollable position of the second section and add a negative offset
    const positionY =
      secondSection.current!.getBoundingClientRect().top + window.screenY - 100
    // Scroll to said position
    window.scrollTo({ top: positionY, behavior: 'smooth' })
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="The index page of my personal website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Personal website of Dennis Moes" />
        <meta property="og:url" content="https://dennismoes.com/" />
        <meta
          property="og:image"
          content="https://dennismoes.com/images/pages/index-page.png"
        />
        <meta property="og:type" content="website" /> {/* Website or article */}
        <meta
          property="og:description"
          content="This will be the index page to my personal website"
        />
      </Head>
      <main
        className={`${inter.className} bg-background-light text-secondary-light dark:bg-background-dark dark:text-secondary-dark`}
      >
        <section
          id="banner"
          className="min-h-screen max-w-4xl grid items-center justify-center mx-auto space-y-64 px-4"
        >
          <div className="-mt-48 space-y-4">
            <div>
              <p className="text-xl text-tertiary">Hi, my name is</p>
              <p className="text-7xl font-semibold">Dennis Moes</p>
              <p className="text-5xl">And I build things</p>
            </div>
            <p className="text-xl">
              I&apos;m a student software engineer learning to make fancy
              computer applications in Amsterdam. I spend most of my time
              building cool things (and sometimes making them look pretty too).
            </p>
            {/* TODO: Change the hover animations so that it will flow out of the other side */}
            <div className="flex flex-row gap-2">
              <button
                onClick={() => scrollToSecondSection()}
                className="flex items-center bg-secondary-light text-primary-light p-4 transition-all md:hover:px-6 max-w-fit rounded-md"
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <Link
                href="/about"
                className="flex items-center bg-secondary-light text-primary-light py-4 px-12 md:hover:px-14 transition-all max-w-fit rounded-md"
              >
                Read my bio
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="work-experience"
          ref={secondSection}
          className="min-h-screen max-w-4xl mb-32 mx-auto space-y-12 text-2xl md:text-2xl px-4"
        >
          <div>
            <p>Work experience</p>
            <p className="text-base">
              From working as a cashier to co-founding, this is my range of work
              experience.
            </p>
          </div>
          <div className="inline-flex flex-col w-full space-y-8">
            {WorkExperienceList.map((work: any, index: number) => (
              <WorkExperience key={index} {...work} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

'use client'
import { useRef } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import WorkExperience from '@/components/ui/work-experience'
import { WorkExperienceProps } from '@/types/props'
import SocialBtn from '@/app/socialBtn'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function HomePage({
  WorkExperienceList,
}: {
  WorkExperienceList: WorkExperienceProps[]
}) {
  const secondSection = useRef<HTMLElement>(null)

  function scrollToSecondSection() {
    // Get the scrollable position of the second section and add a negative offset
    const positionY =
      secondSection.current!.getBoundingClientRect().top + window.screenY - 100

    // Scroll to said position
    window.scrollTo({ top: positionY, behavior: 'smooth' })
  }

  return (
    <main className={inter.className}>
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
            I&apos;m a student software engineer learning to make fancy computer
            applications in Amsterdam. I spend most of my time building cool
            things (and sometimes making them look pretty too).
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            <div
              className="cursor-pointer"
              onClick={() => scrollToSecondSection()}
            >
              <SocialBtn label="Work">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 9l6 6l6 -6"></path>
              </SocialBtn>
            </div>
            <Link
              href="https://linkedin.com/in/dennismoes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialBtn label="LinkedIn">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </SocialBtn>
            </Link>
            <Link
              href="https://github.com/kingdennis-crypto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialBtn label="GitHub">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </SocialBtn>
            </Link>
            {/* <SocialBtn label="Projects">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
              <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
              <path d="M9 8h6"></path>
            </SocialBtn>
            <Link href="/about">
              <SocialBtn label="Bio">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 4h-2l-3 10"></path>
                <path d="M16 4h2l3 10"></path>
                <path d="M10 16l4 0"></path>
                <path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"></path>
                <path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"></path>
              </SocialBtn>
            </Link> */}

            {/* <button
              onClick={() => scrollToSecondSection()}
              className="flex items-center bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark p-4 transition-all md:hover:px-6 max-w-fit rounded-md"
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
              className="flex items-center bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark py-4 px-12 md:hover:px-14 transition-all max-w-fit rounded-md"
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
            </Link> */}
          </div>
        </div>
      </section>
      <section
        id="work-experience"
        ref={secondSection}
        className="min-h-screen max-w-4xl pb-32 mx-auto space-y-12 text-2xl md:text-2xl px-4"
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
  )
}

import { Inter } from 'next/font/google'
import Head from 'next/head'

import Project from '@/data/project.json'
import Image from 'next/image'
import ContentSection from '@/components/blog/content-section'
import moment from 'moment'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function ProjectDetail() {
  function getTimeDisplay(): string {
    // Nov 21, 2023
    return moment(Project.created).format('MMMM d, YYYY')
  }

  return (
    <>
      <Head>
        <title>{Project.title}</title>
        <meta
          name="description"
          content="The index page of my personal website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={Project.title} />
        <meta property="og:url" content="https://dennismoes.com/" />
        <meta property="og:image" content={Project.banner.href} />
        <meta property="og:type" content="article" /> {/* Website or article */}
        <meta property="og:description" content={Project.title} />
      </Head>
      <main className={`${inter.className} min-h-screen px-4 py-12 md:py-32`}>
        <section className="max-w-4xl mx-auto space-y-8 text-2xl">
          <div>
            <p className="text-4xl font-medium">{Project.title}</p>
            <p>{getTimeDisplay()}</p>
            <div className="flex flex-row gap-2 text-base text-tertiary">
              {Project.tags.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <Link
              href="https://github.com"
              className="flex items-center bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark py-2 px-12 md:hover:px-14 transition-all max-w-fit rounded-md text-lg mt-4"
              target="_blank"
              rel="noopener primaryerrer"
            >
              Repository
            </Link>
          </div>
          <div>
            <div className="relative w-full inline-flex items-center justify-center aspect-video rounded-xl overflow-hidden">
              <Image
                src={Project.banner.href}
                alt={Project.banner.alt}
                sizes="100%"
                style={{ objectFit: 'cover' }}
                fill
              />
            </div>
            <small className="block text-tertiary leading-tight">
              {Project.banner.alt}
            </small>
          </div>
          {Project.sections.map((item, index) => (
            <ContentSection key={index} {...item} />
          ))}
        </section>
      </main>
    </>
  )
}

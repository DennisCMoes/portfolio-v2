import { Inter } from 'next/font/google'
import Head from 'next/head'

import Project from '@/data/project.json'
import Image from 'next/image'
import ContentSection from '@/components/blog/content-section'
import moment from 'moment'

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
      </Head>
      <main className={`${inter.className} min-h-screen px-4 py-12 md:py-32`}>
        <section className="max-w-4xl mx-auto space-y-8 text-2xl">
          <div>
            <p className="text-4xl font-medium">{Project.title}</p>
            <p>{getTimeDisplay()}</p>
            <div className="flex flex-row gap-4 text-lg">
              {Project.tags.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
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

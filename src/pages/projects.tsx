import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

import ProjectData from '@/data/projects.json'
import ProjectCard from '@/components/ui/project-card'

const inter = Inter({ subsets: ['latin'], weight: '400' })

// TODO: Find a way to remove the footer on this page
export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Coming soon</title>
      </Head>
      <main
        className={`${inter.className} bg-background-light text-secondary-light dark:bg-background-dark dark:text-secondary-dark min-h-screen px-4 py-12 md:py-32`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {ProjectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </>
  )
}

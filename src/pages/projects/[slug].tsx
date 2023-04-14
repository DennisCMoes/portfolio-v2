import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

import ProjectData from '@/data/projects.json'
import { useRouter } from 'next/router'
import ElongatedImage from '@/components/ui/elongated-image'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function ProjectDetail() {
  const router = useRouter()
  const [project, setProject] = useState<any>(null)

  useEffect(() => {
    setProject(
      ProjectData.find((item: any) => item.slug === router.query.slug)!
    )
  }, [router.query.slug])

  return (
    <>
      <Head>
        <title>{project ? project.title : 'Project'}</title>
      </Head>
      <main
        className={`${inter.className} bg-background-light text-secondary-light dark:bg-background-dark dark:text-secondary-dark min-h-screen px-4 py-12 md:py-32`}
      >
        <section className="max-w-4xl mx-auto space-y-12 text-2xl md:text-2xl">
          {!project ? (
            <div>
              <p>LOADING...</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-5xl">{project.title}</p>
                <div className="flex flex-row gap-4 text-lg">
                  {project.tags.map((tag: any, index: any) => (
                    <p key={index}>{tag}</p>
                  ))}
                </div>
              </div>
              <ElongatedImage image={project.banner} />
              <div className="space-y-4">
                {project.content.map((item: any, index: number) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  )
}

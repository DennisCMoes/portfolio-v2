import { Metadata } from 'next'
import { getAllProjects } from '@/utils/api'
import Link from 'next/link'
import ProjectCard from '@/app/projects/card'
import { ProjectMetaData } from '@/types/props'

export const metadata: Metadata = {
  metadataBase: new URL('https://dennismoes.com'),
  title: 'Projects',
  description: 'A list of my projects',
  openGraph: {
    type: 'website',
    url: '/',
    images: [{ url: '/images/pages/projects-page.png' }],
    description:
      'When finished all of my projects with description will be displayed here',
  },
}

async function fetchProjects(): Promise<ProjectMetaData[]> {
  const data: ProjectMetaData[] = (await getAllProjects()) as ProjectMetaData[]
  return data
}

export default async function Projects() {
  const projects: ProjectMetaData[] = await fetchProjects()

  return (
    <div className="max-w-6xl mx-auto py-12">
      <p>PROJECTS</p>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project: ProjectMetaData, index: number) => (
          // <Link
          //   href={`/projects/${project.slug}`}
          //   key={index}
          //   className="bg-red-200 p-4"
          // >
          //   <p>{project.title}</p>
          // </Link>
          <ProjectCard key={index} project={project} />
          // <p>{JSON.stringify(project)}</p>
        ))}
        <Link href={`/projects/2`} className="bg-red-200 p-4">
          <p>Wrong page</p>
        </Link>
      </div>
    </div>
  )
}

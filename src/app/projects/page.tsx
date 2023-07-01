import ProjectCard from '@/app/projects/card'

import { Metadata } from 'next'
import { getAllProjectData } from '@/utils/api'
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
  return await getAllProjectData()
}

export default async function Projects() {
  const projects: ProjectMetaData[] = await fetchProjects()

  return (
    // TODO: Add mobile and large desktop support
    <div className="max-w-6xl mx-auto py-12 px-4">
      <p className={`text-4xl font-semibold mb-4`}>Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {projects.map((project: ProjectMetaData, index: number) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

import ProjectCard from '@/components/project'

import { Project } from '@/types'
import { getAllProjects } from '@/utils/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DM | Projects',
  description: 'A mix of code projects',
  openGraph: {
    title: 'DM | Projects',
    type: 'website',
    url: 'https://dennismoes.com/projects',
    images: {
      url: '/open-graph.jpg',
      width: 1080,
      height: 1080,
    },
  },
}

export default async function ProjectList() {
  const projects: Project[] = await getAllProjects()

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-12 px-4 md:px-0">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  )
}

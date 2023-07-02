import ProjectsPage from '@/components/staticPages/projects-page'

import { Metadata } from 'next'
import { getAllProjectData } from '@/utils/api'
import { ProjectMetaData } from '@/types/props'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A list of my projects',
  openGraph: {
    type: 'website',
    url: 'https://dennismoes.com/',
    images: [{ url: 'https://dennismoes.com/images/pages/projects-page.png' }],
    description:
      'When finished all of my projects with description will be displayed here',
  },
}

async function fetchProjects(): Promise<ProjectMetaData[]> {
  return await getAllProjectData()
}

export default async function Projects() {
  const projects: ProjectMetaData[] = await fetchProjects()

  return <ProjectsPage projects={projects} />
}

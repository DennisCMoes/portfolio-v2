import { Metadata } from 'next'
import { getAllProjects } from '@/utils/api'
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

  const sortArray = (a: any, b: any) => {
    return new Date(a.date).valueOf() - new Date(b.date).valueOf()
  }

  return (
    // TODO: Add mobile and large desktop support
    <div className="max-w-6xl mx-auto py-12 px-4">
      <p className="text-4xl font-semibold mb-4">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {projects
          .sort(sortArray)
          .map((project: ProjectMetaData, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  )
}

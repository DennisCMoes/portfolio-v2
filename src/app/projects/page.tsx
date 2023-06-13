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

  // TODO: Fix the sorting
  const sortArray = (a: any, b: any) => {
    return new Date(a.date).valueOf() - new Date(b.date).valueOf()
  }

  const divideArray = (index: number, arrayIndex: number) => {
    switch (arrayIndex) {
      case 0:
        return index % 3 === 0
      case 1:
        return (index + 1) % 3 === 0
      case 2:
        return (index + 2) % 3 === 0
      default:
        return false
    }
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <p className="text-4xl font-semibold mb-4">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4">
          {/* <ProjectCard
            project={{
              coverImage: '',
              date: '',
              description: 'This is an intentional broken link',
              repository: '',
              slug: '2',
              technologies: [],
              title: 'Wrong page',
            }}
          /> */}
          {projects
            .sort(sortArray)
            .filter((_, index) => divideArray(index, 0))
            .map((project: ProjectMetaData, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        <div className="flex flex-col gap-4">
          {projects
            .sort(sortArray)
            .filter((_, index) => divideArray(index, 1))
            .map((project: ProjectMetaData, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        <div className="flex flex-col gap-4">
          {projects
            .sort(sortArray)
            .filter((_, index) => divideArray(index, 2))
            .map((project: ProjectMetaData, index: number) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  )
}

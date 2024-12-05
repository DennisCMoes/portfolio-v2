import ProjectCard from '@/components/project'
import { Project } from '@/types'
import { getAllProjects } from '@/utils/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function ProjectList() {
  const projects: Project[] = await getAllProjects()

  return (
    <div className="mx:px-0 mx-auto flex max-w-2xl flex-col gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  )
}

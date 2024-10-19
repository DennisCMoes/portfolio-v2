import ProjectCard from '@/components/project'
import { Project } from '@/types'
import { getAllProjects } from '@/utils/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function ProjectList() {
  const projects: Project[] = await getAllProjects(true)

  return (
    <div className="mx:px-0 mx-auto grid max-w-2xl auto-rows-[22rem] grid-cols-1 gap-4 px-2 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  )
}

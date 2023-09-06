'use client'

import ProjectCard from '@/components/ui/cards/project-card'
import { ProjectMetaData } from '@/types/props'

type Props = {
  projects: ProjectMetaData[]
}

export default function ProjectsPage({ projects }: Props) {
  return (
    <div className="max-w-6xl mx-auto">
      <p className="text-4xl font-semibold mb-4">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {projects.map((project: ProjectMetaData, index: number) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

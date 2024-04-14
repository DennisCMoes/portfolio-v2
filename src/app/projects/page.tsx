import { getAllProjects } from '@/posts'
import { AllProjectsReturn, ProjectMetadata, ProjectObject } from '@/types'

export default async function AllProjectsPage() {
  const projects: AllProjectsReturn[] = await getAllProjects()

  return (
    <div>
      {projects.map((project: AllProjectsReturn) => (
        <a key={project.slug} href={`/projects/${project.slug}`}>
          <p>{project.slug}</p>
          <p>{JSON.stringify(project.metadata)}</p>
        </a>
      ))}
      <p>Projects</p>
    </div>
  )
}

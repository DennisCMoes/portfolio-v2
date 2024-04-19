import ProjectCard from '@/components/cards/projectCard'
import LayoutContainer from '@/components/layout/container'
import SectionTitle from '@/components/sectionTitle'
import { getAllProjects } from '@/posts'
import { AllProjectsReturn } from '@/types'

export default async function AllProjectsPage() {
  const projects: AllProjectsReturn[] = await getAllProjects()

  return (
    <LayoutContainer size="m" classname="pt-16">
      <SectionTitle label="Projects" />
      <div className="grid grid-cols-2 gap-1">
        {projects.map((project: AllProjectsReturn) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </LayoutContainer>
  )
}

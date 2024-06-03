import ProjectCard from '@/components/cards/projectCard'
import LayoutContainer from '@/components/layout/container'
import SectionTitle from '@/components/sectionTitle'
import { getAllProjects } from '@/posts'
import { AllProjectsReturn } from '@/types'
import { Metadata } from 'next'
import ProjectsPagination from './pagination'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function AllProjectsPage() {
  const projects: AllProjectsReturn[] = await getAllProjects()

  return (
    <LayoutContainer size="m">
      <SectionTitle label="Projects" />
      <ProjectsPagination projects={projects}/>
    </LayoutContainer>
  )
}

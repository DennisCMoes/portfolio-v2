import ProjectCard from '@/components/cards/projectCard'
import LayoutContainer from '@/components/layout/container'
import SectionTitle from '@/components/sectionTitle'
import { getAllProjects } from '@/posts'
import { AllProjectsReturn } from '@/types'
import { Metadata } from 'next'
import ProjectsPagination from './pagination'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function AllProjectsPage() {
  const projects: AllProjectsReturn[] = await getAllProjects()

  return (
    <LayoutContainer size="m">
      <Suspense fallback={<Loading />}>
        <ProjectsPagination projects={projects} />
      </Suspense>
    </LayoutContainer>
  )
}

function Loading() {
  return (
    <div>
      <p>Loading...</p>
    </div>
  )
}

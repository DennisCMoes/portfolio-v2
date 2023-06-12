import { Metadata } from 'next'
import ProjectsPage from '../../components/staticPages/projects-page'
import { getAllProjects } from '@/utils/api'
import ProjectCard from '@/components/ui/project-card'
import Link from 'next/link'
import Card from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A list of my projects',
  openGraph: {
    type: 'website',
    url: 'https://dennismoes.com',
    images: [{ url: 'https://dennismoes.com/images/pages/projects-page.png' }],
    description:
      'When finished all of my projects with description will be displayed here',
  },
}

async function fetchProjects() {
  return getAllProjects()
}

export default async function Projects() {
  const projects: any[] = await fetchProjects()

  return (
    <div className="max-w-6xl mx-auto py-12">
      <p>PROJECTS</p>
      {/* <div className="grid grid-cols-2 gap-4 py-12">
        {projects.map((item: any, index: number) => (
          <Card key={index} project={item} />
        ))}
      </div> */}
    </div>
  )
}

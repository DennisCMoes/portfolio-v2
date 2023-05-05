import { Metadata } from 'next'
import ProjectsPage from '../../components/staticPages/projects-page'

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

export default function Projects() {
  return <ProjectsPage />
}

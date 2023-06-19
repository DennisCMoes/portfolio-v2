import { Metadata } from 'next'
import AboutPage from '@/components/staticPages/about-page'

import ProjectData from '@/data/projects.json'

export const metadata: Metadata = {
  title: 'About',
  description: 'The about page of my personal website',
  openGraph: {
    type: 'website',
    title: 'About page',
    url: 'https://dennismoes.com/about',
    images: [{ url: 'https://dennismoes.com/images/pages/about-page.png' }],
    description: 'This is the about page of my personal website',
  },
}

async function getHighlighted() {
  return ProjectData
}

export default async function About() {
  const highlightedProjects = await getHighlighted()

  return <AboutPage highlightedProjects={highlightedProjects} />
}

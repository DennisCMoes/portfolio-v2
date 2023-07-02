import { Metadata } from 'next'
import AboutPage from '@/components/staticPages/about-page'

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

export default async function About() {
  return <AboutPage />
}

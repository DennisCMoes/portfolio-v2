import { Metadata } from 'next'
import WorkExperienceList from '@/data/work.json'
import HomePage from '@/components/staticPages/home-page'

export const metadata: Metadata = {
  title: 'Home',
  description: 'The index page of my personal website',
  openGraph: {
    type: 'website',
    title: 'Landing page of portfolio',
    url: 'https://dennismoes.com',
    images: [{ url: 'https://dennismoes.com/images/pages/index-page.png' }],
    description: 'This will be the index page to my portfolio',
  },
}

export default function Home() {
  return <HomePage WorkExperienceList={WorkExperienceList} />
}

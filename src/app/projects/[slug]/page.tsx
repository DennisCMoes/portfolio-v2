import path from 'path'
import matter from 'gray-matter'
import { Metadata, ResolvingMetadata } from 'next'
import ProjectDetailPage from '@/components/staticPages/project-detail-page'
import { getAllProjects, getProjectBySlug } from '@/utils/api'

type Props = {
  params: { slug: string }
}

// https://dribbble.com/shots/21187320-Editorial-themes
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const markdown = await getProjectBySlug(params.slug)

  return {
    title: markdown.data.title,
    description: 'Project detail page',
  }
}

async function fetchData() {
  getAllProjects(false)

  const dir = path.resolve('./src/data/projects')
  const markdownPath = path.join(dir, 'project1.md')

  const data = matter.read(markdownPath)

  return data
}

export default async function ProjectDetail({ params }: any) {
  const detail = await getProjectBySlug(params.slug)

  return (
    <div>
      <ProjectDetailPage data={detail.data} content={detail.content} />
    </div>
  )
}

import ProjectDetailPage from '@/components/staticPages/project-detail-page'

import { Metadata } from 'next'
import { getProject } from '@/utils/api'
import { notFound } from 'next/navigation'
import { FullProject, ProjectDetailPageParams as Props } from '@/types/props'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: FullProject | undefined = await getData(params.slug)

  return {
    title: post?.data.title || 'Project not found',
    description: post?.data.description || 'This project was not found',
  }
}

async function getData(slug: string): Promise<FullProject | undefined> {
  try {
    return await getProject(slug)
  } catch (error) {
    return undefined
  }
}

export default async function ProjectDetail({ params }: Props) {
  const detail = await getData(params.slug)

  if (!detail) {
    notFound()
  }

  return (
    <div>
      <ProjectDetailPage data={detail.data} content={detail.content} />
    </div>
  )
}

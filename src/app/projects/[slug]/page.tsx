import { Metadata } from 'next'
import ProjectDetailPage from '@/components/staticPages/project-detail-page'
import { getProjectBySlug } from '@/utils/api'
import { notFound } from 'next/navigation'
import { FullProject, ProjectDetailPageParams as Props } from '@/types/props'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: any = await getData(params.slug)

  return {
    title: post?.data?.title || 'Project not found',
    description: post?.data?.description || 'This project was not found',
  }
}

async function getData(slug: string) {
  try {
    const post = await getProjectBySlug(slug)
    return post
  } catch (error) {
    return undefined
  }
}

export default async function ProjectDetail({ params }: any) {
  const detail = (await getData(params.slug)) as FullProject

  if (!detail) {
    notFound()
  }

  return (
    <div>
      <ProjectDetailPage data={detail!.data} content={detail!.content} />
    </div>
  )
}

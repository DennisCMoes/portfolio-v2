import ProjectDetailPage from '@/components/staticPages/project-detail-page'

import { Metadata } from 'next'
import { getProject } from '@/utils/api'
import { notFound } from 'next/navigation'
import { FullProject, ProjectDetailPageParams as Props } from '@/types/props'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post: FullProject | undefined = await getData(params.slug)

  const title = post?.data.title || "Oh no... We couldn't find this project"
  const description =
    post?.data.description ||
    "We searched high and low for this project but we just couldn't find what you were looking for."
  const tags = post?.data.technologies || []

  return {
    title: title,
    description: description,
    openGraph: {
      type: 'article',
      title: title,
      url: `/projects/${post?.data.slug}`,
      images: [{ url: `/projects/${post?.data.coverImage}` }],
      description: description,
      tags: tags,
    },
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

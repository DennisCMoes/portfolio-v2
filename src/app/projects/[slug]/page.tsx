import { getProjectBySlug } from '@/posts'

type Params = {
  params: {
    slug: string
  }
}

export default async function ProjectDetailPage({ params }: Params) {
  const project = await getProjectBySlug(params.slug)

  return (
    <div>
      <p>Hello!</p>
      <p>{project?.metadata.title}</p>
      <div>{project?.content}</div>
    </div>
  )
}

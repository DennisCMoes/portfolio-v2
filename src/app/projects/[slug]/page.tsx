// import '../../../styles/code-highlight/github-dark.css'
import 'react-syntax-highlighter/dist/esm/styles/prism/darcula'

import { getProjectBySlug } from '@/posts'
import ImageComponent from '@/components/ImageComponent'
import LayoutContainer from '@/components/layout/Container'

type Params = {
  params: {
    slug: string
  }
}

export default async function ProjectDetailPage({ params }: Params) {
  const project = await getProjectBySlug(params.slug)

  const getCoverImageUrl = () => `/images/posts/${params.slug}/cover.jpg`

  return (
    <div>
      <ImageComponent url={getCoverImageUrl()} />
      <LayoutContainer size="m">
        <h1>{project?.metadata.title}</h1>
        <div>{project?.content}</div>
      </LayoutContainer>
    </div>
  )
}

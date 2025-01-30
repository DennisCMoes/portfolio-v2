import type { MDXComponents } from 'mdx/types'
import type { Project } from '@/types'

import { MDXRemote } from 'next-mdx-remote/rsc'

import VideoComponent from '@/components/postPage/VideoComponent'
import ImageComponent from '@/components/full-width-image'
import InlineCodeComponent from '@/components/postPage/InlineCodeComponent'
import CodeBlockComponent from '@/components/postPage/CodeBlockComponent'

type Props = {
  project: Project
}

const components: MDXComponents = {
  ImageComponent,
  VideoComponent,
  InlineCodeComponent,
  CodeBlockComponent,
  h1: ({ children }) => <h1 className="mb-5 mt-8 text-3xl">{children}</h1>,
  h2: ({ children }) => <h2 className="mb-3 mt-6 text-2xl">{children}</h2>,
  h3: ({ children }) => <h3 className="mb-2 mt-4 text-xl">{children}</h3>,
  ul: ({ children }) => (
    <ul className="flex list-disc flex-col gap-4">{children}</ul>
  ),
}

export default function MDXDisplayer({ project }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <MDXRemote source={project.content} components={components} />
    </div>
  )
}

'use client'

import type { MDXComponents } from 'mdx/types'
import type { Project } from '@/types'

import { MDXRemote } from 'next-mdx-remote'

import VideoComponent from '@/components/postPage/VideoComponent'
import ImageComponent from '@/components/full-width-image'
import InlineCodeComponent from './postPage/InlineCodeComponent'

type Props = {
  project: Project
}

const components: MDXComponents = {
  ImageComponent,
  VideoComponent,
  InlineCodeComponent,
  h1: ({ children }) => <h1 className="text-3xl">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl">{children}</h3>,
}

export default function MDXDisplayer({ project }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <MDXRemote {...project.content} components={components} />
    </div>
  )
}

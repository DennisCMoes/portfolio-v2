'use client'

import ImageComponent from '@/components/ImageComponent'
import { CustomHeader } from '@/components/posts/customHeader'

import axios from 'axios'
import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useEffect, useState } from 'react'

type Params = {
  params: {
    slug: string
  }
}

const components: MDXComponents = {
  ImageComponent,
  h1: ({ children }) => <CustomHeader level={1}>{children}</CustomHeader>,
  h2: ({ children }) => <CustomHeader level={2}>{children}</CustomHeader>,
  h3: ({ children }) => <CustomHeader level={3}>{children}</CustomHeader>,
}

export default function ProjectDetailPage({ params }: Params) {
  const [post, setPost] = useState<MDXRemoteSerializeResult | null>(null)

  useEffect(() => {
    if (post != null) return

    axios
      .get(`http://localhost:3000/projects/api/${params.slug}`)
      .then((res) => {
        console.log(res)
        setPost(res.data.content)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [post])

  const getCoverImageUrl = () => `/images/posts/${params.slug}/cover.jpg`

  return (
    <div>
      <ImageComponent url={getCoverImageUrl()} />
      {post && <MDXRemote {...post} components={components} />}
      {/* <LayoutContainer size="m"> */}
      {/* <h1>{project?.metadata.title}</h1> */}
      {/* <div>{project?.content}</div> */}
      {/* </LayoutContainer> */}
    </div>
  )
}

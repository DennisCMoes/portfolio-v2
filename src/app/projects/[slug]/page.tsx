'use client'

import { ImageComponent } from '@/components/posts/ImageComponent'
import { VideoComponent } from '@/components/posts/videoComponent'

import CustomCodeBlock from '@/components/posts/customCodeBlock'
import CustomText from '@/components/posts/customText'
import LayoutContainer from '@/components/layout/container'

import axios from 'axios'
import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useEffect, useState } from 'react'
import Loading from './loading'

type Params = {
  params: {
    slug: string
  }
}

const components: MDXComponents = {
  ImageComponent,
  VideoComponent,
  p: ({ children }) => <CustomText level={0}>{children}</CustomText>,
  h1: ({ children }) => <CustomText level={1}>{children}</CustomText>,
  h2: ({ children }) => <CustomText level={2}>{children}</CustomText>,
  h3: ({ children }) => <CustomText level={3}>{children}</CustomText>,
  code: ({ className, children }) => (
    <CustomCodeBlock classname={className}>{children}</CustomCodeBlock>
  ),
}

export default function ProjectDetailPage({ params }: Params) {
  const [post, setPost] = useState<MDXRemoteSerializeResult | null>(null)

  useEffect(() => {
    axios
      // TODO: Change the localhost url to a dynamic url
      .get(`http://localhost:3000/projects/api/${params.slug}`)
      .then((res) => {
        console.log(res)
        setPost(res.data.content)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [params.slug])

  const getFormattedDate = (date: string): string => {
    return new Intl.DateTimeFormat('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date))
  }

  const getCoverImageUrl = () => `/posts/${params.slug}/images/cover.jpg`

  return post == null ? (
    <Loading />
  ) : (
    <LayoutContainer size="xl">
      {post && (
        <>
          <CustomText level={1}>{post.frontmatter.title as string}</CustomText>
          <CustomText level={0}>
            {getFormattedDate(post.frontmatter.date as string)}
          </CustomText>
        </>
      )}
      <ImageComponent url={getCoverImageUrl()} />
      <LayoutContainer size="m" classname="mt-4">
        {post && <MDXRemote {...post} components={components} />}
      </LayoutContainer>
    </LayoutContainer>
  )
}

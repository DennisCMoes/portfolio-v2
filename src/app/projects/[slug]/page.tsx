'use client'

import { ImageComponent } from '@/components/posts/ImageComponent'
import { VideoComponent } from '@/components/posts/videoComponent'

import CustomCodeBlock from '@/components/posts/customCodeBlock'
import CustomText from '@/components/posts/customText'
import LayoutContainer from '@/components/layout/container'

import axios, { AxiosError, AxiosResponse } from 'axios'
import { MDXComponents } from 'mdx/types'
import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { useEffect, useState } from 'react'
import Loading from './loading'
import CustomLink from '@/components/customLink'
import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react'
import DynamicIcon, { IconName } from '@/components/dynamicIcon'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
  a: ({ href, children }) => (
    <CustomLink
      label={children as string}
      href={href!}
      icon={<IconArrowUpRight />}
      customClass="underline"
      tabBehaviour="new"
    />
  ),
  code: ({ className, children }) => (
    <CustomCodeBlock classname={className}>{children}</CustomCodeBlock>
  ),
}

export default function ProjectDetailPage({ params }: Params) {
  const [post, setPost] = useState<MDXRemoteSerializeResult | null>(null)
  const [projectNotFound, setNotFound] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get(`/projects/api/${params.slug}`)
      .then((res: AxiosResponse) => {
        setPost(res.data.content)
        setNotFound(false)
      })
      .catch((err: AxiosError) => {
        setNotFound(true)
      })
  }, [params.slug])

  const getFormattedDate = (date: string): string => {
    return new Intl.DateTimeFormat('en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date))
  }

  const getRepoHref = () =>
    `https://github.com/kingdennis-crypto${post?.frontmatter.repository}`

  if (projectNotFound) {
    return notFound()
  } else if (post === null) {
    return <Loading />
  } else {
    return (
      <LayoutContainer size="m" classname="md:pt-8">
        <div className="relative flex aspect-video w-full items-end overflow-hidden rounded-md bg-gradient-to-br from-blue-400 to-blue-700 pl-4 text-white">
          <Link
            href={getRepoHref()}
            className="absolute right-4 top-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="rounded-md bg-blue-100 p-2 hover:bg-blue-200">
              <IconBrandGithub
                stroke={2}
                width={32}
                height={32}
                className="text-black"
                // className="text-blue-100"
              />
            </div>
          </Link>
          <div className="absolute bottom-0 right-0">
            {/* TODO: Make a function to check if isMobile for dynamic size number */}
            <DynamicIcon iconName={post.frontmatter.icon as IconName} />
          </div>
          <div className="z-10 inline-flex flex-col">
            <CustomText level={1}>
              {post.frontmatter.title as string}
            </CustomText>
            <CustomText level={-1}>
              {(post.frontmatter.technologies as string[]).join(', ')}
            </CustomText>
            <CustomText level={0}>
              {getFormattedDate(post.frontmatter.date as string)}
            </CustomText>
          </div>
        </div>
        <section className="mt-4">
          {post && <MDXRemote {...post} components={components} />}
        </section>
      </LayoutContainer>
    )
  }
}

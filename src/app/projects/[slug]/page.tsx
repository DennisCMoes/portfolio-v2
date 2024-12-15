import Link from 'next/link'
import FullWidthImage from '@/components/full-width-image'
import MDXDisplayer from '@/components/mdxDisplayer'

import { Metadata, ResolvingMetadata } from 'next'
import { Project } from '@/types'
import { IconBrandGithub } from '@tabler/icons-react'
import { getProjectBySlug } from '@/utils/api'
import { TablerIcon } from '@/components/tabler-icon'

type Params = Promise<{ slug: string }>

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug
  const project = await getProjectBySlug(slug)

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      type: 'article',
      url: `https://dennismoes.com/projects/${slug}`,
      images: {
        url: `/posts/covers/${slug}.jpg`,
        width: 1080,
        height: 1080,
      },
    },
  }
}

export default async function ProjectDetail({ params }: Props) {
  const slug = (await params).slug
  const project = await getProjectBySlug(slug)

  const formatDate = (date: Date) =>
    date.toLocaleDateString('en', { year: 'numeric', month: 'long' })

  const repoLink = () => 'https://github.com/DennisCMoes/' + project.repository

  return (
    <div className="text-primary-light dark:text-primary-dark flex flex-col gap-8 px-4 font-medium md:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        <div>
          <h1 className="text-center text-6xl font-bold uppercase">
            {project.title}
          </h1>
          <div className="my-4 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <Link
              href={repoLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 rounded-md border-2 border-primary px-2 py-1 text-primary transition-colors duration-300 hover:border-transparent hover:bg-orange hover:text-white"
            >
              <IconBrandGithub size={20} strokeWidth={2.3} />
              <span>Repository</span>
            </Link>
            <p className="text-lg text-secondary">{formatDate(project.date)}</p>
          </div>
        </div>

        <MDXDisplayer project={project} />
        <p>Happy coding! 🎉</p>
      </div>
    </div>
  )
}

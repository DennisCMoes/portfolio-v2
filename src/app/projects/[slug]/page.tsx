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

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = (await params).slug;
  const project = await getProjectBySlug(slug);

  return {
    title: project.title,
  }
}

export default async function ProjectDetail({ params }: Props) {
  const slug = (await params).slug;
  const project = await getProjectBySlug(slug);

  const formatDate = (date: Date) =>
    date.toLocaleDateString('en', { year: 'numeric', month: 'long' })

  return (
    <div className="flex flex-col gap-8 px-4 font-medium text-primary-light dark:text-primary-dark md:px-0">
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <div>
          <h1 className="text-center text-6xl font-bold uppercase">
            {project.title}
          </h1>
          <div className="my-4 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <Link
              href={'https://google.com'}
              target="_blank"
              rel="noopener noreferrer"
            className="text-primary flex flex-row items-center gap-2 rounded-md border-2 hover:border-transparent border-primary px-2 py-1 transition-colors duration-300 hover:bg-orange hover:text-white"
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

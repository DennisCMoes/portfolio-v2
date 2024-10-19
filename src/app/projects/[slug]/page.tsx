import Link from 'next/link'
import FullWidthImage from '@/components/full-width-image'

import { Metadata } from 'next'
import { Project } from '@/types'
import { IconBrandGithub } from '@tabler/icons-react'
import { getProjectBySlug } from '@/utils/api'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  return {
    title: project.title,
  }
}

export default async function ProjectDetail({ params }: Props) {
  const project: Project = await getProjectBySlug(params.slug)

  return (
    <div className="text-primary-light dark:text-primary-dark flex flex-col gap-8 px-4 font-medium md:px-0">
      <FullWidthImage src="/coding.jpg" alt="Coding Image" />
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
              className="flex flex-row items-center gap-2 rounded-md border-2 border-primary px-3 py-1 text-primary transition-colors duration-300 hover:bg-primary hover:text-background"
            >
              <IconBrandGithub size={20} />
              <span>Repository</span>
            </Link>
            <p className="text-lg text-secondary">October 10, 2024</p>
          </div>
        </div>
        <p>Projects page</p>
        <p>
          Lorem ipsum occaecat exercitation dolore sint ut deserunt laboris non
          anim ad, dolore labore fugiat irure. Ex esse magna magna incididunt
          qui consequat proident laboris dolor aliqua do occaecat sint, commodo.
          Nisi officia occaecat ullamco laborum fugiat dolor ut ad enim dolor
          occaecat, voluptate, est cupidatat.
        </p>
        <p>
          Lorem ipsum duis, reprehenderit sunt sunt proident magna dolore ut ut
          in ut in. Tempor dolor culpa proident labore consequat cillum culpa
          dolore minim, tempor excepteur officia. Do ut aliquip commodo
          excepteur voluptate ut in laboris ad nisi, tempor consectetur.
        </p>
        <p>
          Lorem ipsum minim voluptate officia duis velit veniam excepteur sit
          labore esse nisi aliquip duis. Velit dolor ut, laborum velit aute
          tempor, ex consectetur, ullamco elit consectetur proident et. Do non
          dolore in velit, sunt ut, id aliquip mollit, enim laboris ut proident.
        </p>
        <FullWidthImage src="/coding.jpg" alt="Coding" />
        <p>
          Lorem ipsum occaecat exercitation dolore sint ut deserunt laboris non
          anim ad, dolore labore fugiat irure. Ex esse magna magna incididunt
          qui consequat proident laboris dolor aliqua do occaecat sint, commodo.
          Nisi officia occaecat ullamco laborum fugiat dolor ut ad enim dolor
          occaecat, voluptate, est cupidatat.
        </p>
        <p>
          Lorem ipsum duis, reprehenderit sunt sunt proident magna dolore ut ut
          in ut in. Tempor dolor culpa proident labore consequat cillum culpa
          dolore minim, tempor excepteur officia. Do ut aliquip commodo
          excepteur voluptate ut in laboris ad nisi, tempor consectetur.
        </p>
        <p>
          Lorem ipsum minim voluptate officia duis velit veniam excepteur sit
          labore esse nisi aliquip duis. Velit dolor ut, laborum velit aute
          tempor, ex consectetur, ullamco elit consectetur proident et. Do non
          dolore in velit, sunt ut, id aliquip mollit, enim laboris ut proident.
        </p>
        <p>
          Lorem ipsum occaecat exercitation dolore sint ut deserunt laboris non
          anim ad, dolore labore fugiat irure. Ex esse magna magna incididunt
          qui consequat proident laboris dolor aliqua do occaecat sint, commodo.
          Nisi officia occaecat ullamco laborum fugiat dolor ut ad enim dolor
          occaecat, voluptate, est cupidatat.
        </p>
        <p>
          Lorem ipsum duis, reprehenderit sunt sunt proident magna dolore ut ut
          in ut in. Tempor dolor culpa proident labore consequat cillum culpa
          dolore minim, tempor excepteur officia. Do ut aliquip commodo
          excepteur voluptate ut in laboris ad nisi, tempor consectetur.
        </p>
        <p>
          Lorem ipsum minim voluptate officia duis velit veniam excepteur sit
          labore esse nisi aliquip duis. Velit dolor ut, laborum velit aute
          tempor, ex consectetur, ullamco elit consectetur proident et. Do non
          dolore in velit, sunt ut, id aliquip mollit, enim laboris ut proident.
        </p>
      </div>
    </div>
  )
}

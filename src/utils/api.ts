import path from 'path'

import { promises as fs } from 'fs'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'

import { Project } from '@/types'

const postsDir = path.resolve('src/posts')

export async function getAllProjects(): Promise<Project[]> {
  // Read all filenames from the directory
  const filenames: string[] = await fs.readdir(postsDir)

  return (
    await Promise.all(
      filenames.map(async (name): Promise<Project> => {
        const fileContent = await fs.readFile(path.join(postsDir, name), {
          encoding: 'utf-8',
        })

        const serializedContent = await serialize(fileContent, {
          parseFrontmatter: true,
        })

        return {
          ...serializedContent.frontmatter,
          slug: name.replaceAll(' ', '-').replace('.mdx', ''),
        } as Project
      })
    )
  ).sort((a, b) => b.date.valueOf() - a.date.valueOf())
}

export async function getAllFeaturedProjects(): Promise<Project[]> {
  return (await getAllProjects()).filter((project) => project.isFeatured)
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const fileContent = await fs.readFile(path.join(postsDir, slug + '.mdx'), {
    encoding: 'utf-8',
  })

  const serializedContent = await serialize(fileContent, {
    parseFrontmatter: true,
  })

  return {
    ...serializedContent.frontmatter,
    slug: slug,
    date: new Date(serializedContent.frontmatter.date as string),
    content: serializedContent as MDXRemoteSerializeResult,
  } as Project
}
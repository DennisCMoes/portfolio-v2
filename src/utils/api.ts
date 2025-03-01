import path from 'path'

import { promises as fs } from 'fs'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'

import { Project } from '@/types'

const postsDir = path.resolve('src/posts')

export async function getAllProjects(): Promise<Project[]> {
  // Read all filenames and their metadata
  const dirEntries = await fs.readdir(postsDir, { withFileTypes: true })

  const filenames: string[] = dirEntries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => entry.name)

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
  ).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
}

export async function getAllFeaturedProjects(): Promise<Project[]> {
  return (await getAllProjects()).filter((project) => project.isFeatured)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fileContent = await fs.readFile(path.join(postsDir, slug + '.mdx'), {
      encoding: 'utf-8',
    })

    const { data: frontmatter, content } = matter(fileContent)

    return {
      ...frontmatter,
      slug: slug,
      date: new Date(frontmatter.date as string),
      content: content,
    } as Project
  } catch (error: any) {
    return null
  }
}

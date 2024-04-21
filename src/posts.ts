import path from 'path'
import { promises as fs } from 'fs'
import { ProjectMetadata, AllProjectsReturn } from './types'
import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'

const postsDir = path.resolve('src/posts')

export async function getAllProjects(): Promise<AllProjectsReturn[]> {
  const filenames = await fs.readdir(postsDir)

  const projects: { slug: string; metadata: any }[] = await Promise.all(
    filenames.map(async (name) => {
      const source = await getProjectBySlug(name)
      return { slug: name, metadata: source.content.frontmatter }
    })
  )

  projects.sort((a: AllProjectsReturn, b: AllProjectsReturn) => {
    return (
      new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf()
    )
  })

  return projects
}

export async function getFeaturedProjects(): Promise<AllProjectsReturn[]> {
  return (await getAllProjects()).filter(
    (project) => project.metadata.isFeatured
  )
}

export async function getProjectBySlug(slug: string): Promise<{
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >
  metadata: ProjectMetadata
}> {
  try {
    const contentPath = path.join(postsDir, slug, 'post.mdx')

    const { metadata }: { metadata: ProjectMetadata } = await import(
      `./posts/${slug}/post.mdx`
    )

    const postFile = await fs.readFile(contentPath, { encoding: 'utf-8' })
    const content = await serialize(postFile, { parseFrontmatter: true })

    return { content, metadata }
  } catch (ex) {
    throw new Error('Project not found')
  }
}

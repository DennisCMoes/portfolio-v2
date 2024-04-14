import path from 'path'
import { promises as fs } from 'fs'
import { ProjectMetadata, ProjectObject, AllProjectsReturn } from './types'
import { compileMDX } from 'next-mdx-remote/rsc'

// Components that get imported in any of the MDX files
const components = {}
const postsDir = path.resolve('src/posts')

export async function getAllProjects(): Promise<AllProjectsReturn[]> {
  const filenames = await fs.readdir(postsDir)

  const projects: { slug: string; metadata: ProjectMetadata }[] =
    await Promise.all(
      filenames.map(async (name) => {
        const { metadata } = await import(`./posts/${name}/post.mdx`)
        return { slug: name, metadata: { ...metadata } }
      })
    )

  projects.sort((a: AllProjectsReturn, b: AllProjectsReturn) => {
    return (
      new Date(b.metadata.date).valueOf() - new Date(a.metadata.date).valueOf()
    )
  })

  return projects
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectObject | null> {
  const contentPath = path.join(postsDir, slug, 'post.mdx')

  const { metadata }: { metadata: ProjectMetadata } = await import(
    `./posts/${slug}/post.mdx`
  )

  const content = await compileMDX({
    source: await fs.readFile(contentPath, { encoding: 'utf-8' }),
    options: { parseFrontmatter: true },
    components,
  })

  return { content: content.content, metadata }
}

import path from 'path'
import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import { FullProject, ProjectMetaData } from '@/types/props'

const POST_DIRECTORY: string = path.resolve('./posts')

// TODO: Add function to remove element from object so that it doesn't over share information
export async function getAllProjects(
  withContent = false
): Promise<ProjectMetaData[] | FullProject[]> {
  const posts = fs.readdirSync(POST_DIRECTORY)
  const readPosts: GrayMatterFile<string>[] = []

  posts.forEach((post) => {
    const content = matter.read(path.join(POST_DIRECTORY, post))

    readPosts.push(content)
  })

  readPosts.sort((a: any, b: any) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf()
  })

  return withContent
    ? (readPosts as FullProject[])
    : (readPosts.map((post) => post.data) as ProjectMetaData[])
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectMetaData | FullProject> {
  try {
    const content = matter.read(
      path.join(POST_DIRECTORY, `${slug}.md`)
    ) as FullProject

    return content
  } catch (error: any) {
    throw Error(error.message)
  }
}

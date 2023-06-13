import path from 'path'
import fs from 'fs'
import matter, { GrayMatterFile } from 'gray-matter'
import { ProjectData } from '@/types/props'

const POST_DIRECTORY: string = path.resolve('./posts')

// TODO: Add function to remove element from object so that it doesn't over share information
export async function getAllProjects(
  withContent = false
): Promise<ProjectData[]> {
  const posts = fs.readdirSync(POST_DIRECTORY)
  const readPosts: any[] = []

  posts.forEach((post) => {
    const content = matter.read(path.join(POST_DIRECTORY, post))

    readPosts.push(withContent ? content : content.data)
  })

  return readPosts.sort((a: any, b: any) => {
    return new Date(b.date).valueOf() - new Date(a.date).valueOf()
  })
}

export async function getProjectBySlug(slug: string): Promise<ProjectData> {
  try {
    const content = matter.read(
      path.join(POST_DIRECTORY, `${slug}.md`)
    ) as ProjectData

    return content
  } catch (error: any) {
    throw Error(error.message)
  }
}

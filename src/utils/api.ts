import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const POST_DIRECTORY = path.resolve('./posts')

// TODO: Add function to remove element from object so that it doesn't over share information
export async function getAllProjects(withContent = false) {
  const posts = fs.readdirSync(POST_DIRECTORY)
  const readPosts: any[] = []

  posts.forEach((post) => {
    const content = matter.read(path.join(POST_DIRECTORY, post))

    readPosts.push(withContent ? content : content.data)
  })

  return readPosts
}

export async function getProjectBySlug(slug: string) {
  const content = matter.read(path.join(POST_DIRECTORY, `${slug}.md`))

  return content
}

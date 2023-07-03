import path from 'path'

import { promises as fs } from 'fs'
import matter from 'gray-matter'
import { FullProject, ProjectMetaData } from '@/types/props'

const POST_DIRECTORY: string = path.resolve('./posts')
const ENVIRONMENT = process.env.NODE_ENV

/**
 * Returns the markdown file with the given slug of the project.
 *
 * @param {string} slug - The slug of the project to find.
 * @returns {Promise<FullProject>} - The full converted markdown file.
 */
export async function getProject(slug: string): Promise<FullProject> {
  // Checks if the slug ends with .md
  const hasFileType = slug.endsWith('.md')

  try {
    const content: string = await fs.readFile(
      path.join(POST_DIRECTORY, hasFileType ? slug : `${slug}.md`),
      'utf-8'
    )

    // Read the raw file and convert it to markdown with header data
    return matter(content) as FullProject
  } catch (error: any) {
    throw new Error(`Error while retrieving project: ${error.message}`)
  }
  // Reads the contents of the file and converts it to utf-8
}

/**
 * Retrieves all the markdown projects.
 *
 * @returns {Promise<FullProject[]>} - An array of all projects.
 */
export async function getAllProjects(): Promise<FullProject[]> {
  const excludeDrafts = ENVIRONMENT === 'production'

  try {
    // Read the names of all files in the POST_DIRECTORY
    const posts: string[] = await fs.readdir(POST_DIRECTORY)

    // Creates an array of promises for each project
    const projectPromises: Promise<FullProject>[] = posts.map(
      async (_post: string): Promise<FullProject> => await getProject(_post)
    )

    // Awaits all promises to get all projects
    const projects: FullProject[] = await Promise.all(projectPromises)

    // Sort the projects based on the date
    projects.sort((a: FullProject, b: FullProject) => {
      return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
    })

    return excludeDrafts
      ? projects.filter((project: FullProject) => !project.data.draft)
      : projects
  } catch (error: any) {
    throw new Error(`Error while retrieving all the projects: ${error.message}`)
  }
}

/**
 * Retrieves only the metadata for all the projects.
 *
 * @returns {Promise<ProjectMetaData[]>} - An array of the metadata.
 */
export async function getAllProjectData(): Promise<ProjectMetaData[]> {
  try {
    // Retrieves all projects
    const projects: FullProject[] = await getAllProjects()

    // Extract and return project metadata
    return projects.map((item: FullProject) => item.data)
  } catch (error: any) {
    throw new Error(`Error while retrieving project data: ${error.message}`)
  }
}

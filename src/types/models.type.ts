import { GrayMatterFile } from 'gray-matter'

type IdentifiableContent = {
  title: string
  description: string
}

export type WorkExperience = {
  company: string
  start: string
  end: string
  tags: string[]
} & IdentifiableContent

export type ProjectMetaData = {
  slug: string
  coverImage: string
  technologies: string[]
  date: string
  repository: string
  draft: boolean
} & IdentifiableContent

export type FullProject = {
  data: ProjectMetaData
} & GrayMatterFile<string>

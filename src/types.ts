import { GrayMatterFile } from 'gray-matter'

type Prettify<T> = {
  [K in keyof T]: T[K]
}

type Btn = {
  label: string
} & Children

export type Children = {
  children: React.ReactNode
}

export type Link = {
  href?: string
  newTab?: boolean
} & Btn

export type Button = {} & Btn

export type ProjectMetaData = {
  title: string
  description: string
  slug: string
  coverImage: string
  technologies: string[]
  date: string
  repository: string
  draft: boolean
}

export type Project = Prettify<
  {
    data: ProjectMetaData
  } & GrayMatterFile<string>
>

export type DetailPage = {
  params: {
    slug: string
  }
}

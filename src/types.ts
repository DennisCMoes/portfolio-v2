import { CompileMDXResult } from 'next-mdx-remote/rsc'
import { JSXElementConstructor, ReactElement } from 'react'

export type Prettify<T> = {
  [K in keyof T]: T[K]
}

export type ProjectMetadata = {
  title: string
  description: string
  technologies: string[]
  date: string
  repository: string
}

export type ProjectObject = {
  content: ReactElement<any, string | JSXElementConstructor<any>>
  metadata: ProjectMetadata
}

export type AllProjectsReturn = {
  slug: string
  metadata: ProjectMetadata
}

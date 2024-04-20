import { JSXElementConstructor, ReactElement, ReactNode } from 'react'

export type Prettify<T> = {
  [K in keyof T]: T[K]
}

export type ProjectMetadata = {
  title: string
  description: string
  technologies: string[]
  date: string
  repository: string
  isFeatured: boolean
  gradient: string[]
}

export type ProjectObject = {
  content: ReactElement<any, string | JSXElementConstructor<any>>
  metadata: ProjectMetadata
}

export type AllProjectsReturn = {
  slug: string
  metadata: ProjectMetadata
}

export type WorkExperience = {
  startMonth: string
  endMonth: string
  title: string
  company: string
  description: string
}

export type SocialLinkData = {
  label?: string
  href: string
  color: string
  icon: ReactNode
}

export type LinkData = {
  label?: string
  href: string
  icon?: ReactNode
}

export type SvgCircle = {
  size: number
  radius: number
  centerXY: number
  strokeWidth: number
  absolutePosition: string
}
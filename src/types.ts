import { JSXElementConstructor, ReactElement, ReactNode } from 'react'

export type Prettify<T> = {
  [K in keyof T]: T[K]
}

export type ProjectMetadata = {
  title: string
  technologies: string[]
  date: string
  subtitle: string
  repository: string
  isFeatured: boolean
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
  href: string
  label?: string
  icon?: ReactNode
  iconLeftRight?: 'left' | 'right'
  tabBehaviour: 'keep' | 'new'
}

export type SvgCircle = {
  size: number
  radius: number
  centerXY: number
  strokeWidth: number
  absolutePosition: string
}
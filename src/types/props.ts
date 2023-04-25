import { StaticImageData } from 'next/image'

export type WorkExperienceProps = {
  title: string
  description: string
  company: string
  start: string
  end: string
  tags: string[]
}

export type ElongatedImageProps = {
  image: StaticImageData | string
  description?: string
  isFullSize?: boolean
  darkMode?: boolean
}

export type HoverableLinkProps = {
  href: string
  label: string
  newTab?: boolean
  isBold?: boolean
}

export type ProjectCardProps = {
  icon: string
  title: string
  description: string
  href: string
}

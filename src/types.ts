import { IconName } from '@/components/tabler-icon'

export type Project = {
  title: string
  subtitle: string
  slug: string
  date: Date
  content: string
  className?: string
  isFeatured?: boolean
  language: string
  repository: string
  icon: IconName
}

export type WorkExperience = {
  title: string
  subtitle: string
  date: string
}

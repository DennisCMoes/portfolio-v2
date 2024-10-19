import { IconName } from '@/components/tabler-icon'

export type Project = {
  title: string
  subtitle: string
  slug: string
  date: Date
  className?: string
  size?: 'default' | 'small' | 'medium' | 'large'
  isFeatured?: boolean
  icon: IconName
}

export type WorkExperience = {
  title: string
  subtitle: string
  date: string
}

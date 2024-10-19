import { IconName } from '@/components/tabler-icon'

export type Project = {
  title: string
  subtitle: string
  icon: IconName
  slug: string
  className: string
}

export type WorkExperience = {
  title: string
  subtitle: string
  date: string
}

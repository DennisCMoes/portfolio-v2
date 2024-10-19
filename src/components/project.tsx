import Link from 'next/link'
import { IconName, TablerIcon } from './tabler-icon'
import { IconArrowRight } from '@tabler/icons-react'

type Props = {
  title: string
  subtitle: String
  slug: string
  icon: IconName
}

export default function ProjectCard({ title, subtitle, icon, slug }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="project-card bg-card-light dark:bg-card-dark group relative flex flex-col justify-end overflow-hidden rounded-md p-6 transition-colors duration-300"
    >
      <div>
        <TablerIcon
          iconName={icon}
          className="text-primary-light dark:text-primary-dark"
        />
        <h1 className="text-primary-light dark:text-primary-dark text-3xl font-bold">
          {title}
        </h1>
        <h2 className="text-secondary">{subtitle}</h2>
        <div className="flex flex-row gap-1">
          Learn more
          <IconArrowRight />
        </div>
      </div>
    </Link>
  )
}

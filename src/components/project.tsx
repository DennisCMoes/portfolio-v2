import Link from 'next/link'
import { TablerIcon } from './tabler-icon'
import { IconArrowRight } from '@tabler/icons-react'
import cn from 'classnames'
import { Project } from '@/types'

export default function ProjectCard({
  title,
  subtitle,
  icon,
  slug,
  className,
}: Project) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        'project-card bg-card-light dark:bg-card-dark group relative flex flex-col justify-end overflow-hidden rounded-md p-6 transition-colors duration-300 hover:bg-neutral-800/10',
        className
      )}
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

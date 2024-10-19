import Link from 'next/link'
import cn from 'classnames'

import { TablerIcon } from './tabler-icon'
import { IconArrowRight } from '@tabler/icons-react'
import { Project } from '@/types'

export default function ProjectCard({
  title,
  subtitle,
  icon,
  slug,
  className,
  size = 'default',
}: Project) {
  const sizes: Record<NonNullable<Project['size']>, string> = {
    default: 'col-span-1 row-span-1',
    small: 'md:col-span-1',
    medium: 'md:col-span-2',
    large: 'md:col-span-1 md:row-span-2',
  }

  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        'project-card bg-card-light dark:bg-card-dark group relative col-span-1 row-span-1 flex flex-col justify-end overflow-hidden rounded-md p-6 transition-colors duration-300 hover:bg-neutral-800/10',
        sizes[size ?? 'small'],
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
        <div className="text-primary-light dark:text-primary-dark flex flex-row gap-1">
          Learn more
          <IconArrowRight />
        </div>
      </div>
    </Link>
  )
}

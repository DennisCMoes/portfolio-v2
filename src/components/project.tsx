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
}: Project) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={cn(
        'group relative col-span-1 row-span-1 flex flex-row items-center gap-4',
        className
      )}
    >
      {/* <TablerIcon
        iconName={icon}
        className="text-primary-light dark:text-primary-dark"
      /> */}
      <div>
        <h1 className="text-3xl font-bold text-primary-light group-hover:text-orange duration-200 transition-colors">
          {title}
        </h1>
        <h2 className="text-secondary">{subtitle}</h2>
        <div className="flex flex-row gap-1 text-primary-light">
          Learn more
          <IconArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  )
}

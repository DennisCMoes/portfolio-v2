import Link from 'next/link'
import cn from 'classnames'

import { TablerIcon } from './tabler-icon'
import { IconArrowRight } from '@tabler/icons-react'
import { Project } from '@/types'

export default function ProjectCard({
  title,
  subtitle,
  language,
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
      <div>
        <h1 className="text-primary-light text-3xl font-bold transition-colors duration-200 group-hover:text-orange">
          {title}
        </h1>
        <h2>{language}</h2>
        <h2 className="text-secondary">{subtitle}</h2>
        <div className="text-primary-light flex flex-row gap-1 transition-colors duration-200 group-hover:text-orange">
          Learn more
          <IconArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  )
}

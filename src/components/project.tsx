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
      className="group relative overflow-hidden rounded-md bg-card transition-colors duration-300 hover:bg-cardPressed"
    >
      <div className="absolute bottom-4 left-4">
        <TablerIcon iconName={icon} />
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <h2 className="text-secondary">{subtitle}</h2>
        <div className="flex flex-row gap-1">
          Learn more
          <IconArrowRight />
        </div>
      </div>
    </Link>
  )
}

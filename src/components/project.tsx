import Link from 'next/link'
import { IconName, TablerIcon } from './tabler-icon'

type Props = {
  title: string
  subtitle: String
  icon: IconName
}

export default function ProjectCard({ title, subtitle, icon }: Props) {
  return (
    <Link
      href={''}
      className="hover:bg-cardPressed group relative rounded-md bg-card transition-colors duration-300"
    >
      <div className="absolute bottom-4 left-4">
        <TablerIcon iconName={icon} />
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <h2 className="text-secondary">{subtitle}</h2>
      </div>
    </Link>
  )
}

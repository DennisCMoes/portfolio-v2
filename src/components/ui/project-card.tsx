import Link from 'next/link'
import Project from '@/types/Project'

type Props = {
  icon: string
  title: string
  description: string
  slug: string
}

export default function ProjectCard({ icon, title, description, slug }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="cursor-pointer bg-card-primary-light dark:bg-card-primary-dark w-full aspect-square rounded-xl p-6 inline-flex items-start justify-between flex-col md:hover:scale-105 transition-transform"
    >
      {/* TODO: Add darker color that's just darker than the card */}
      <div className="bg-card-secondary-light dark:bg-card-secondary-dark p-4 rounded-md aspect-square text-center">
        <p className="text-5xl">{icon}</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl text-secondary-light dark:text-secondary-dark">
          {title}
        </p>
        <p className="text-2xl md:text-3xl text-tertiary-light dark:text-tertiary-dark">
          {description}
        </p>
      </div>
    </Link>
  )
}

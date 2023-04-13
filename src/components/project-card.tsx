import Link from 'next/link'

type Props = {
  icon: string
  title: string
  description: string
}

export default function ProjectCard({ icon, title, description }: Props) {
  return (
    <Link
      href="/projects"
      className="cursor-pointer bg-primary-light w-full aspect-square rounded-xl p-6 inline-flex items-start justify-between flex-col hover:scale-105 transition-transform"
    >
      <div className="bg-secondary-light p-4 rounded-md aspect-square text-center">
        <p className="text-5xl">{icon}</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl text-secondary-light">{title}</p>
        <p className="text-2xl md:text-3xl text-tertiary-light">
          {description}
        </p>
      </div>
    </Link>
  )
}

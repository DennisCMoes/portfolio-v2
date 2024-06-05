import Link from 'next/link'
import { AllProjectsReturn } from '@/types'

type CardParams = {
  project: AllProjectsReturn
}

export default function FeaturedProjectCard({ project }: CardParams) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative flex flex-row gap-4 rounded-md duration-300">
        <div className="h-16 w-6 rounded-sm bg-blue-500 transition-all group-hover:w-12" />
        <div className="w-full">
          <div className="text-xs text-gray-500">
            <p>{project.metadata.technologies.join(', ')}</p>
          </div>
          <p className="text-xl font-medium">{project.metadata.title}</p>
          <p className="line-clamp-2 text-sm text-gray-500">
            {project.metadata.subtitle}
          </p>
        </div>
      </div>
    </Link>
  )
}

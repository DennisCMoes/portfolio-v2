import { AllProjectsReturn } from '@/types'
import Link from 'next/link'
import { IconArrowRight } from '@tabler/icons-react'

type CardParams = {
  project: AllProjectsReturn
}

export default function FeaturedProjectCard({ project }: CardParams) {
  const getIconUrl = () => `/posts/${project.slug}/images/icon.png`
  const getGradientString = () =>
    project.metadata.gradient
      .map((gradient: string) => '#' + gradient)
      .join(', ')

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative z-0 overflow-hidden rounded-md">
        {/* Content */}
        <div className="featured-projects-card flex cursor-pointer flex-row items-center gap-2 p-4">
          <div
            className="z-20 flex h-16 w-16 items-center justify-center rounded-md"
            style={{
              background: `linear-gradient(to bottom right, ${getGradientString()})`,
            }}
          ></div>
          <div className="z-20 flex flex-col justify-between duration-300 group-hover:text-white group-hover:delay-100">
            <div>
              <p className="text-xl font-medium">{project.metadata.title}</p>
              <p>{project.metadata.description}</p>
            </div>
          </div>
        </div>

        {/* Go to corner */}
        <div className="absolute right-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 transition-all duration-300 group-hover:h-full group-hover:w-full">
          <IconArrowRight
            className="absolute right-1 top-1 z-30 text-white"
            size={24}
          />
        </div>
      </div>
    </Link>
  )
}

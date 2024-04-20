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
      <div className="shadow-as-border group relative flex flex-row gap-4 rounded-md hover:p-4">
        <div className="h-24 w-16 rounded-sm bg-blue-500" />
        <div>
          <div className="text-xs text-gray-500">
            <p>{project.metadata.technologies.join(', ')}</p>
          </div>
          <p className="text-xl font-medium">{project.metadata.title}</p>
          <p className="line-clamp-2 text-sm text-gray-500">
            {project.metadata.description}
          </p>
        </div>
      </div>
    </Link>
  )

  // return (
  //   <Link href={`/projects/${project.slug}`}>
  //     <div className="group relative z-0 overflow-hidden rounded-md">
  //       {/* Content */}
  //       <div className="featured-projects-card flex cursor-pointer flex-row items-center gap-2 p-4">
  //         <div
  //           className="z-20 flex h-16 w-16 items-center justify-center rounded-md"
  //           style={{
  //             background: `linear-gradient(to bottom right, ${getGradientString()})`,
  //           }}
  //         ></div>
  //         <div className="z-20 flex flex-col justify-between duration-300 group-hover:text-white group-hover:delay-100">
  //           <div>
  //             <p className="text-xl font-medium">{project.metadata.title}</p>
  //             <p>{project.metadata.description}</p>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Go to corner */}
  //       <div className="absolute right-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 transition-all duration-700 group-hover:h-full group-hover:w-full group-hover:scale-150">
  //         <IconArrowRight
  //           className="absolute right-1 top-1 z-30 text-white"
  //           size={24}
  //         />
  //       </div>
  //     </div>
  //   </Link>
  // )
}

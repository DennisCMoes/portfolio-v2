import { AllProjectsReturn } from '@/types'
import LinkButton from '../linkButton'
import Link from 'next/link'

type CardParams = {
  project: AllProjectsReturn
}

export default function FeaturedPostCard({ project }: CardParams) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="flex flex-row gap-2 relative group cursor-pointer hover:shadow-md transition-shadow duration-300 rounded-md">
        <div className="flex bg-green-400 w-64 rounded-md aspect-video" />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xl font-medium">{project.metadata.title}</p>
            <p className="text-gray-500">{project.metadata.description}</p>
          </div>
          <LinkButton
            label="Read more"
            destination="https://google.com"
            isLink={false}
            classname="mb-2"
          />
        </div>
      </div>
    </Link>
  )
}

import Image from 'next/image'
import { AllProjectsReturn } from '@/types'
import LinkButton from '../linkButton'
import Link from 'next/link'

type CardParams = {
  project: AllProjectsReturn
}

export default function FeaturedPostCard({ project }: CardParams) {
  const getIconUrl = () => `/posts/${project.slug}/images/icon.png`
  const getGradientString = () =>
    project.metadata.gradient
      .map((gradient: string) => '#' + gradient)
      .join(', ')

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="shadow-border group relative flex cursor-pointer flex-row items-center gap-2 rounded-md">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-md"
          style={{
            background: `linear-gradient(to bottom right, ${getGradientString()})`,
          }}
        ></div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xl font-medium">{project.metadata.title}</p>
            <p>{project.metadata.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

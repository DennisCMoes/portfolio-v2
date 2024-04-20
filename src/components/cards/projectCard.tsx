'use client'

import { AllProjectsReturn } from '@/types'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type CardParams = {
  project: AllProjectsReturn
}

export default function ProjectCard({ project }: CardParams) {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0)

  const descriptionElement = useRef<HTMLParagraphElement>(null)

  const getSlug = () => `/projects/${project.slug}`
  const handleHover = (hovering: boolean) => setIsHovering(hovering)

  useEffect(() => {
    if (!descriptionElement.current) return

    setDescriptionHeight(descriptionElement.current.offsetHeight)
  }, [descriptionElement])

  return (
    <article>
      <Link
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        href={getSlug()}
        className="hoverable-card group relative flex aspect-square flex-col rounded-lg bg-green-300"
      >
        {/* <div className="absolute aspect-square w-full h-full opacity-100">
        </div> */}

        <div className="relative flex h-full w-full flex-col justify-end">
          <div className="p-6">
            <p
              style={{ marginBottom: isHovering ? descriptionHeight : 0 }}
              className="text-4xl transition-all duration-300"
            >
              {project.metadata.title}
            </p>
            <p
              ref={descriptionElement}
              className="absolute bottom-6 left-6 right-6 text-2xl opacity-0 transition-all delay-0 group-hover:opacity-100 group-hover:delay-200"
            >
              {project.metadata.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

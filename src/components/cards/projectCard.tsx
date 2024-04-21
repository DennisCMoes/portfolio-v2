'use client'

import Link from 'next/link'
import { AllProjectsReturn } from '@/types'
import { useEffect, useRef, useState } from 'react'
import DynamicIcon, { IconName } from '../dynamicIcon'

type CardParams = {
  project: AllProjectsReturn
}

export default function ProjectCard({ project }: CardParams) {
  const descriptionElement = useRef<HTMLParagraphElement>(null)

  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0)

  const getSlug = () => `/projects/${project.slug}`
  const handleHover = (hovering: boolean) => setIsHovering(hovering)

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    updateIsMobile()

    window.addEventListener('resize', updateIsMobile)

    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

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
        className="hoverable-card group relative flex aspect-square flex-col overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-blue-700 text-white"
      >
        <div className="absolute bottom-0 right-0">
          <DynamicIcon iconName={project.metadata.icon as IconName} />
        </div>
        <div className="relative flex h-full w-full flex-col justify-end">
          <div className="p-6">
            <p className="text-sm text-neutral-100">
              {project.metadata.technologies.join(', ')}
            </p>
            <p
              style={{
                marginBottom: isMobile
                  ? descriptionHeight
                  : isHovering
                    ? descriptionHeight
                    : 0,
              }}
              className="text-4xl transition-all duration-300"
            >
              {project.metadata.title}
            </p>
            <p
              ref={descriptionElement}
              className="absolute bottom-4 left-6 right-6 text-xl transition-all delay-0 md:opacity-0 md:group-hover:opacity-100 md:group-hover:delay-200"
            >
              {project.metadata.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

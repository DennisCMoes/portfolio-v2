'use client'

import { ProjectMetaData } from '@/types/props'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/project-card.module.css'
import { useEffect, useRef, useState } from 'react'

type Props = {
  project: ProjectMetaData
}

export default function ProjectCard({ project }: Props) {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [height, setHeight] = useState<number>(0)
  const imageElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imageElement) return

    setHeight(imageElement.current!.offsetHeight)
  }, [imageElement])

  return (
    <Link
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col rounded-lg p-6 bg-primary-light"
    >
      <div
        ref={imageElement}
        className="relative opacity-0 group-hover:opacity-100 group-hover:delay-100 delay-0 group-hover:duration-500 duration-150 transition-opacity rounded-md bg-white aspect-video"
      >
        <Image
          src={project.coverImage}
          alt={'Cover image'}
          sizes="100%"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
      </div>
      <div
        className="transition-all duration-300"
        style={{ marginTop: isHovering ? 10 : -height }}
      >
        <p className="text-tertiary-light">{`/${project.slug}`}</p>
        <p className="text-4xl md:text-5xl">{project.title}</p>
        <p className="md:text-3xl text-tertiary-light">{project.description}</p>
      </div>
    </Link>
  )
}

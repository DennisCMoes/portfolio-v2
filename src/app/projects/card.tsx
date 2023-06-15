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
  const [height, setHeigth] = useState<number>(0)
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const descriptionElement = useRef<HTMLParagraphElement>(null)

  const handleHover = (hover: boolean) => setIsHovering(hover)

  useEffect(() => {
    if (!descriptionElement.current) return

    setHeigth(descriptionElement.current.offsetHeight)
  }, [descriptionElement])

  return (
    <Link
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      href={`/projects/${project.slug}`}
      className={`group relative flex flex-col rounded-lg bg-primary-light overflow-hidden aspect-square ${styles.btn}`}
    >
      <div className="absolute aspect-square w-full h-full opacity-100 group-hover:opacity-0 duration-500 z-10">
        <Image
          src={project.coverImage}
          alt={'Cover image'}
          sizes="100%"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-md absolute w-full h-full"
        />
      </div>

      <div className="relative flex flex-col justify-end h-full w-full z-20 transition-colors duration-300 bg-black/30 group-hover:bg-black/0">
        <div className="px-6 absolute top-6 w-full opacity-0 flex flex-row justify-between group-hover:opacity-100 duration-300">
          <div className="w-full flex flex-row justify-end z-20 text-3xl gap-2">
            <div className="p-3 bg-secondary-light hover:bg-secondary-light/60 hover:shadow-md transition-all rounded-md aspect-square inline-flex items-center justify-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black hover:text-black/90 w-9 h-9 z-20"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </div>
            <div className="p-3 bg-secondary-light hover:bg-secondary-light/60 hover:shadow transition-all rounded-md aspect-square inline-flex items-center justify-center">
              <svg
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black hover:text-black/90 w-9 h-9 z-20"
              >
                <path
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p
            style={{ marginBottom: isHovering ? 0 : -height }}
            className="transition-all text-4xl md:text-5xl text-primary-light group-hover:text-primary-dark"
          >
            {project.title}
          </p>
          <p
            ref={descriptionElement}
            className="opacity-0 group-hover:opacity-100 transition-all text-2xl md:text-3xl text-tertiary-light group-hover:delay-100 delay-0"
          >
            {project.description} {height}
          </p>
        </div>
      </div>
    </Link>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '@/styles/project-card.module.css'

export default function Card({ project }: any) {
  const { title, slug, coverImage } = project

  useEffect(() => {
    console.log(project)

    /* {
      "title": "Welcome to my markdown document",
      "slug": "project-1",
      "coverImage": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "technologies": [
        "TypeScript",
        "MySQL"
      ],
      "date": "2023-06-05T05:35:07.322Z",
      "repository": "https://github.com/dylanwe/fizzy-fitness-app"
    } */
  }, [])

  return (
    <Link
      className="flex bg-primary-light rounded-md flex-col p-4 hover:scale-105 transition-all"
      href={`/projects/${slug}`}
    >
      <p className="font-semibold text-lg">{title}</p>
      <div className="relative aspect-video rounded-md overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          sizes="100%"
          style={{ objectFit: 'cover' }}
          fill
        />
      </div>
    </Link>
  )
}

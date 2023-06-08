'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ElongatedImageProps as Props } from '@/types/props'

export default function ElongatedImage({
  image,
  description,
  isFullSize = true,
  darkMode = false,
}: Props): JSX.Element {
  const [bgColor, setBgColor] = useState<string>('')

  useEffect(() => {
    if (!isFullSize) {
      if (darkMode) {
        setBgColor('bg-primary-dark')
      } else {
        setBgColor('bg-primary-light')
      }
    }
  }, [darkMode, isFullSize])

  return (
    <div>
      <div
        className={`relative w-full overflow-hidden aspect-square md:aspect-[21/9] inline-flex items-center justify-center rounded-xl transition-colors select-none ${bgColor}`}
      >
        <Image
          src={image}
          className={`${isFullSize ? '' : 'p-8'} pointer-events-none`}
          alt={description ?? 'Image'}
          sizes="100%"
          style={{ objectFit: isFullSize ? 'cover' : 'contain' }}
          fill
        />
      </div>
      {description && (
        <small className="block text-tertiary leading-tight">
          {description}
        </small>
      )}
    </div>
  )
}

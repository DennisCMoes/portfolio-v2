'use client'

import { Link } from '@/types'
import { useEffect, useRef, useState } from 'react'

export default function SocialBtn({ label, children }: Link) {
  const textElement = useRef<HTMLDivElement>(null)

  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(0)

  const handleEnter = () => setIsHovering(true)
  const handleLeave = () => setIsHovering(false)

  useEffect(() => {
    if (!textElement.current) return

    setWidth(textElement.current!.offsetWidth)
  }, [textElement])

  useEffect(() => {
    // 768 is medium screen width
    setIsMobile(screen.width < 768)
  }, [width])

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ paddingRight: !isMobile && isHovering ? width + 20 : 16 }}
      className="relative group bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-primary-light rounded-md transition-all duration-300 flex flex-row p-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </svg>
      <div
        ref={textElement}
        style={{ marginLeft: isMobile ? 4 : 0 }}
        className="pointer-events-none md:absolute right-4 md:opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-300 delay-0 group-hover:delay-200"
      >
        <p>{label}</p>
      </div>
    </div>
  )
}

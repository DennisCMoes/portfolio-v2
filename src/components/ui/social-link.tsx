import Link from 'next/link'
import { useState } from 'react'

export default function SocialLink() {
  const [isHovering, setIsHovering] = useState<boolean>(false)

  return <Link href="#" target="_blank" rel="noopener noreferrer"></Link>
}

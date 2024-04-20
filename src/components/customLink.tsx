import { LinkData } from '@/types'
import Link from 'next/link'

export default function CustomLink(link: LinkData & { customClass?: string }) {
  return (
    <Link
      href={link.href}
      target={link.tabBehaviour === 'new' ? '_blank' : ''}
      rel="noopener noreferrer"
    >
      <div
        className={`group inline-flex flex-row transition-colors duration-75 hover:text-blue-500 hover:duration-300 ${link.customClass}`}
      >
        <span>{link.label && link.label}</span>
        {link.icon && link.icon}
      </div>
    </Link>
  )
}

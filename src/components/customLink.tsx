import { LinkData } from '@/types'
import Link from 'next/link'

export default function CustomLink(link: LinkData & { customClass?: string }) {
  return (
    <Link href={link.href} className={link.customClass}>
      <div className="group transition-colors duration-75 hover:text-blue-500 hover:duration-300">
        {link.icon && link.icon}
        <span>{link.label && link.label}</span>
      </div>
    </Link>
  )
}

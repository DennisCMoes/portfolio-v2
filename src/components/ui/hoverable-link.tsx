import Link from 'next/link'

type Props = {
  href: string
  label: string
  newTab?: boolean
}

// FIXME: The underline will clip through the letters of the word if it is a long letter like 'j' or 'g'
export default function HoverableLink({ href, label, newTab = true }: Props) {
  return (
    <Link
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noopener noreferrer' : ''}
      href={href}
      className="text-transparent transition-colors bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500"
    >
      <span className="link link-underline link-underline-black">@{label}</span>
    </Link>
  )
}

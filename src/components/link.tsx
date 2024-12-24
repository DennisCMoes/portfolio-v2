import Link from 'next/link'

type Props = {
  url: string
  newTab: boolean
  label: string
}

export default function PortfolioLink({ url, label, newTab = true }: Props) {
  return (
    <Link
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noopener noreferrer' : ''}
      href={url}
      className="text-blue transition-colors duration-200 hover:text-orange"
    >
      {label}
    </Link>
  )
}

import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

type ButtonParams = {
  label: string
  destination: string
}

export default function LinkButton({ label, destination }: ButtonParams) {
  return (
    <Link
      href={destination}
      className="group inline-flex flex-row gap-1 font-medium"
    >
      <span>{label}</span>
      <span className="group-hover:translate-x-2 transition-transform duration-300">
        <IconArrowRight />
      </span>
    </Link>
  )
}

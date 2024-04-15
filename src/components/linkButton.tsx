import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonParams = {
  label: string
  destination: string
  classname?: string
  isLink?: boolean
}

export default function LinkButton({
  label,
  destination,
  classname,
  isLink = true,
}: ButtonParams) {
  if (isLink) {
    return (
      <Link
        href={destination}
        className={'group inline-flex flex-row gap-1 font-medium ' + classname}
      >
        <span>{label}</span>
        <span className="group-hover:translate-x-2 transition-transform duration-300">
          <IconArrowRight />
        </span>
      </Link>
    )
  } else {
    return (
      <div
        className={'group inline-flex flex-row gap-1 font-medium ' + classname}
      >
        <span>{label}</span>
        <span className="group-hover:translate-x-2 transition-transform duration-300">
          <IconArrowRight />
        </span>
      </div>
    )
  }
}

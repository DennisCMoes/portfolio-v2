import { IconArrowRight } from '@tabler/icons-react'
import { ReactNode } from 'react'
import Link from 'next/link'

type ButtonParams = {
  label: string
  destination: string
  icon?: ReactNode
  classname?: string
  isLink?: boolean
}

export default function LinkButton({
  label,
  destination,
  classname,
  icon = <IconArrowRight />,
  isLink = true,
}: ButtonParams) {
  if (isLink) {
    return (
      <Link
        href={destination}
        className={'group inline-flex flex-row gap-1 font-medium ' + classname}
      >
        <span>{label}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-2">
          {icon}
        </span>
      </Link>
    )
  } else {
    return (
      <div
        className={'group inline-flex flex-row gap-1 font-medium ' + classname}
      >
        <span>{label}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-2">
          <IconArrowRight />
        </span>
      </div>
    )
  }
}

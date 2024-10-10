import { ReactNode } from 'react'

type Props = {
  label: string
  children: ReactNode
  classNames?: string
}

export default function Section({ children, label, classNames }: Props) {
  return (
    <div>
      <p className="text-secondary uppercase font-bold">{label}</p>
      <div className={classNames}>{children}</div>
    </div>
  )
}

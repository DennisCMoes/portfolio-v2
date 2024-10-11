import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  label: string
  children: ReactNode
  classNames?: HTMLAttributes<HTMLDivElement>['className']
}

export default function Section({ children, label, classNames }: Props) {
  return (
    <div>
      <p className="font-bold uppercase text-secondary">{label}</p>
      <div className={classNames}>{children}</div>
    </div>
  )
}

import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  label: string
  children: ReactNode
  id?: HTMLAttributes<HTMLDivElement>['id']
  className?: HTMLAttributes<HTMLDivElement>['className']
}

export default function Section({ children, label, className, id }: Props) {
  return (
    <div id={id}>
      <p className="font-bold uppercase text-secondary">{label}</p>
      <div className={className}>{children}</div>
    </div>
  )
}

import * as TablerIcons from '@tabler/icons-react'

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>
export type IconName = keyof typeof TablerIcons

export const TablerIcon: React.FC<{
  iconName: IconName
  size?: number
  strokeWidth?: number
  className?: string
}> = ({ iconName, className, size = 64, strokeWidth = 2 }) => {
  const IconComponent = TablerIcons[iconName] as IconComponent
  return (
    <IconComponent
      className={className}
      width={size}
      height={size}
      strokeWidth={strokeWidth}
    />
  )
}

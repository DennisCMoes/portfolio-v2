import * as TablerIcons from '@tabler/icons-react'

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>
export type IconName = keyof typeof TablerIcons

export const TablerIcon: React.FC<{
  iconName: IconName
  size?: number
  color?: string
}> = ({ iconName, size = 64, color = '#1D1D1F' }) => {
  const IconComponent = TablerIcons[iconName] as IconComponent
  return <IconComponent color={color} width={size} height={size} />
}

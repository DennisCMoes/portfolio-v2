import * as TablerIcons from '@tabler/icons-react'

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>
export type IconName = keyof typeof TablerIcons

const DynamicIcon: React.FC<{
  iconName: IconName
  size?: number
  color?: string
}> = ({ iconName, size = 160, color = '#1e40af' }) => {
  const IconComponent = TablerIcons[iconName] as IconComponent
  return <IconComponent color="#1e40af" width={size} height={size} />
}

export default DynamicIcon

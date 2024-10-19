import { WorkExperience } from '@/types'

export default function ExperienceCard({
  title,
  subtitle,
  date,
}: WorkExperience) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <p className="text-2xl font-bold">{title}</p>
        <p className="font-medium text-secondary">{subtitle}</p>
      </div>
      <p className="font-medium">{date}</p>
    </div>
  )
}

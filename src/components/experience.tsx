import { WorkExperience } from '@/types'

export default function ExperienceCard({
  title,
  subtitle,
  date,
}: WorkExperience) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <p className="text-primary-light dark:text-primary-dark text-2xl font-bold">
          {title}
        </p>
        <p className="text-secondary">{subtitle}</p>
      </div>
      <p className="text-primary-light dark:text-primary-dark">{date}</p>
    </div>
  )
}

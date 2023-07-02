import { EducationProps as Education } from '@/types/props'

type Props = {
  education: Education
}

// TODO: Work on the design
export default function EducationCard({ education }: Props) {
  return (
    <div className="flex flex-col bg-primary-light text-primary-dark aspect-video p-4 rounded-md relative">
      <div className="flex-1" />
      <div className="flex flex-col">
        <div className="text-tertiary-light text-base">
          <p>
            {education.start} - {education.end}
          </p>
          <p>{education.school}</p>
        </div>
        <p>{education.degree}</p>
      </div>
    </div>
  )
}

import { WorkExperience } from '@/types'

type WorkParams = {
  workExperience: WorkExperience
}

export default function WorkExperienceCard({ workExperience }: WorkParams) {
  return (
    <div className="flex flex-row">
      <div className="basis-4/12">
        {workExperience.startMonth} - {workExperience.endMonth}
      </div>
      <div className="inline-flex basis-8/12 flex-col">
        <p className="text-lg font-medium">{workExperience.company}</p>
        <p className="text-sm">{workExperience.title}</p>
        <p>{workExperience.description}</p>
      </div>
    </div>
  )
}
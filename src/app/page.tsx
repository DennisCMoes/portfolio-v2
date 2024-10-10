import { Metadata } from 'next'
import { IconMapPin } from '@tabler/icons-react'
import Section from '@/components/section'
import ExperienceCard from '@/components/experience'
import Switch from '@/components/switch'

export const metadata: Metadata = {
  title: 'Home',
  description: 'The index page of my personal website',
}

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="flex text-secondary">
          <IconMapPin />
          <p className="uppercase">Amsterdam</p>
        </div>
        <h1 className="uppercase text-5xl font-medium">
          <span className="text-primary">Developer by day,</span>
          <br />
          <Switch />
          <span className="ml-2 text-secondary">Jedi by night</span>
        </h1>
      </div>
      <Section label="About">
        <p className="font-medium">
          Lorem ipsum ut dolore id sunt commodo amet qui, commodo sint laboris,
          irure exercitation est, consequat. In ut, do elit nisi officia magna
          mollit cupidatat cupidatat aliquip laboris sed commodo officia.
          Commodo cillum ut velit sed qui sunt mollit ullamco nisi eu culpa anim
          mollit consequat.
        </p>
      </Section>
      <Section label="Experience" classNames="flex flex-col gap-4">
        {workExperienceList.map((experience) => (
          <ExperienceCard key={experience.title} {...experience} />
        ))}
      </Section>
    </div>
  )
}

const workExperienceList = [
  {
    title: 'ChipSoft',
    subtitle: 'Wekstudent',
    date: 'apr. 2023 - present',
  },
  {
    title: 'Crafter',
    subtitle: 'Junior Software Developer',
    date: 'sep. 2022 - nov. 2022',
  },
  {
    title: 'Next Gen Atlas',
    subtitle: 'Co-founder',
    date: 'apr. 2021 - jul. 2022',
  },
]

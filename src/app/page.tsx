import { Metadata } from 'next'
import { IconMapPin } from '@tabler/icons-react'
import Section from '@/components/section'
import ExperienceCard from '@/components/experience'
import Switch from '@/components/switch'
import Link from 'next/link'
import ProjectCard from '@/components/project'

import { IconName } from '@/components/tabler-icon'

export const metadata: Metadata = {
  title: 'Home',
  description: 'The index page of my personal website',
}

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="mb-2 flex text-secondary">
          <IconMapPin />
          <p className="ml-1 font-medium uppercase">Amsterdam</p>
        </div>
        <h1 className="text-5xl font-medium uppercase">
          <span className="text-primary">Developer by day,</span>
          <br />
          <Switch />
          <span className="ml-2 text-secondary">Jedi by night</span>
        </h1>
      </div>
      <Section label="About">
        <p className="font-medium">
          I&apos;m currently studying at the Amsterdam University of Applied
          Sciences and working part-time at ChipSoft. In my free time, I enjoy
          building fun and interactive applications.
        </p>
      </Section>
      <Section label="Experience" classNames="flex flex-col gap-4">
        {workExperienceList.map((experience) => (
          <ExperienceCard key={experience.title} {...experience} />
        ))}
      </Section>
      <Section
        label="Projects"
        classNames="grid grid-cols-2 auto-rows-[22rem] gap-4"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Section>
      <Section label="Get in touch">
        <div className="font-semibold">
          Want to chat? Just shoot me a message{' '}
          <Link
            href={'https://google.com'}
            className="text-link underline transition-opacity duration-150 hover:opacity-60"
          >
            with a direct question on LinkedIn
          </Link>{' '}
          and I&apos;ll respond as soon I can.
        </div>
      </Section>
    </div>
  )
}

const workExperienceList = [
  {
    title: 'ChipSoft',
    subtitle: 'Werkstudent',
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

const projects: {
  title: string
  subtitle: string
  icon: IconName
  xSize?: number
}[] = [
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
  },
]

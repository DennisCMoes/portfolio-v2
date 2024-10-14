import Link from 'next/link'

import Section from '@/components/section'
import Switch from '@/components/switch'
import ProjectCard from '@/components/project'
import ExperienceCard from '@/components/experience'

import { Metadata } from 'next'
import { IconName } from '@/components/tabler-icon'
import { IconMapPin } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'The index page of my personal website',
}

export default function Home() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-12 px-4 md:px-0">
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
          Hello, my name is Dennis, and I&apos;m currently studying at the
          Amsterdam University of Applied Sciences and working part-time at
          ChipSoft. In my free time, I enjoy building fun and interactive
          applications.
        </p>
      </Section>
      <Section label="Experience" className="flex flex-col gap-4">
        {workExperienceList.map((experience) => (
          <ExperienceCard key={experience.title} {...experience} />
        ))}
      </Section>
      <Section
        id="projects"
        label="Projects"
        className="grid auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Section>
      <Section label="Get in touch">
        <div className="font-semibold">
          Want to chat? Just shoot me a message{' '}
          <Link
            href={'https://www.linkedin.com/in/dennismoes/'}
            target="_blank"
            rel="noopener noreferrer"
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

const workExperienceList: {
  title: string
  subtitle: string
  date: string
}[] = [
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
  slug: string
}[] = [
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
    slug: 'project-1',
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
    slug: 'project-1',
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
    slug: 'project-1',
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
    slug: 'project-1',
  },
  {
    title: 'Title',
    subtitle: 'Subtitle',
    icon: 'IconAspectRatio',
    slug: 'project-1',
  },
]

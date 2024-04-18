import FeaturedPostCard from '@/components/cards/featuredWorkCard'
import WorkExperienceCard from '@/components/cards/workExperienceCard'
import LayoutContainer from '@/components/layout/container'
import LinkButton from '@/components/linkButton'
import SectionTitle from '@/components/sectionTitle'
import { getFeaturedProjects } from '@/posts'
import { AllProjectsReturn, ContactCard, WorkExperience } from '@/types'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home',
}

const ContactItem = (contact: ContactCard) => {
  return (
    <div className="group inline-flex flex-row">
      <p className="basis-4/12 font-medium">{contact.label}</p>
      <Link
        href={contact.href}
        className="flex basis-8/12 flex-row items-center gap-2"
      >
        {contact.icon}
        <p className="transition-all duration-300 group-hover:ml-1">
          {contact.value}
        </p>
      </Link>
    </div>
  )
}

export default async function Home() {
  const projects: AllProjectsReturn[] = await getFeaturedProjects()

  const getKey = (value: string) => value.replaceAll(' ', '-').toLowerCase()

  return (
    <LayoutContainer size="m" classname="flex flex-col gap-8 pt-16">
      <section>
        <h1 className="text-5xl">
          👋 Hey, I'm Dennis
          <br />A backend engineer based in Amsterdam
        </h1>
        <p>
          I'm Dennis, a backend engineer with some frontend experience in
          Amsterdam, the Netherlands. I'm currently working on personal projects
          in my free time.
        </p>
        <LinkButton label="View work" destination="https://google.com" />
      </section>

      <section>
        <SectionTitle label="Featured work" />
        {projects.map((project) => (
          <FeaturedPostCard key={project.slug} project={project} />
        ))}
      </section>

      <section>
        <SectionTitle label="Work experience" />
        <div className="flex flex-col gap-4">
          {workExperience.map((workExperience) => (
            <WorkExperienceCard
              key={getKey(workExperience.title)}
              workExperience={workExperience}
            />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle label="Contact" />
        <div className="flex flex-col gap-2">
          {contact.map((item) => (
            <ContactItem key={getKey(item.label)} {...item} />
          ))}
        </div>
      </section>
    </LayoutContainer>
  )
}

const workExperience: WorkExperience[] = [
  {
    title: 'Developer R&D',
    company: 'Chipsoft B.V.',
    description:
      'Working with C# and blazor to provide a great chatbot for the health sector',
    startMonth: 'apr. 2023',
    endMonth: 'present',
  },
  {
    title: 'Junior Software Developer',
    company: 'Crafter B.V.',
    description:
      'Lorem ipsum magna reprehenderit, qui esse, officia, magna dolor ex aliquip sint sit. Quis cupidatat, in in, proident laborum ex, cupidatat et nostrud, tempor officia.',
    startMonth: 'sep. 2022',
    endMonth: 'dec. 2022',
  },
  {
    title: 'co-founder',
    company: 'Next Gen Atlas',
    description:
      'Lorem ipsum magna reprehenderit, qui esse, officia, magna dolor ex aliquip sint sit. Quis cupidatat, in in, proident laborum ex, cupidatat et nostrud, tempor officia.',
    startMonth: 'apr. 2021',
    endMonth: 'jul. 2022',
  },
]

const contact: ContactCard[] = [
  {
    label: 'E-mail',
    value: 'e-mail',
    href: 'mailto:johndoe@example.com',
    icon: <IconMail />,
  },
  {
    label: 'LinkedIn',
    value: 'in/dennismoes',
    href: 'https://www.linkedin.com/in/dennismoes/',
    icon: <IconBrandLinkedin />,
  },
  {
    label: 'GitHub',
    value: 'kingdennis-crypto',
    href: 'https://github.com/kingdennis-crypto',
    icon: <IconBrandGithub />,
  },
]

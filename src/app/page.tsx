import FeaturedProjectCard from '@/components/cards/featuredProjectCard'
import WorkExperienceCard from '@/components/cards/workExperienceCard'
import CustomLink from '@/components/customLink'
import LayoutContainer from '@/components/layout/container'
import LinkButton from '@/components/linkButton'
import SectionTitle from '@/components/sectionTitle'
import { getFeaturedProjects } from '@/posts'
import { AllProjectsReturn, WorkExperience } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const projects: AllProjectsReturn[] = await getFeaturedProjects()

  const getKey = (value: string) => value.replaceAll(' ', '-').toLowerCase()

  return (
    <LayoutContainer size="m" classname="flex flex-col gap-12 pt-16">
      <section>
        <CustomLink
          customClass="text-5xl"
          href="/"
          label="👋 Hey, I'm Dennis"
        />
        <h2 className="text-3xl">A backend engineer based in Amsterdam</h2>
        <p>
          I&apos;m Dennis, a backend engineer with some frontend experience in
          Amsterdam, the Netherlands. I&apos;m currently working on personal
          projects in my free time.
        </p>
        <LinkButton label="View work" destination="https://google.com" />
      </section>

      <section>
        <SectionTitle label="Featured work" />
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
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

import FeaturedProjectCard from '@/components/cards/featuredProjectCard'
import WorkExperienceCard from '@/components/cards/workExperienceCard'
import LayoutContainer from '@/components/layout/container'
import SectionTitle from '@/components/sectionTitle'
import { getFeaturedProjects } from '@/posts'
import { AllProjectsReturn, SvgCircle, WorkExperience } from '@/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  const projects: AllProjectsReturn[] = await getFeaturedProjects()
  const getKey = (value: string) => value.replaceAll(' ', '-').toLowerCase()

  return (
    <LayoutContainer size="m" classname="flex flex-col gap-12 md:pt-8">
      <section className="group relative overflow-hidden rounded-md bg-blue-500 px-8 py-16 text-white">
        <div className="relative z-30">
          <h1 className="text-3xl md:text-5xl">👋 Hey, I&apos;m Dennis</h1>
          <h2 className="text-xl md:text-3xl">
            A fullstack engineer based in Amsterdam
          </h2>
          <p className="text-sm md:text-base">
            While my focus lies in backend development, I also like to make the
            frontend, ranging from websites to mobile applications. Currently
            I&apos;m dedicating my free time to working on personal projects.
          </p>
        </div>

        {svgCircles.map((item, index) => (
          <div
            key={index}
            className={`absolute z-10 transition-transform duration-500 group-hover:scale-110 ${item.absolutePosition}`}
          >
            <svg
              height={item.size}
              width={item.size}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                r={item.radius}
                cx={item.centerXY}
                cy={item.centerXY}
                fill="transparent"
                strokeWidth={item.strokeWidth}
                className="fill-transparent stroke-blue-600"
              />
            </svg>
          </div>
        ))}
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
      'Working with Python and Django to provide a invoice web application for freelancers and companies',
    startMonth: 'sep. 2022',
    endMonth: 'dec. 2022',
  },
  {
    title: 'co-founder',
    company: 'Next Gen Atlas',
    description:
      'Working with React Native to create mobile applications for customers.',
    startMonth: 'apr. 2021',
    endMonth: 'jul. 2022',
  },
]

const svgCircles: SvgCircle[] = [
  {
    size: 80,
    radius: 25,
    centerXY: 40,
    strokeWidth: 16,
    absolutePosition: 'bottom-8 right-4',
  },
  {
    size: 140,
    radius: 50,
    centerXY: 70,
    strokeWidth: 30,
    absolutePosition: '-bottom-12 -left-12',
  },
  {
    size: 120,
    radius: 40,
    centerXY: 60,
    strokeWidth: 25,
    absolutePosition: '-top-12 right-24',
  },
]
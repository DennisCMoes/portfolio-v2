import ProjectCard from '@/app/about/card'

import MeImage from '../../../public/images/me-explaining.jpeg'
import MeCoding from '../../../public/svg/me-coding.svg'
import HoverableLink from '@/components/ui/hoverable-link'
import ElongatedImage from '@/components/ui/elongated-image'
import { Inter } from 'next/font/google'

import { HighlightedProjectsProps as Props } from '@/types/props'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function AboutPage({
  highlightedProjects,
}: {
  highlightedProjects: Props[]
}) {
  return (
    <main className={`${inter.className} min-h-screen px-4 py-12 md:py-32`}>
      <section className="max-w-4xl mx-auto space-y-12 text-2xl md:text-2xl">
        <div className="space-y-4">
          <p>
            Hello stranger! My name is Dennis and I&apos;m a software
            engineering student who is based near the charming city of
            Amsterdam. Currently I&apos;m pursuing my Bachelor&apos;s degree at{' '}
            <HoverableLink
              href="https://www.hva.nl"
              newTab={true}
              label="HvA"
            />
            , which I am projected to receive in June 2025
          </p>
          <p>
            I enjoy working on my side projects, particularly applications that
            solve specific problems for individuals rather than attempting to be
            flexible enough to accommodate everyone&apos;s needs. Here are the
            two most notable projects:
          </p>
        </div>
        {/* TODO: Add loading component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {highlightedProjects.map((project: Props, index: number) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              href={project.href}
            />
          ))}
        </div>
        <ElongatedImage
          image={MeImage}
          description="Me describing the plan for our group project"
        />
        <div>
          <div className="space-y-8">
            <p>
              Technology, computers, and software have always been a source of
              inspiration for me. From a young age, I have been fascinated by
              the endless possibilities that these fields offer.
            </p>
            <p>
              My interest in coding was developed in 2018, when i got challenged
              by a classmate to create a mobile app for him. So now I&apos;m
              proud to say that I have recently (2021) graduated from{' '}
              <HoverableLink
                href="https://www.regiocollege.nl/"
                newTab={true}
                label="Regio College"
              />{' '}
              as a Software Engineer.
            </p>

            <p>
              During my free time, I enjoy working on side projects that allow
              me to explore new areas of coding and expanding my skillset. I am
              particularly interested in web and backend development. However, I
              also have a interest in design and I do try to incorporate this
              into my projects.
            </p>

            <p>
              When I&apos;m not busy with coding, I love to unwind and indulge
              in some of my other passions. Playing games on my Nintendo Switch,
              reading the newspaper, taking a walk through the park, or wachting
              AFC Ajax are just a few of the activities that I enjoy in my free
              time.
            </p>
          </div>
        </div>
        <ElongatedImage
          image={MeCoding}
          description="Me sitting behind my desk coding"
          isFullSize={false}
          darkMode={true}
        />
      </section>
    </main>
  )
}

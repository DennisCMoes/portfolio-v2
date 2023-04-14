import Head from 'next/head'
import { Inter } from 'next/font/google'
import ProjectCard from '@/components/ui/project-card'

import ProjectData from '@/data/projects.json'

import MeImage from '../../public/images/me-explaining.jpeg'
import MeCoding from '../../public/svg/me-coding.svg'
import HoverableLink from '@/components/ui/hoverable-link'
import ElongatedImage from '@/components/ui/elongated-image'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main
        className={`${inter.className} bg-background-light text-secondary-light dark:bg-background-dark dark:text-secondary-dark min-h-screen px-4 py-12 md:py-32`}
      >
        <section className="max-w-4xl mx-auto space-y-12 text-2xl md:text-2xl">
          <div>
            <p>
              I love working on my{' '}
              <HoverableLink
                href="/projects"
                label="side projects"
                newTab={false}
              />
              , especially on applications that solves someone elses problem
              perfectly and not trying to be flexible to fit everyone needs.
              Here are the two most notable things
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ProjectData.map((project, index) => (
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
                Hello! My name is Dennis and I&apos;m a software engineering
                student who is based in the picturesque Amsterdam. I am
                currently studying{' '}
                <HoverableLink
                  href="https://www.hva.nl"
                  newTab={true}
                  label="HvA"
                />{' '}
                for my Bachelor.
              </p>
              <p>
                I have always been inspired by the tech industry, computers and
                software. Just anything that is tech related. And when in 2018 I
                got dared by a classmate to make a mobile app, I discovered that
                coding is also a big passion of mine. Fast forward to today and
                I have graduated{' '}
                <HoverableLink
                  href="https://www.regiocollege.nl/"
                  newTab={true}
                  label="Regio College"
                />{' '}
                as a Software Engineer.
              </p>
              <p>
                In my spare time I always try to tinker on some side projects
                while exploring areas in coding where I can grow such as web,
                backend, a bit of hardware (arduino) and especially design.
              </p>

              <p>
                And finally when I&apos;m not coding. I&apos;m probably playing
                games on my Nintendo Switch, reading a newspaper or watching AFC
                Ajax.
              </p>
            </div>
          </div>
          <ElongatedImage
            image={MeCoding}
            description="Me sitting behind my desk coding"
            isFullSize={false}
            darkMode={true}
          />
          {/* <div className="space-y-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              dolorum quis pariatur, blanditiis dolorem et non mollitia aliquid
              sunt? Accusamus, doloribus? Iste, nobis repellendus nihil eveniet
              nisi qui porro praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sed
              eveniet et dicta voluptas beatae maiores neque explicabo tenetur
              architecto natus aliquam nostrum dolorum fuga, qui suscipit aut
              dignissimos aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque at
              officiis maxime enim quaerat natus, quas laudantium porro nulla
              saepe dolorem dicta quisquam perspiciatis reiciendis adipisci,
              quae id sed necessitatibus.
            </p>
          </div> */}
        </section>
      </main>
    </>
  )
}

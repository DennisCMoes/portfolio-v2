import Head from 'next/head'
import { Inter } from 'next/font/google'
import ProjectCard from '@/components/project-card'
import Image from 'next/image'

import MeImage from '../../public/images/me-explaining.jpeg'
import MeCoding from '../../public/svg/me-coding.svg'
import HoverableLink from '@/components/ui/hoverable-link'

const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main
        className={`${inter.className} bg-background-light min-h-screen px-4 py-32`}
      >
        <section className="max-w-4xl mx-auto space-y-12 text-secondary-light">
          <div>
            <p className="text-3xl">
              I love working on{' '}
              <HoverableLink
                href="projects"
                label="side projects"
                newTab={false}
              />
              , especially on applications that solves someone elses problem
              perfectly and not trying to be flexible to fit everyone needs.
              Here are the two most notable things
            </p>
          </div>
          {/* <div className="inline-flex flex-row my-4 gap-4 w-full"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectCard
              icon="📚"
              title="Journal"
              description="Beautiful journal app for macOS with over 1K users"
            />
            <ProjectCard
              icon="💈"
              title="Rioll"
              description="3D printed and IoT kits for makers"
            />
          </div>
          <div>
            <div className="relative w-full overflow-hidden aspect-[21/9] bg-primary-light inline-flex items-center justify-center rounded-xl">
              <Image
                src={MeImage}
                alt="Me describing plans for our group project to the class"
                sizes="100%"
                style={{ objectFit: 'cover' }}
                fill
              />
            </div>
            <small className="mt-0 text-tertiary">
              Me describing the plan for our group project
            </small>
          </div>
          <div>
            <div className="text-3xl space-y-8">
              <p>
                Hello! My name is Dennis and I&apos;m a software engineering
                student who is based in the picturesque Amsterdam. I am
                currently studying <HoverableLink href="#" label="HvA" /> for my
                Bachelor.
              </p>
              <p>
                I have always been inspired by the tech industry, computers and
                software. Just anything that is tech related. And when in 2018 I
                got dared by a classmate to make a mobile app, I discovered that
                coding is also a big passion of mine. Fast forward to today and
                I have graduated{' '}
                <HoverableLink href="#" label="Regio College" /> as a Software
                Engineer.
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

              {/* <p>
                Also I do love playing Mario Kart in my free time and I support
                AFC Ajax. And when I&apos;m not coding I&apos;m out there having
                fun and cracking the worst dad jokes. Random, but did you know
                that Amsterdam North is located in the north? I know I was also
                shocked.
              </p> */}
            </div>
          </div>
          <div>
            <div className="relative w-full aspect-[21/9] bg-secondary-light inline-flex items-center justify-center rounded-xl">
              <Image
                src={MeCoding}
                className="p-8"
                alt="help"
                sizes="100%"
                style={{ objectFit: 'contain' }}
                fill
              />
            </div>
            <small className="mt-0 text-tertiary">
              Me sitting behind my desk coding
            </small>
          </div>
          <div className="text-3xl space-y-8">
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
          </div>
        </section>
      </main>
    </>
  )
}

import PortfolioLink from '@/components/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DM | About',
  description: 'A dive into the life of the bug whisperer',
  openGraph: {
    title: 'DM | About',
    type: 'website',
    url: 'https://dennismoes.com/about',
    images: {
      url: '/open-graph.jpg',
      width: 1080,
      height: 1080,
    },
  },
}

export default function About() {
  return (
    <div className="text-primary-light dark:text-primary-dark mx-auto flex max-w-2xl flex-col gap-8 px-4 md:px-0">
      <div>
        <div className="mb-2 flex text-secondary">
          <p className="font-medium uppercase">About</p>
        </div>
        <h1 className="text-5xl font-medium uppercase">
          Hi again, I&apos;m <br />
          Dennis
        </h1>
      </div>
      <div className="flex flex-col gap-4 font-medium">
        <p>
          I&apos;m a software developer and occasional bug whisperer driven by
          curiosity, creativity, and the great feeling of solving coding
          problems. My story started a few years ago when I needed to choose my
          next educational path. I didn&apos;t know what I wanted to do, but I
          always thought that coding looked very cool. So I questioned myself:{' '}
          <em>How hard can it be?</em> Well....... it&apos;s a lot harder than I
          thought. But that&apos;s the fun part of it, isn&apos;t it? Having new
          challenges and new opportunities to learn, tinker, and somtimes (but
          more often than I like) crash the entire system along the way.
        </p>
        <p>
          In my free time I like to work on my own projects. It ranges from
          making mobile weather apps (
          <PortfolioLink
            label="Not another weather app"
            url="/projects/not-another-weather-app"
          />
          ), making an database object relational mapper in Java (
          <PortfolioLink label="DB-ORM" url="/projects/db-orm" />
          ), to making a full-on operating system called{' '}
          <PortfolioLink label="Pong-OS" url="/projects/pong-os" /> just to play
          pong on it. I work on a wide range of projects to explore what I tryly
          enjoy. And in the process, I end up learning a lot about... well...
          almost everything.
        </p>
        <p>
          But there is more to me than just coding. When I&apos;m not fighting
          the missing semicolons, you can find me doing my other hobbies which
          includes reading books, gaming, and my love for airplanes.
        </p>
        <p>
          As for books, I mostly read non-fiction books. Sometimes about a new
          topic to learn, and sometimes just a depiction of real-life events.
          And the gaming side? Well I love a great written game, a game where
          you can just sink into and forget what time it is because you get so
          invested in the story. But, I can also get lost for days playing a
          great city builder. It just gives me a great outles for my creativity
          and city planning about where the next city part should be.
        </p>
        <p>
          And last but not least, airplanes. I&apos;m just fascinated by them. I
          love to learn everything about them. There&apos;s something
          awe-inspiring about standing next to a jetliner plane, feeling so
          small in comparison. Their sheer scale and engineering makes me
          appreciate such an invention.
        </p>
        <p>
          So whether I&apos;m coding, reading, gaming, or admiring a jetliner up
          close, I&apos;m always trying to chase curiosity and learning
          something new.
        </p>
        <p>So thank you for coming to my ted talk :)</p>
      </div>
    </div>
  )
}

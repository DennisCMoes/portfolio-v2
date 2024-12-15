import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'The index page of my personal website',
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
          curiosity, creativity, and the challenge of solving complex problems.
          My journey into coding started with a simple (and a tiny bit) naïve
          question: <em>How hard can it be?</em> Well..... it&apos;s a lot
          harder than I though. But I love the fact that each project brings me
          a new challenge and a new opportunity to learn, tinker, and sometimes
          (a bit to often) crash an entire system along the way.
        </p>
        <p>
          Take my latest project for example, the custom operating system.
          It&apos;s designed for the i386 chip, and it plays Pong. I know, very
          revolutionary. But beneath the somewhat unserious exterior lies a
          treasy of knowledge. It&apos;s an exploration of memory management,
          kernel design, and hardware-level programming. It taught me that even
          a simple game can be a hell of a challenge, especially when the code
          decides it would rather restart the CPU than draw a ball on the
          screen.
        </p>
        <p>
          Then there&apos;s my Java-based object-relational mapper (ORM), which
          maps Java classes and objects to SQL queries. This project taught me
          how to balance the elegance of clean abstractions and reflections with
          the power of raw SQL syntax. And let&apos;s not forget my EAS file
          encryption tool, it&apos;s a command-line application that tries to
          let you believe &quot;Your files are safe with me&quot;, assuming that
          you&apos;re using it correctly. These aren&apos;t some projects or
          exercises. It&apos;s more of a way to learn deeper concepts within the
          world of programming.
        </p>
        <p>
          My current project? Trying to relearn the elusive realm of data
          structures and algorithms. It's a journey back to the basics, but with
          a fresh perspective and a deeper understanding of how these
          fundamental concepts shape the software we build.
        </p>
        <h2 className="text-3xl">Beyond the Code</h2>
        <p>
          When I&apos;m not hating my life trying to figure out where I forgot a
          semicolon, you can find me doing my other hobbies including reading
          books. I mostly read non-fiction books, which I use to learn more
          about topics which I&apos;m very interested in.
        </p>
        <p>
          Speaking of hobbies, I have a not-so-secret love for classic cards.
          Old Mustangs, in particular. They&apos;re my favorite. There&apos;s
          just something magical about the roar of those engines. I love hearing
          about their mechanics, history, and design. It&apos;s probably just a
          big nostalgia trip for a time I haven&apos;t lived through. Either
          way, I love those old muscle cars.
        </p>
        <p>
          And of course we can&apos;t forget about gaming. I love a good written
          RPG, but I can also get lost for a few hours in a city builder game,
          which gives me a good outlet for creativity and planning.
        </p>
        <p>
          Outside of all this, I truly believe in the power of balance. Life
          can&apos;t be all about coding and algorithms. Sometimes you just need
          a good distraction, whether that is a good book, a roaring muscle car,
          or just a good meeting with a friend. And in many cases, if
          you&apos;re stuck with a problem, the solution will come when you
          don&apos;t focus on it. So, whether I&apos;m reading, driving, gaming,
          or just having a laugh with my friends, I&apos;m always looking for
          new ways to learn, grow, and recharge.
        </p>
        <p>Thank you for coming to my ted talk :)</p>
      </div>
    </div>
  )
}

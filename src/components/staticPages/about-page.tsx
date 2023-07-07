'use client'

// Images
import BlockchainPresentation from '@public/images/blockchain-presentation.jpg'
import MeImage from '@public/images/me-explaining.jpeg'
import MeCoding from '@public/svg/me-coding.svg'

// Components
import HoverableLink from '@/components/ui/hoverable-link'
import ElongatedImage from '@/components/ui/elongated-image'

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto text-xl">
      <p className="text-4xl font-semibold mb-4">About</p>
      <section className="space-y-8">
        <p>
          Hello stranger! My name is Dennis, and I&apos;m a student and aspiring
          developer who&apos;s all about creating cool and eye-catching
          solutions through coding.
        </p>
        <p>
          Currently I&apos;m studying Software Engineering at{' '}
          <HoverableLink href="https://www.hva.nl" newTab={true} label="HvA" />{' '}
          in Amsterdam. I&apos;m passionate about expanding my knowledge and
          skills in the world of development. I&apos;ve already got a solid
          foundation in programming languages like Java, TypeScript, and Dart.{' '}
        </p>

        <p>
          In my free time, I&apos;ve taken on some personal projects to
          strengthen my coding abilities. From designing and building the
          website you&apos;re checking out right now to whipping up a neat
          recipe app. I&apos;ve had a blast bringing my ideas to life and
          picking up new technologies along the way.
        </p>

        <ElongatedImage
          image={MeImage}
          description="Me describing the plan for our group project"
        />

        <p>
          My interest in coding sparked back in 2018 when a classmate challenged
          me to create a fun small mobile app for him. It didn&apos;t go
          smoothly, I was new to coding and already taking on such a big task.
          But alas that experience made me want more, and a year lated I
          enrolled in a Software Engineering program at{' '}
          <HoverableLink
            href="https://www.regiocollege.nl/"
            newTab={true}
            label="Regio College"
          />
          . Two years later, I proudly graduated as a Software Engineer.
        </p>

        <p>
          After getting my diploma, I dove straight into my bachelor at the{' '}
          <HoverableLink href="https://www.hva.nl" newTab={true} label="HvA" />{' '}
          to further my skills as a Software Engineer. Things are going great at
          the moment, and I&apos;m projected to finish school in June of 2025
        </p>

        <ElongatedImage
          image={BlockchainPresentation}
          description="A group photo of our group project for blockchain semester"
        />

        <p>
          Besides coding, I love exploring the awesome mix of technology and
          creativity. I enjoy designing user interfaces, experimenting with
          different frameworks, and creating great experiences for users.
        </p>

        <p>
          When I&apos;m not coding or tinkering with new technologies, you can
          find me hanging out with friends or organizing fun events as the
          chairman of{' '}
          <HoverableLink
            href="https://www.svsit.nl/"
            newTab={true}
            label="SIT"
          />{' '}
          which is a student association.
        </p>

        <p>
          I&apos;m thrilled to connect with fellow developers and
          non-developers. Let&apos;s geek out about coding or chat about
          anything on{' '}
          <HoverableLink
            href="https://linkedin.com/in/dennismoes/"
            newTab={true}
            label="LinkedIn"
          />
          . Don&apos;t hesitate to reach out!
        </p>
      </section>
    </section>
  )
}

// export default function AboutPage() {
//   return (
//     <section className="max-w-4xl mx-auto text-xl">
//       <p className="text-4xl font-semibold mb-4">About</p>
//       <div className="space-y-8">
//         <p>
//           Hello stranger! My name is Dennis and I&apos;m a software engineering
//           student who is based near the charming city of Amsterdam. Currently
//           I&apos;m pursuing my Bachelor&apos;s degree at{' '}
//           <HoverableLink href="https://www.hva.nl" newTab={true} label="HvA" />,
//           which I am projected to receive in June 2025
//         </p>
//         <p>
//           I enjoy working on my side projects, particularly applications that
//           solve specific problems for individuals rather than attempting to be
//           flexible enough to accommodate everyone&apos;s needs. Here are the two
//           most notable projects:
//         </p>
//         <ElongatedImage
//           image={MeImage}
//           description="Me describing the plan for our group project"
//         />
//         <p>
//           Technology, computers, and software have always been a source of
//           inspiration for me. From a young age, I have been fascinated by the
//           endless possibilities that these fields offer.
//         </p>
//         <p>
//           My interest in coding was developed in 2018, when i got challenged by
//           a classmate to create a mobile app for him. So now I&apos;m proud to
//           say that I have recently (2021) graduated from{' '}
//           <HoverableLink
//             href="https://www.regiocollege.nl/"
//             newTab={true}
//             label="Regio College"
//           />{' '}
//           as a Software Engineer.
//         </p>

//         <p>
//           During my free time, I enjoy working on side projects that allow me to
//           explore new areas of coding and expanding my skillset. I am
//           particularly interested in web and backend development. However, I
//           also have a interest in design and I do try to incorporate this into
//           my projects.
//         </p>

//         <p>
//           When I&apos;m not busy with coding, I love to unwind and indulge in
//           some of my other passions. Playing games on my Nintendo Switch,
//           reading the newspaper, taking a walk through the park, or wachting AFC
//           Ajax are just a few of the activities that I enjoy in my free time.
//         </p>
//         <ElongatedImage
//           image={MeCoding}
//           description="Me sitting behind my desk coding"
//           isFullSize={false}
//           darkMode={true}
//         />
//         <p>Some more text</p>
//         <ElongatedImage
//           image={BlockchainPresentation}
//           description="Presenting our blockchain project"
//         />
//       </div>
//     </section>
//   )
// }

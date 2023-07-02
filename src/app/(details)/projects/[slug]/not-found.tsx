import Link from 'next/link'
import MeCoding from '@public/svg/me-coding.svg'
import ElongatedImage from '@/components/ui/elongated-image'

export default function NotFound() {
  return (
    <section>
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <ElongatedImage image={MeCoding} isFullSize={false} darkMode={true} />
        <p className="text-4xl">Oh no... We couldn&apos;t find this project</p>
        <p className="text-xl">
          We searched high and low for this project but we just couldn&apos;t
          find what you were looking for. Let&apos;s get you to a better place.
        </p>
        <Link
          href="/projects"
          className="flex max-w-fit mx-auto bg-primary-light hover:bg-primary-dark text-primary-dark hover:text-primary-light rounded-md transition-all duration-300 py-2 px-6"
        >
          Back to Projects
        </Link>
      </div>
    </section>
  )
}

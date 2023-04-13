import Link from 'next/link'
import HoverableLink from '../ui/hoverable-link'

export default function Footer() {
  function getYear(): number {
    const now = new Date()
    return now.getFullYear()
  }

  return (
    <footer className="bg-primary-light py-4 w-full inline-flex items-center justify-center flex-col">
      <div className="max-w-4xl w-full text-2xl text-left space-y-2">
        <p>
          I designed and built this website with NextJS. Check on{' '}
          <HoverableLink href="#" label="GitHub" /> for the code.
        </p>
        <p>Thanks for visitng & have a nice day!</p>
      </div>
    </footer>
  )
}

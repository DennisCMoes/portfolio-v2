import Link from 'next/link'
import HoverableLink from '../ui/hoverable-link'
import SocialButton from '../ui/social-button'

export default function Footer() {
  function getYear(): number {
    const now = new Date()
    return now.getFullYear()
  }

  return (
    <footer className="bg-primary-light p-4 w-full inline-flex flex-row items-center justify-between">
      <div>
        <p>{getYear()} | &copy; Dennis Moes. All rights reserved</p>
      </div>
      <div className="inline-flex gap-2">
        <HoverableLink
          href="https://github.com/kingdennis-crypto"
          label="GitHub"
        />
        <HoverableLink
          href="https://linkedin.com/in/dennismoes"
          label="LinkedIn"
        />
      </div>
    </footer>
  )
}

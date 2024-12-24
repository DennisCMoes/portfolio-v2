import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { NextFont } from 'next/dist/compiled/@next/font'
import Link from 'next/link'
import cn from 'classnames'

type Props = { font: NextFont }

export default function Footer({ font }: Props) {
  return (
    <footer
      className={cn(
        'text-primary-light flex flex-col items-center justify-center bg-card-light px-4 py-8 md:px-0',
        font.className
      )}
    >
      <div className="flex flex-row gap-2">
        <Link
          href={'https://www.linkedin.com/in/dennismoes/'}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md text-blue transition-colors duration-200 hover:text-orange"
        >
          <IconBrandLinkedin size={48} strokeWidth={1.7} />
        </Link>

        <Link
          href={'https://github.com/DennisCMoes/'}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md text-blue transition-colors duration-200 hover:text-orange"
        >
          <IconBrandGithub size={48} strokeWidth={1.7} />
        </Link>
      </div>
      <p className="pt-2">
        Copyright &copy; 2024 Dennis Moes. All rights reserved.
      </p>
    </footer>
  )
}

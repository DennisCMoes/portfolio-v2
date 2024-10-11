import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { NextFont } from 'next/dist/compiled/@next/font'
import Link from 'next/link'
import cn from 'classnames'

type Props = { font: NextFont }

export default function Footer({ font }: Props) {
  return (
    <footer
      className={cn(
        'flex flex-col items-center justify-center bg-footer px-4 py-16 md:px-0',
        font.className
      )}
    >
      <div className="flex flex-row gap-2">
        <Link
          href={'https://www.linkedin.com/in/dennismoes/'}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md text-primary transition-all duration-200 hover:scale-95 hover:opacity-60"
        >
          <IconBrandLinkedin size={48} strokeWidth={1.7} />
        </Link>

        <Link
          href={'https://github.com/DennisCMoes'}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md text-primary transition-all duration-200 hover:scale-95 hover:opacity-60"
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

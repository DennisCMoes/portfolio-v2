'use client'

import cn from 'classnames'
import Link from 'next/link'
import HamburgerIcon from 'hamburger-react'
import Image from 'next/image'

import { NextFont } from 'next/dist/compiled/@next/font'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { useWindowScroll } from '@mantine/hooks'

type Props = { font: NextFont }

export default function Navbar({ font }: Props) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLButtonElement>(null)

  const [scroll] = useWindowScroll()

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [hoveredItem, setHoveredItem] = useState<string | undefined>(undefined)

  const isCurrentUrl = (regex: RegExp): boolean => regex.test(pathname)

  const isHomeUrl = isCurrentUrl(/^\/$/gm)
  const isAboutUrl = isCurrentUrl(/about/gm)
  const isProjectsUrl = isCurrentUrl(/projects/gm)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(evt.target as Node)) {
        setMenuIsOpen(false)
      }
    }

    if (menuIsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuIsOpen])

  return (
    <nav
      className={cn(
        'mx-auto flex max-w-2xl items-center justify-between gap-4 bg-background-light p-4 md:px-0',
        font.className
      )}
    >
      <Link href="/">
        <Image src="/favicon.svg" height={30} width={30} alt="Website logo" />
      </Link>
      <button
        onClick={toggleMenu}
        ref={menuRef}
        className="text-primary-light dark:text-primary-dark bg-card relative rounded-md transition-colors duration-200 hover:text-secondary"
      >
        <HamburgerIcon toggled={menuIsOpen} size={24} />
        <motion.div
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: menuIsOpen ? 1.0 : 0.7,
            opacity: menuIsOpen ? 1.0 : 0,
          }}
          transition={{ easings: ['backInOut'], duration: 0.2 }}
        >
          <div
            className={cn(
              'absolute right-0 z-10 mt-1 flex w-40 origin-top-right flex-col overflow-hidden rounded-md border-2 border-secondary/25 bg-background-light shadow-lg dark:bg-background-dark',
              { 'pointer-events-none': !menuIsOpen }
            )}
          >
            <Link
              href={'/'}
              aria-disabled={isHomeUrl}
              tabIndex={isHomeUrl ? -1 : undefined}
              onMouseEnter={() => setHoveredItem('home')}
              onMouseLeave={() => setHoveredItem(undefined)}
              className={cn(
                'hover:text-primary-light dark:hover:text-primary-dark py-3 transition-colors duration-150 hover:bg-secondary/25',
                {
                  'text-primary-light dark:text-primary-dark': isHomeUrl,
                  'text-secondary':
                    !isHomeUrl || (hoveredItem && hoveredItem !== 'home'),
                }
              )}
            >
              Home
            </Link>
            <Link
              href={'/about'}
              aria-disabled={isAboutUrl}
              tabIndex={isAboutUrl ? -1 : undefined}
              onMouseEnter={() => setHoveredItem('about')}
              onMouseLeave={() => setHoveredItem(undefined)}
              className={cn(
                'hover:text-primary-light dark:hover:text-primary-dark py-3 transition-colors duration-150 hover:bg-secondary/25',
                {
                  'text-primary-light dark:text-primary-dark': isAboutUrl,
                  'text-secondary':
                    !isAboutUrl || (hoveredItem && hoveredItem !== 'about'),
                }
              )}
            >
              About
            </Link>
            <Link
              href={'/projects'}
              aria-disabled={isProjectsUrl}
              tabIndex={isProjectsUrl ? -1 : undefined}
              onMouseEnter={() => setHoveredItem('projects')}
              onMouseLeave={() => setHoveredItem(undefined)}
              className={cn(
                'hover:text-primary-light dark:hover:text-primary-dark py-3 transition-colors duration-150 hover:bg-secondary/25',
                {
                  'text-primary-light dark:text-primary-dark': isProjectsUrl,
                  'text-secondary':
                    !isProjectsUrl ||
                    (hoveredItem && hoveredItem !== 'projects'),
                }
              )}
            >
              Projects
            </Link>
            <hr className="h-px border-0 bg-secondary" />
            <Link
              href={'https://www.linkedin.com/in/dennismoes/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={isProjectsUrl}
              tabIndex={isProjectsUrl ? -1 : undefined}
              onMouseEnter={() => setHoveredItem('projects')}
              onMouseLeave={() => setHoveredItem(undefined)}
              className={cn(
                'hover:text-primary-light dark:hover:text-primary-dark flex flex-row items-center justify-center gap-2 py-3 transition-colors duration-150 hover:bg-secondary/25',
                {
                  'text-primary-light dark:text-primary-dark': isProjectsUrl,
                  'text-secondary':
                    !isProjectsUrl ||
                    (hoveredItem && hoveredItem !== 'projects'),
                }
              )}
            >
              <IconBrandLinkedin />
              LinkedIn
            </Link>
            <Link
              href={'https://github.com/DennisCMoes/'}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={isProjectsUrl}
              tabIndex={isProjectsUrl ? -1 : undefined}
              onMouseEnter={() => setHoveredItem('projects')}
              onMouseLeave={() => setHoveredItem(undefined)}
              className={cn(
                'hover:text-primary-light dark:hover:text-primary-dark flex flex-row items-center justify-center gap-2 py-3 transition-colors duration-150 hover:bg-secondary/25',
                {
                  'text-primary-light dark:text-primary-dark': isProjectsUrl,
                  'text-secondary':
                    !isProjectsUrl ||
                    (hoveredItem && hoveredItem !== 'projects'),
                }
              )}
            >
              <IconBrandGithub />
              GitHub
            </Link>
          </div>
        </motion.div>
      </button>
    </nav>
  )
}

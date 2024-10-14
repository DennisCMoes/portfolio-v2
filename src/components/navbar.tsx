'use client'

import cn from 'classnames'
import Link from 'next/link'
import HamburgerIcon from 'hamburger-react'

import { NextFont } from 'next/dist/compiled/@next/font'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

type Props = { font: NextFont }

export default function Navbar({ font }: Props) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLButtonElement>(null)

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const isCurrentUrl = (regex: RegExp): boolean => regex.test(pathname)

  const isHomeUrl = isCurrentUrl(/^\/$/gm)
  const isAboutUrl = isCurrentUrl(/about/gm)

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
        'mx-auto flex max-w-2xl justify-end gap-4 p-4 md:px-0',
        font.className
      )}
    >
      <button
        onClick={toggleMenu}
        ref={menuRef}
        className="relative rounded-md bg-card text-primary transition-colors duration-200 hover:text-secondary"
      >
        <HamburgerIcon toggled={menuIsOpen} size={24} />
        <motion.div
          className={cn(
            'absolute right-0 z-10 mt-1 flex w-40 origin-top-right flex-col overflow-hidden rounded-md border-2 border-secondary/25 bg-background shadow-lg',
            { 'pointer-events-none': !menuIsOpen }
          )}
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
          <Link
            href={'/'}
            aria-disabled={isHomeUrl}
            tabIndex={isHomeUrl ? -1 : undefined}
            className={cn(
              'py-3 transition-colors duration-150 hover:bg-secondary/25 hover:text-primary',
              {
                'font-bold text-primary': isHomeUrl,
                'font-medium text-secondary': !isHomeUrl,
              }
            )}
          >
            Home
          </Link>
          <Link
            href={'/about'}
            aria-disabled={isHomeUrl}
            tabIndex={isHomeUrl ? -1 : undefined}
            className={cn(
              'py-3 transition-colors duration-150 hover:bg-secondary/25 hover:text-primary',
              {
                'font-bold text-primary': isAboutUrl,
                'font-medium text-secondary': !isAboutUrl,
              }
            )}
          >
            About
          </Link>
        </motion.div>
      </button>
    </nav>
  )
}

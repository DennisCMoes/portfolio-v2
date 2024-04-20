import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react'
import CustomLink from '../customLink'

export default function Footer() {
  const getYear = (): number => new Date().getFullYear()

  // Inspiration: https://www.conordewey.com/

  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-2xl flex-row items-center justify-between py-4">
        {/* <p>{getYear()} | &copy; Dennis Moes. All rights reserved</p> */}
        <CustomLink
          customClass="font-medium"
          href="/"
          label="&copy; Dennis Moes"
          tabBehaviour="keep"
        />
        <div className="inline-flex flex-row gap-2">
          <CustomLink
            href="https://google.com"
            icon={<IconMail size={26} />}
            tabBehaviour="new"
          />
          <CustomLink
            href="https://google.com"
            icon={<IconBrandLinkedin size={26} />}
            tabBehaviour="new"
          />
          <CustomLink
            href="https://google.com"
            icon={<IconBrandGithub size={26} />}
            tabBehaviour="new"
          />
        </div>
      </div>
    </footer>
  )
}

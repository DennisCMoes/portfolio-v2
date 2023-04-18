import Link from 'next/link'
import Project from '@/types/Project'
import styles from '@/styles/project-card.module.css'

type Props = {
  icon: string
  title: string
  description: string
  href: string
}

export default function ProjectCard({ icon, title, description, href }: Props) {
  // TODO: Make sure it will always be no less and no more than 2 lines of text
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.btn} group cursor-pointer bg-primary-light dark:bg-primary-dark w-full aspect-square p-6 inline-flex items-start justify-between flex-col`}
    >
      {/* TODO: Add darker color that's just darker than the card */}
      <div className="bg-secondary-light dark:bg-secondary-dark transition-colors duration-300 p-4 rounded-md aspect-square text-center">
        <p className="text-5xl">{icon}</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl">{title}</p>
        <p className="-mb-8 md:group-hover:mb-0 transition-all duration-300 text-2xl md:text-3xl text-tertiary-light">
          {description}
        </p>
        <div className="text-tertiary-light dark:text-tertiary-dark group-hover:delay-100 delay-0 duration-300 opacity-0 md:group-hover:opacity-100 transition-opacity text-lg inline-flex flex-row items-center">
          <p>github.com</p>
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 w-4 h-4"
          >
            <path
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </Link>
  )
}

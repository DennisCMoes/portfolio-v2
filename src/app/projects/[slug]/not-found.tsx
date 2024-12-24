import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex flex-col items-center gap-4">
      <p>The project you&apos;re looking for was not found :(</p>
      <p className="text-9xl">404</p>
      <Link
        href="/"
        className="rounded-md border-2 border-primary px-4 py-2 font-bold transition-colors duration-300 hover:bg-primary hover:text-background-light"
      >
        Let&apos;s get you back home
      </Link>
    </div>
  )
}

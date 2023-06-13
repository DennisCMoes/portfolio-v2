import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <p className="text-4xl">Oops!</p>
      <p className="text-2xl font-light">
        Looks like the project you were looking for took a vacation. It&apos;s
        enjoying the sun. But don&apos;t worry, we&apos;ll send out a search
        party to bring it back. In the meantime, feel free to explore other
        projects{' '}
        <Link href="/projects" className="text-blue-600 underline">
          here
        </Link>{' '}
        and make yourself at home!
      </p>
    </div>
  )
}

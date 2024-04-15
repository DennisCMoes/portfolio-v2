import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return <p className="text-3xl">Hello!</p>
}

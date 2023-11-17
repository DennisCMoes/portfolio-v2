import { Children } from '@/types'

export default function DetailsLayout({ children }: Children) {
  return <section className="md:px-0 py-8 md:py-14">{children}</section>
}

import LayoutContainer from '@/components/layout/container'
import LinkButton from '@/components/linkButton'
import CustomText from '@/components/posts/customText'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <LayoutContainer size="m">
      <h1 className="text-5xl">
        👋 Hey, I'm Dennis
        <br />A backend engineer based in Amsterdam
      </h1>
      <p>
        I'm Dennis, a backend engineer with some frontend experience in
        Amsterdam, the Netherlands. I'm currently working on personal projects
        in my free time.
      </p>
      <LinkButton label="View work" destination="https://google.com" />
    </LayoutContainer>
  )
}

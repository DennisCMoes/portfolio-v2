import { SocialLinkData } from '@/types'

export default function SocialLink(social: SocialLinkData) {
  return <div className="group inline-flex flex-row">{social.icon}</div>
}

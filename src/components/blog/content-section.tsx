import Image from 'next/image'
import ContentText from './content-text'
import { ReactNode } from 'react'
import ContentImage from './content-image'

export default function ContentSection({ type, data }: any) {
  function returnContent(): ReactNode {
    switch (type) {
      case 'text':
        return <ContentText text={data.content} />
      case 'image':
        return <ContentImage href={data.href} />
      default:
        return <p>Something went wrong</p>
    }
  }

  return <div>{returnContent()}</div>
}

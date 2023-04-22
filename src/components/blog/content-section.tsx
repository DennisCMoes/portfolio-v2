import Image from 'next/image'
import ContentText from './content-text'
import { ReactNode } from 'react'
import ContentImage from './content-image'
import ContentCode from './content-code'

export default function ContentSection({ type, data }: any) {
  function returnContent(): ReactNode {
    switch (type) {
      case 'text':
        return <ContentText {...data} />
      case 'image':
        return <ContentImage {...data} />
      case 'code':
        return <ContentCode {...data} />
      default:
        return <p>Something went wrong</p>
    }
  }

  return <div>{returnContent()}</div>
}

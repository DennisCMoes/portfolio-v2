export default interface Props {
  icon: string
  title: string
  description: string
  slug: string
  content: ContentSection[]
}

interface ContentSection {
  content: string
  type: ContentType
}

type ContentType = 'text' | 'header' | 'image'

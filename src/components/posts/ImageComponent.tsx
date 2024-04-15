import Image from 'next/image'

type ImageProps = {
  url: string
}

export function ImageComponent({ url }: ImageProps) {
  // TODO: Add semantics such as description and alt
  return (
    <div className="relative w-full aspect-video">
      <Image
        src={url}
        alt="Hello"
        sizes="100%"
        style={{ objectFit: 'cover' }}
        className="rounded-md"
        fill
      />
    </div>
  )
}

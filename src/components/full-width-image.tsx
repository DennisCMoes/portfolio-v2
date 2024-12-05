import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export default function FullWidthImage({ src, alt }: Props) {
  return (
    <div>
      <div className="relative aspect-video w-full">
        <Image
          src={src}
          alt={alt}
          sizes="100%"
          style={{ objectFit: 'cover' }}
          className="pointer-events-none rounded-lg"
          fill
        />
      </div>
      <small className="text-secondary">{alt}</small>
    </div>
  )
}

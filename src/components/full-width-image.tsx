import Image from 'next/image'

type Props = {
  src: string
  alt: string
  objectFit?: 'cover' | 'contain'
}

export default function FullWidthImage({
  src,
  alt,
  objectFit = 'contain',
}: Props) {
  return (
    <div>
      <div className="relative aspect-[12/9] w-full">
        <Image
          src={src}
          alt={alt}
          sizes="100%"
          style={{ objectFit: objectFit }}
          className="pointer-events-none rounded-lg"
          fill
        />
      </div>
      <small className="text-secondary">{alt}</small>
    </div>
  )
}

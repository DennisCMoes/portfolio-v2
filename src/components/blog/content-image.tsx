import Image from 'next/image'

type Props = {
  href: string
  alt: string
}

export default function ContentImage({ href, alt }: Props) {
  return (
    <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
      <Image
        src={href}
        alt={alt}
        sizes="100%"
        style={{ objectFit: 'cover' }}
        fill
      />
    </div>
  )
}

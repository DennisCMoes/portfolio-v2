import Image from 'next/image'

type Props = {
  href: string
}

export default function ContentImage({ href }: Props) {
  return (
    <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
      <Image
        src={href}
        alt="IMAGE"
        sizes="100%"
        style={{ objectFit: 'cover' }}
        fill
      />
    </div>
  )
}

import Image from 'next/image'

type ImageProps = {
  url: string
}

export default function ImageComponent({ url }: ImageProps) {
  return <Image src={url} alt="Hello" height={100} width={400} />
}

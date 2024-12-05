type Props = {
  url: string
}

export default function VideoComponent({ url }: Props) {
  return <video autoPlay src={url} className="rounded-md"></video>
}

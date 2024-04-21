type VideoProps = {
  url: string
}

export function VideoComponent({ url }: VideoProps) {
  return <video autoPlay src={url} className="rounded-md"></video>
}

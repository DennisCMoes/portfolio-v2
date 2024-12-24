type Props = {
  text: string
}

export default function InlineCodeComponent({ text }: Props) {
  return (
    <span className="rounded-md bg-gray-200 px-1 py-0.5 text-red">{text}</span>
  )
}

type Props = {
  title: string
  subtitle: string
  date: string
}

export default function ExperienceCard({ title, subtitle, date }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div>
        <p className="text-2xl font-bold">{title}</p>
        <p>{subtitle}</p>
      </div>
      <p>{date}</p>
    </div>
  )
}

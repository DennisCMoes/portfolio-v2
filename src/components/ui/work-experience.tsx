type Props = {
  title: string
  description: string
  company: string
  start: string
  end: string
  tags: string[]
}

export default function WorkExperience({
  title,
  description,
  company,
  start,
  end,
  tags,
}: Props) {
  return (
    <div className="inline-flex flex-row w-full text-lg">
      <div className="w-2/6">
        <p>
          {start} - {end}
        </p>
      </div>
      <div className="w-4/6">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-base text-tertiary">{company}</p>
        <p className="text-base">{description}</p>
        <div className="inline-flex text-tertiary flex-row text-sm space-x-2">
          {tags.map((tag, index) => (
            <>
              <p key={index}>{tag}</p>
              {index !== tags.length - 1 && <p>•</p>}
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

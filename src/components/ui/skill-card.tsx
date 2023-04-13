type Props = {
  label: string
}

export default function SkillCard({ label }: Props) {
  function openToolbox() {
    alert('This will open a modal with these skills')
  }

  return (
    <button
      onClick={openToolbox}
      // bg-secondary-light text-primary-light
      className="hover:scale-105 transition-transform bg-primary-light inline-flex items-center justify-center aspect-square rounded-xl"
    >
      <p className="text-2xl">{label}</p>
    </button>
  )
}

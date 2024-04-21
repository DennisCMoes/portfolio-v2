export default function SectionTitle({ label }: { label: string }) {
  return (
    <div>
      <hr className="h-1 rounded-sm border-0 bg-gray-200" />
      <p className="mb-4 mt-1 text-xl font-medium">{label}</p>
    </div>
  )
}

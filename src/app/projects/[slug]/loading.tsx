export default function Loading() {
  return (
    <div className="animate-pulse max-w-4xl mx-auto py-12 px-4 md:px-0">
      <div className="space-y-4">
        <div className="max-w-xl h-12 bg-gray-200 rounded-sm" />
        <div className="w-36 h-4 bg-gray-200 rounded-sm" />
        <div className="w-48 h-4 bg-gray-200 rounded-sm" />
      </div>
      <div className="aspect-video bg-gray-200 my-4" />
      <div className="space-y-2 flex flex-col gap-2">
        <div className="inline-flex gap-2 w-full">
          <div className="w-1/5 h-4 bg-gray-200"></div>
          <div className="w-2/5 h-4 bg-gray-200"></div>
          <div className="w-3/5 h-4 bg-gray-200"></div>
        </div>
        <div className="inline-flex gap-2 w-full">
          <div className="w-2/6 h-4 bg-gray-200"></div>
          <div className="w-2/6 h-4 bg-gray-200"></div>
          <div className="w-2/6 h-4 bg-gray-200"></div>
        </div>
        <div className="inline-flex gap-2 w-full">
          <div className="w-3/6 h-4 bg-gray-200"></div>
          <div className="w-2/6 h-4 bg-gray-200"></div>
          <div className="w-1/6 h-4 bg-gray-200"></div>
        </div>
        <div className="inline-flex gap-2 w-full">
          <div className="w-2/12 h-4 bg-gray-200"></div>
          <div className="w-6/12 h-4 bg-gray-200"></div>
          <div className="w-4/12 h-4 bg-gray-200"></div>
        </div>
        <div className="inline-flex gap-2 w-full">
          <div className="w-8/12 h-4 bg-gray-200"></div>
          <div className="w-2/12 h-4 bg-gray-200"></div>
          <div className="w-2/12 h-4 bg-gray-200"></div>
        </div>
        <div className="inline-flex gap-2 w-full">
          <div className="w-1/12 h-4 bg-gray-200"></div>
          <div className="w-10/12 h-4 bg-gray-200"></div>
          <div className="w-1/12 h-4 bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}

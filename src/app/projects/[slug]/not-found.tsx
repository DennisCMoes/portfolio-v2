import LayoutContainer from '@/components/layout/container'

export default function NotFound() {
  return (
    <LayoutContainer
      size="m"
      classname="flex flex-col flex-grow items-center justify-center"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-blue-900">
        <div className="absolute bottom-4 right-4 flex flex-col items-end justify-end">
          <p className="text-9xl font-medium">404</p>
          <p>Not found</p>
        </div>
      </div>
      <div className="mt-4 max-w-lg text-center text-xl">
        <p>These are uncharted waters, this post can&apos;t be found,</p>
        <p>
          sail back to familiar shores, where there are{' '}
          <a href="/projects" className="text-blue-500 hover:underline">
            projects
          </a>{' '}
          plenty
        </p>
      </div>
    </LayoutContainer>
  )
}

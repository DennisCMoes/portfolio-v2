import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'The index page of my personal website',
}

export default function About() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <div>
        <div className="mb-2 flex text-secondary">
          <p className="font-medium uppercase">About</p>
        </div>
        <h1 className="text-5xl font-medium uppercase">
          Hi again, I&apos;m <br />
          Dennis
        </h1>
      </div>
      <div className="flex flex-col gap-4 font-medium">
        <p>
          Lorem ipsum exercitation culpa do eiusmod id eiusmod labore sint
          veniam in cillum. Sit veniam sunt, laboris proident, consequat eiusmod
          id ut aute proident officia. Sed incididunt, occaecat fugiat cillum
          consectetur quis ullamco mollit laborum, cillum officia.
        </p>
        <p>
          Lorem ipsum voluptate tempor, elit eu et irure, cupidatat veniam, quis
          ut mollit, voluptate et, fugiat qui dolor consectetur ut. Commodo
          tempor nostrud, sed veniam dolore pariatur minim laboris duis irure
          deserunt aliqua consectetur labore aliqua eiusmod aliquip veniam.
          Tempor ut aliquip excepteur dolore amet dolor excepteur irure sunt
          consectetur dolor dolore sed aute, officia reprehenderit exercitation
          exercitation.
        </p>
        <p>
          Lorem ipsum voluptate tempor, elit eu et irure, cupidatat veniam, quis
          ut mollit, voluptate et, fugiat qui dolor consectetur ut. Commodo
          tempor nostrud, sed veniam dolore pariatur minim laboris duis irure
          deserunt aliqua consectetur labore aliqua eiusmod aliquip veniam.
          Tempor ut aliquip excepteur dolore amet dolor excepteur irure sunt
          consectetur dolor dolore sed aute, officia reprehenderit exercitation
          exercitation.
        </p>
      </div>
    </div>
  )
}

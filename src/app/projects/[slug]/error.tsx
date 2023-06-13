'use client'

import { useEffect } from 'react'

type Props = {
  error: Error
  reset: () => void
}

export default function ProjectDetailError({ error, reset }: Props) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <p>Item not found</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

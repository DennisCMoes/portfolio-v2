import { getProjectBySlug } from '@/posts'
import { NextResponse } from 'next/server'

type Params = {
  slug: string
}

export async function GET(request: Request, context: { params: Params }) {
  const project = await getProjectBySlug(context.params.slug)
  return NextResponse.json(project)
}

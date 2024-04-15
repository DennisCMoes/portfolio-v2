import { getProjectBySlug } from '@/posts'
import { NextResponse } from 'next/server'

export async function GET() {
  const project = await getProjectBySlug('post-one')
  return NextResponse.json(project)
}

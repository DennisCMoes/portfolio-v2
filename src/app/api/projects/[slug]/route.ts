import { getProjectBySlug } from '@/posts'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
  slug: string
}

export async function GET(request: NextRequest, context: { params: Params }) {
  try {
    const project = await getProjectBySlug(context.params.slug)
    return NextResponse.json(project)
  } catch (ex) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }
}

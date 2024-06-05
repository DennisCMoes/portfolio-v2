import { getAllProjectsPaginated, getAllProjects } from '@/posts'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const projects = await getAllProjects()
    return NextResponse.json(projects)
  } catch (ex) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 404 })
  }
}

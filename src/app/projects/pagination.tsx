'use client'

import ProjectCard from '@/components/cards/projectCard'
import { AllProjectsReturn } from '@/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useState } from 'react'

export default function ProjectsPagination({
  projects,
}: {
  projects: AllProjectsReturn[]
}) {
  const { replace } = useRouter()

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  )

  const itemsPerPage = 4

  const [page, setInternalPage] = useState<number>(0)

  const getCurrentPage = useCallback(
    () => Number(params.get('page')) || 1,
    [params]
  )
  const getPaginatedAmount = useCallback(
    () => Math.ceil(projects.length / itemsPerPage),
    [projects.length]
  )
  const goToPage = (pageNum: number) => setPageParams(pageNum)

  const getPaginatedProjects = (currentPage: number): AllProjectsReturn[] =>
    projects.slice(
      itemsPerPage * currentPage,
      itemsPerPage * currentPage + itemsPerPage
    )

  const setPageParams = useCallback(
    (pageNum: number) => {
      params.set('page', pageNum.toString())
      replace(`${pathname}?${params.toString()}`)
    },
    [params, pathname, replace]
  )

  const nextPage = () => {
    const newPage = getCurrentPage() + 1
    if (newPage <= getPaginatedAmount()) {
      setPageParams(newPage)
    }
  }

  const previousPage = () => {
    const newPage = getCurrentPage() - 1
    if (newPage >= 1) {
      setPageParams(newPage)
    }
  }

  useEffect(() => {
    // Get the page number
    const currentPage = getCurrentPage()

    if (currentPage < 1) {
      setInternalPage(0)
      setPageParams(1)
    } else if (currentPage > getPaginatedAmount()) {
      setInternalPage(getPaginatedAmount() - 1)
      setPageParams(getPaginatedAmount())
    } else {
      setInternalPage(currentPage - 1)
    }
  }, [searchParams, getCurrentPage, getPaginatedAmount, setPageParams])

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {getPaginatedProjects(page).map((project: AllProjectsReturn) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <ul className="mt-2 inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={previousPage}
            className={`ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 ${getCurrentPage() <= 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-100 hover:text-blue-700'}`}
            disabled={page == 0}
          >
            Previous
          </button>
        </li>
        {[...Array(getPaginatedAmount())].map((_, index) => (
          <li
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`flex h-8 items-center justify-center border  px-3 leading-tight text-gray-500 ${
              page === index
                ? 'cursor-default border-blue-500 bg-blue-500 text-white'
                : 'cursor-pointer border-gray-300 bg-white hover:bg-blue-100 hover:text-blue-700'
            }`}
          >
            {(index + 1).toString()}
          </li>
        ))}
        <li>
          <button
            onClick={nextPage}
            className={`flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 ${getCurrentPage() >= getPaginatedAmount() ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-100 hover:text-blue-700'}`}
            disabled={page == getPaginatedAmount() - 1}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  )
}

function Loading() {
  return (
    <div>
      <p>Loading...</p>
    </div>
  )
}

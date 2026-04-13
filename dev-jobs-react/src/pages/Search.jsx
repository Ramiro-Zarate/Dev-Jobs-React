import { useEffect, useState } from 'react' 

import { Pagination } from '../components/Pagination'
import { SearchFormSection } from '../components/SearchFormSection'
import { JobCard } from '../components/JobCad'
import { JobListingCard } from '../components/JobListingCard'

import jobsData from '../data.json'
import { useRouter } from '../hook/useRouter'

const RESULTS_PER_PAGE = 4

const useFilters = () => {
  const [filters, setFilters] = useState(()=>{
    const params = new URLSearchParams(window.location.search)
    return {
      technology: params.get('technology') || '',
      location: params.get('location') || '',
      experienceLevel: params.get('level') || ''
    }
  })
  const [textToFilter, setTextToFilter] = useState(()=>{
    const params = new URLSearchParams(window.location.search)
    return params.get('text') || ''
  }) // Guardar los estaodos de cual es el texto que estamos filtrando
  const [currentPage, setCurrentPage] = useState(()=>{
    const params = new URLSearchParams(window.location.search)
    const page = Number(params.get('page'))
    return Number.isNaN(page) ? page : 1
  })

  const [jobs, setJobs] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  const {navigateTo} = useRouter() 
  
  useEffect(()=>{
    async function fetchJobs() {
      try {
        setLoading(true)

        const params = new URLSearchParams()
        if (textToFilter) params.append('text', textToFilter)
        if (filters.technology) params.append('technology', filters.technology)
        if (filters.location) params.append('location', filters.location)
        if (filters.experienceLevel) params.append('level', filters.experienceLevel)

        const offset = (currentPage - 1) * RESULTS_PER_PAGE
        params.append('limit', RESULTS_PER_PAGE)
        params.append('offset', offset)

        const queryParams = params.toString()

        const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
        const json = await response.json()

        setJobs(json.data)
        setTotal(json.total)
      } catch (error) {
        console.error('Error fetching jobs: ', error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [filters, textToFilter, currentPage])

  useEffect(()=>{
    const params = new URLSearchParams()
    if (textToFilter) params.append('text', textToFilter)
    if (filters.technology) params.append('technology', filters.technology)
    if (filters.location) params.append('location', filters.location)
    if (filters.experienceLevel) params.append('level', filters.experienceLevel)

    if (currentPage>1) params.append('page', currentPage)

    const newUrl = params.toString()
    ? `${window.location.pathname}?${params.toString()}`
    : window.location.pathname

    navigateTo(newUrl)
  }, [filters, textToFilter, currentPage, navigateTo])

  const totalPages = Math.ceil(total / RESULTS_PER_PAGE)
  
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1)
  }
  
  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter) // Actualizo en el estado el nuevo texto que tengo que filtrar. Se vuelve a renderizar el componente
    setCurrentPage(1)
  } 

  return {
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter
  }

}

export function SearchPage() {  
  const {
    loading,
    jobs,
    total,
    totalPages,
    currentPage,
    textToFilter,
    handlePageChange,
    handleSearch,
    handleTextFilter
  } = useFilters()

  const title = loading
   ? 'Cargando...' 
   : `Resultados: ${total}, Página: ${currentPage} - DevJobs`

  return (
    <>
    <main>
      <title>{title}</title>
      <SearchFormSection 
        initialText={textToFilter}
        onSearch={handleSearch}
        onTextFilter={handleTextFilter} />

      <JobListingCard jobs={jobs} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </main>
  </>
)
}



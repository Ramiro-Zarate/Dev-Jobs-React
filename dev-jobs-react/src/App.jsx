import { useState } from 'react' 
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { SearchFormSection } from './components/SearchFormSection'
import { JobCard } from './components/JobCad'
import { JobListingCard } from './components/JobListingCard'

import jobsData from './data.json'

const RESULTS_PER_PAGE = 4

function App() {
  const [textToFilter, setTextToFilter] = useState('') // Guardar los estaodos de cual es el texto que estamos filtrando
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState({
    technology: '',
    location: '',
    experienceLevel: ''
  })
  
  const jobFilteredByFilters = jobsData.filter(job => {

    return (
      (filters.technology === '' || job.data.technology === filters.technology)
      /* (filters.location === '' || job.ubicacion === filters.location),
      (filters.experienceLevel === '' || job.data.nivel === filters.experienceLevel) */
    )
  })

  const jobsWithTextFilter = textToFilter === '' 
  ? jobFilteredByFilters // devuelo el jobsData
  : jobFilteredByFilters.filter(job => {
    return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
  })
  
  const pagedResults = jobsWithTextFilter.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE)
  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)
  
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

  return (
    <>
    <Header />
    <main>
      <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

      <JobListingCard jobs={pagedResults} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </main>
    <Footer />
  </>
)
}

export default App

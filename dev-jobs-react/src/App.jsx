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
  const [filters, setFilters] = useState({})
  

  const jobsWithTextFilter = textToFilter === '' 
  ? jobsData // devuelo el jobsData
  : jobsData.filter(job => {
    return job.titulo.toLowerCase().includes(textToFilter.toLocaleLowerCase())
  })
  
  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)

  const pagedResults = jobsWithTextFilter.slice((currentPage - 1) * RESULTS_PER_PAGE, currentPage * RESULTS_PER_PAGE)
  

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleSearch = () => {

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

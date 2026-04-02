import { useState } from 'react' 
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { SearchFormSection } from './components/SearchFormSection'
import { JobCard } from './components/JobCad'
import { JobListingCard } from './components/JobListingCard'


function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <>
    <Header />
    <main>
      <SearchFormSection />

      <JobListingCard />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </main>
    <Footer />
  </>
)
}

export default App

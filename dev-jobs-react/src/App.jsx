import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { SearchFormSection } from './components/SearchFormSection'
import { JobCard } from './components/JobCad'

function App() {
  return (
    <>
    <Header />
    <main>
      <SearchFormSection />

      <section className="tarjetasResultado">
        <h3>Resultados de búsqueda</h3>
        <JobCard />
        <Pagination />
      </section>
    </main>
    <Footer />
  </>
)
}

export default App

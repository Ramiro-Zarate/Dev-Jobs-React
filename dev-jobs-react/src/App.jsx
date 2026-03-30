import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Pagination } from './components/Pagination'
import { SearchFormSection } from './components/SearchFormSection'


function App() {
  return (
    <>
    <Header />
    <main>
      <SearchFormSection />

      <section className="tarjetasResultado">
        <h3>Resultados de búsqueda</h3>
        <div className="job-listing">
        </div>
        <Pagination />
      </section>
    </main>
    <Footer />
  </>
)
}

export default App

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'
import { NotFondPage } from './pages/404'

import { useRouter } from './hook/useRouter'

function App() {
  const {currentPath} = useRouter()

  let page = <NotFondPage />

  if (currentPath === '/'){
    page = <HomePage />
  } else if (currentPath === '/search') {
    page = <SearchPage />
  }

  

  return (
    <>
    <Header />
    {page}
    <Footer />
  </>
)
}

export default App

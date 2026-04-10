import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'

import { Route } from './components/Rout'

function App() {
  return (
    <>
    <Header />
    <Route path='/' component={HomePage} />
    <Route path='/search' component={SearchPage} />
    <Footer />
  </>
)
}

export default App

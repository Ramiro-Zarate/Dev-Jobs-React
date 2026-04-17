import { Routes, Route } from 'react-router'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'
import { NotFoundPage } from './pages/404.jsx'
import { JobDetail} from './pages/Detail.jsx'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/search/:jobId' element={<JobDetail/>}/>
      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
    <Footer />
  </>
)
}

export default App

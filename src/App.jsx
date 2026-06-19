import { Routes, Route } from 'react-router'
import { lazy, Suspense } from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const NotFoundPage = lazy(() => import('./pages/404.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))
const PublishPage = lazy(() => import('./pages/Publish.jsx'))
const EditPage = lazy(() => import('./pages/Edit.jsx'))

function App() {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-content">
        <Suspense fallback={<div>Cargando...</div>}> {/* Añadir fallback mas estetico */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/search/:jobId' element={<JobDetail/>}/>
            <Route path='/search/:jobId/edit' element={<EditPage />}/>
            <Route path='/publish' element={<PublishPage />} />
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App

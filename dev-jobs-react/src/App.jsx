import { useState } from 'react' 
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { HomePage } from './pages/Home'
import { SearchPage } from './pages/Search'

function App() {
  return (
    <>
    <Header />
    {/* <HomePage /> */}
    <SearchPage />
    <Footer />
  </>
)
}

export default App

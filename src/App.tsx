import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Notebooks from './pages/Notebooks'
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

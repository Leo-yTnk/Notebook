import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Notebooks from './pages/Notebooks.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notebooks" element={<Notebooks />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

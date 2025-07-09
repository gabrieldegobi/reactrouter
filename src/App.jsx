import './App.css'

//config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar/NavBar'
import Product from './pages/product'

//components




function App() {


  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/*rota dinamica*/}
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

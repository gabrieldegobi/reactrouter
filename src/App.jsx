import './App.css'

//config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar/NavBar'
import Product from './pages/product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm/SearchForm'
import Search from './pages/Search'

//components




function App() {


  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/*rota dinamica*/}
          <Route path='/products/:id' element={<Product />} />
          {/*Nested Route*/}
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='company' element={<Navigate to="/about" />} />
          {/*search page */}
          <Route path='/search' element={<Search />} />
          {/*PAGINA 404 '* NO PATH' */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Productlist from './components/Productlist'
import ProductDetail from './components/ProductDetail'
import About from './components/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import productsArray from '../data/products'
import { useState } from 'react'



const App = () => {

  const [products, setProducts] = useState(productsArray)

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Productlist products={products} />} />
      <Route path="/productdetails" element={<ProductDetail products={products} />} />
      <Route path="/about" element={<About />}/>
      </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App

  



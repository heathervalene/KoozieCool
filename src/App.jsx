import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Productlist from './components/Productlist'
import About from './components/About'
import Nav from './components/Nav'
import Footer from './components/Footer'





const App = () => {

 

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Productlist />} />
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

  



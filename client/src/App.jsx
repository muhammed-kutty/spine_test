import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/home'
import Products from './components/Products'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     {/* <Router> */}
      <Header />
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
     </Routes>
     {/* </Router> */}
     </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/*pages*/
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

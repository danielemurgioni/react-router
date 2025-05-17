import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/*layout*/
import DefaultLayout from './layout/DefaultLayout'

/*pages*/
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

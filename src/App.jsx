import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/*layout*/
import DefaultLayout from './layout/DefaultLayout'

/*pages*/
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

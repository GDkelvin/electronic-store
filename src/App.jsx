import { useState } from 'react'
import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'
import Layout from './components/layout'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
          <Route path="product" element={<Product />} />
          <Route path="product/1" element={<ProductDetail />} />
        </Route>
      </Routes>

    </>
  )
}

export default App

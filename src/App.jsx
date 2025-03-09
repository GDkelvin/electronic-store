import { useState } from 'react'
import './App.css'
import Product from './pages/Product'
import Home from './pages/Home'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Payment from './pages/Payment'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/1" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart></Cart>}/>
          <Route path="/checkout" element={<Checkout></Checkout>}/>
          <Route path="/payment" element={<Payment></Payment>}/>
          
        </Route>
      </Routes>
    </>
  )
}

export default App

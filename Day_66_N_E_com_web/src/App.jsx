
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from './components/Products'
import Product_Detail from './components/Product_Detail'
import Navbar from './components/Navbar'
import Related_Product from './components/Related_Product'
import Search_Product from './components/Search_Product'
import Cart from "./components/Cart"
import { items } from './data'

const App = () => {
  const [data, setData] = useState(items)
  const [cart, setCart] = useState([])

  const addToCart =(product) =>{
    setCart([...cart,product]);
    console.log("my cart ",cart);
  }
  return (
    <>

      <BrowserRouter>
        <Navbar cart={cart} />

        <Routes>
          <Route path="/" element={<Products data={data} setCart={addToCart} />} />
          <Route path="/product/:id" element={<Product_Detail />} />
          <Route path='/search/:term' element={<Search_Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
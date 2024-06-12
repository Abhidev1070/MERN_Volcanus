
import React, { useContext } from 'react'
import ProductContext from './Context/ProductContext'
import ProductSlider from './components/ProductSlider'
import Product from './components/Product'
import Navbar from './components/Navbar'
import {BrowserRouter as Router ,Routes,Route, BrowserRouter} from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import AddProduct from './pages/AddProduct'


const App = () => {
    // const {}=useContext(ProductContext)
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Product/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/register' element={ <Register/>}/>
      <Route path='/addproduct' element={ <AddProduct/>}/>
    </Routes>
    </BrowserRouter>

    {/* <ProductSlider/> */}
    {/* <Product/> */}
    </>
  )
}

export default App
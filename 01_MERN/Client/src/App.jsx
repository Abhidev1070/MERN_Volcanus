
import React, { useContext } from 'react'
import ProductContext from './Context/ProductContext'
import ProductSlider from './components/ProductSlider'
import Product from './components/Product'

const App = () => {
    // const {}=useContext(ProductContext)
  return (
    <>
    <ProductSlider/>
    <Product/>
    </>
  )
}

export default App
import React, { useState } from 'react'
import Products from './Products'
import Navbar from './Navbar'
import { items } from './Data'

const App = () => {
  const [products, setproducts] = useState(items);
  return (
    <>
      <Navbar setproducts={setproducts} />
      <Products products={products} />

    </>


  )
}

export default App

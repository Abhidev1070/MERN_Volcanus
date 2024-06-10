
import React, { useContext } from 'react'
import ProductContext from './Context/ProductContext'

const App = () => {
    const {data}=useContext(ProductContext)
  return (
    <>
    App{data}
    </>
  )
}

export default App
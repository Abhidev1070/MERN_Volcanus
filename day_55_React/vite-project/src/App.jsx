
import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navber from './Navber'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import { items } from './Data'

const App = () => {
  const [product, setproduct] = useState(items)

  return (
    <>App
    <Router>
      <Navber/>
      <Routes>
      <Route path='/' element={<Products product={product} />}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/product/:id' element= {<ProductDetail />} />
      </Routes>
    </Router>
    {/* <Products/> */}
    
    </>
    



  )
}

export default App
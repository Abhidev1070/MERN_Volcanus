import React ,{ useState } from 'react'
import { items } from './Data'
import Products from './Component/Product'
import ProductDetail from './Component/ProductDetail'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nevbar from './Nevbar'
import comedy from './comedy'
import Action from './Action'

const App = () => {
  const [product, setproduct] = useState(items)

  return (
    <>App
    <Router >
      <Nevbar/>
      <Routes>
      <Route path='/' element={<Products product={product} />}/>
        <Route path='/comedy' element={<comedy/>}/>
        <Route path='/Action' element={<Action/>}/>
        <Route path='/product/:id' element= {<ProductDetail />} />
      </Routes>
    </Router>
   
    
    </>
  )
}

export default App

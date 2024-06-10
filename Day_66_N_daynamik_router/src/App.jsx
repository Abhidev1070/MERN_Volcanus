
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Product from './pages/Product';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
    <Router>

      <Routes>
        <Route  path='/' element={<Home/>}  />
        <Route  path='/product' element={<Product/>}  />
        <Route  path='/contact' element={<Contact/>}  />

      </Routes>

    </Router>
    
    </>
  )
}

export default App
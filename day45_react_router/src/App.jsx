import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navber from './pages/Navber'
import Camer from './components/Camer'
import Laptop from './components/Laptop'
import Mobile from './components/Mobile'
import Tablet from './components/Tablet'

const App = () => {
  return (
    <Router>
      <Navber/>
      <Routes>
        <Route path="/camer" element ={<Camer/>} />
        <Route path="/laplop" element ={<Laptop/>} />
        <Route path="/moblie" element ={<Mobile/>} />
        <Route path="/" element ={<Tablet/>} />
      </Routes>

    </Router>
  )
}

export default App

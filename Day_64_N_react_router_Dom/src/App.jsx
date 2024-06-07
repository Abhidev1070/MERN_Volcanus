import React from 'react'
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/career' element={<Career/>}/>
      </Routes>

    </Router>
    
    </>
  )
}

export default App

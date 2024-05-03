import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Skill from './Component/Skill'
import Projects from './Component/Projects'
import Contact from './Component/Contact'

const App = () => {
  return (
    <>
    <div className="container">

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Skill' element={<Skill/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
    
    </div>
    
    </>

  )
}

export default App
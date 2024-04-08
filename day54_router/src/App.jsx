import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Team from './pages/Team'
import Narbar from './components/Narbar'
import Footer from './components/Footer'

const App = () => {
  return (
   <Router>
    <Narbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Team' element={<Team/>}/>

    </Routes>
    <Footer/>

   </Router>
  )
}

export default App
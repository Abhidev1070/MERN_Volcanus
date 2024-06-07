import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="nav_bar">
        <div className="laft">WDM</div>

        <div className="right">
            <Link to={'/'} className="item">Home</Link>
            <Link to={'/about'} className="item">About</Link>
            <Link to={'/contact'} className="item">Contect</Link>
            <Link to={'/career'} className="item">career</Link>
        </div>
    </div>
    
    </>
  )
}

export default Navbar
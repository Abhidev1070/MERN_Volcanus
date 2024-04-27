import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <>
    
    <Link to={"/Home"} className="items">Home</Link>
    <Link to={"/About"} className="items">About</Link>
    </>
  )
}

export default Navber
import React from 'react'
import { Link } from 'react-router-dom'

const Nevbar = () => {
  return (
    <>
    
    <div style={{width:100 , height:50}}>
    <Link to={"/comedy"} className="items">Comedy</Link>
    <Link to={"/Action"} className="items">Action</Link>
    </div>
    </>
  )
}

export default Nevbar
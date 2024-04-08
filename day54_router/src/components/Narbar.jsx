import React from 'react'
import { Link } from 'react-router-dom'

const Narbar = () => {
  return (
    <>
    <div className="nav">
        <div className="left">WDM</div>
        <div className="right">

            <Link to={"/"} className="items">Home</Link>
            <Link to={"/About"} className="items">About</Link>
            <Link to={"/Contact"} className="items">Contact</Link>
            <Link to={"/Team"} className="items">Teams</Link>
        </div>

    </div>
    
    </>
  )
}

export default Narbar
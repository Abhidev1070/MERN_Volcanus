import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className="Nav">
        <div className="left">WDM</div>
        <div className="right">
            <Link to={"/"}className="items">tablets</Link>
            <Link to = {"/moblie"}className="items">Mobiles</Link>
            <Link to={"/laplop"}className="items">Laplop</Link>
            <Link to={"/camer"}className="items">Camers</Link>
        </div>

        


    </div>
   

  )
}

export default Navber
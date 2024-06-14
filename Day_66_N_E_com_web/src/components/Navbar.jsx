import React from 'react'
import img_3 from "../assets/img_3.jpg"
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className="nav_bar">
      <div className="beand">
        <img src={img_3} alt=""  />
      </div>
      <div className="search_bar">
      <FaSearch /><input type="text" placeholder="Search prodact" />
      </div>
      <div className="cart">
        <div className='cart_0'>o</div>

        < FaShoppingCart/>

      </div>
    </div>
    
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="nav_bar p-2 bg-black d-flex justify-content-between align-items-center  "
        
        style={{
            position:"sticky",
            top:"0"

        }}>
        <div className="left">Logo

        </div>
        <div className="right">
            <Link to={"/"} className="item btn btn-primary mx-3 ">Products</Link>
            <Link to={"/addproduct"} className="item btn btn-warning mx-3 ">AddProduct</Link>
            <Link to={"/login"} className="item btn  btn-secondary mx-3 ">Login</Link>
            <Link to={"/register"} className="item btn btn-info mx-3 ">Register</Link>
            <Link to={"/logout"} className="item btn btn-danger mx-3 ">Logout</Link>

        </div>
        </div>
    </>
  )
}

export default Navbar
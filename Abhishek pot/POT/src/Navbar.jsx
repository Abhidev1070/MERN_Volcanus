import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'



const Navbar = () => {
    return (
        <>
            <div className="container nav_bar"> 

            <div className='left nav_items'>Prortfolio</div>

            <div className="right container">
            <Link to={"/"} className=' nav_items'>Home</Link >
            <Link to={"/About"} className=' nav_items'>Experience</Link>
            <Link to={"/Skill"} className=' nav_items'>Skills</Link>
            <Link to={"/Projects"} className=' nav_items'>Projects</Link>
            <Link to={"/Contact"} className=' nav_items'>Contact</Link>
            </div>
            </div>

        </>
    )
}

export default Navbar
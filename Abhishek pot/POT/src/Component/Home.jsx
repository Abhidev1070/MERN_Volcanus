import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Pdf from '../Pdf/Resume.pdf'
// import hero from './data/hero.json'
import hero from '../assets/hero/hero.avif'
import Typed from "typed.js"



const Home = () => {
  const typedRef =useRef(null)
  useEffect(() => {
     const options = {
      strings:["MERN Stack Developer "," Crafting Scalable and Innovative Web Solution "," React.js "," Node.js ","MongoDB."],
      typeSpeed:50,
      backSpeed:50,
      loop:true,

     }
     const typed =new Typed(typedRef.current,options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
      <div className='home container'>



        <div className="leftHome">
          {/* <h1 ref={typedRef}></h1> */}
          <h2 ref={typedRef}></h2>

          <a href={Pdf} download='Resume.pdf' className='btn btn-outline-warning'>Download Rasume</a>
        </div>



        <div className="rightHome">
          <div className="img">
            {/* <img src={`./assets/${hero.imgSrc}`} alt="hero" /> */}
            <img src={hero} alt="hero" />

          </div>


        </div>


      </div>

    </>
  )
}

export default Home
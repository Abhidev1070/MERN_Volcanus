import React from 'react'
// Inline styling

const Hero = () => {
  const suprman = {
    backgroundColor:"yellow",
    fontSize:"1.2rem",
    border:'10px solid blue',
    padding:'20px',
    width:'750px',
    margin:'auto'
  }
  return (
    <div 
    style={suprman}
    // style={{backgroundColor:"blue",
    // fontSize:"1.2rem",
    // border:'2px solid yellow',
    // padding:'20px',
    // width:'750px',
    // margin:'auto'

    
    // }}
    >
        <h1>Abhishek</h1>
        <h1>person</h1>

    </div>
  )
}

export default Hero
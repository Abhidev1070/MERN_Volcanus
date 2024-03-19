import React from 'react'
import './Phone'

const Phone = () => {
    
    let phone ={
        name:"oneplus",
        price:4000.,
        ram:"6GB",
        Rom:"128GB",
    }
  return (
    <>
    <h1>this is data is coming</h1>
    <h1>{phone.name}</h1>
    <h1>{phone.price}</h1>
    <h1>{phone.Rom}</h1>
    <h1>{phone.ram}</h1>
    </>
  )
}

export default Phone
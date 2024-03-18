import React from 'react'
import Hero from './Hero'

const Laptop = () => {

    const lap ={
        brandName:"hp prodook 430 g2 ",
        processor:"Intel i5 6th",
        ram:"4gb",
        price:50000,
    }
  return (
    <div>
        <h1>{lap.brandName}</h1>
        <h1>{lap.price}</h1>

    </div>
    
  
  )
}

export default Laptop
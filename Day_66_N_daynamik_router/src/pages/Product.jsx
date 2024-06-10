import React from 'react'
import { items } from '../Date.js' 

const Product = () => {
  return (
    <>
        {items.map((e)=>(
            <div key={e.id}>
                <img src={e.imgSrc } alt="#" style={{width:'250px'}} />
                <h1>{e.title}</h1>
                <h3>{e.description}</h3>
            </div>

        ))}


    </>
  )
}

export default Product
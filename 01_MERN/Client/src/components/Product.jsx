import React, { useContext, useState } from 'react'
import ProductContext from '../Context/ProductContext'
import ProductSlider from './ProductSlider'
import {Link} from "react-router-dom"

const Product = () => {
    const {products} = useContext(ProductContext)
    
    
  return (
    <>
    <ProductSlider/>
    <div className='container'>
        <div className="row d-flex justify-content-center align-items-center">

        {
            products.map((data)=>(
                <div key={data._id} className='col-md-4 my-3 p-3  text-center'>
                <Link to={`/product/${data._id}`}>
                    <img src={data.imgSrc} alt="" style={{width:"250px",
                        height:"250px",
                        borderRadius:"10px",
                        border:"2px solid yellow"
                        }} />
                </Link>
                <h3 className='mt-3'>{data.title}</h3>

            </div>)
       ) }
    </div>

    </div>
    </>
  )
}

export default Product
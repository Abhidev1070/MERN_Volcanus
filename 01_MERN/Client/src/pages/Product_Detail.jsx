import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../Context/ProductContext'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product_Detail = () => {
    const {url} = useContext(ProductContext);
    const {id} =useParams();
    const [product,setProduct]=useState({})
    useEffect(() => {
     // fecht product by id 

const fetchProductById = async (id) => {
    const api = await axios.get(`${url}/product/detail/${id}`, {
      headers: {
        "Content-Type": "Application/json",
      },
      withCredentials: true,
    });
    console.log(" fecthe product by id ", api.data.product);
    setProduct(api.data.product);  
  }
  fetchProductById(id);
    }, [id])
    
  return (
    <div>
<div className="container d-flex justify-content-around ">
    <div className="img">
        <img src={product.imgSrc} alt="" style={{width:"250px",height:"250px", border:"2px solid yellow",borderRadius:"10px"}} />

        </div>
        <div className='des text-center'>
            <h2>{product.title}</h2>
            <h2>{product.description}</h2>
            <h3>{product.price} {" "} {"$"}</h3>
            
            <div className='my-3'>
            <button className='btn btn-warning mx-3'>Add to cart </button>
            <button className='btn btn-danger mx-3'>By now</button>
            </div>

        </div>
</div>

    </div>
  )
}

export default Product_Detail
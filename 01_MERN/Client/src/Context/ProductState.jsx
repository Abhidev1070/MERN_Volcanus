import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import axios from 'axios'


const ProductState = (props) => {

  const [products, setProducts] = useState([])

  const url = "http://localhost:5000/api";

  useEffect(() => {
const fetchProduct = async ()=>{
  const api = await axios.get(`${url}/product/get`,{
    headers:{
      " content-type":" Application/json",
    },
    withCredentials:true,
  });
  console.log(" fecthe Data",api.data.product);
  setProducts(api.data.product);
}
fetchProduct();
  }, [])
  
  return (
    <ProductContext.Provider 
    value={{products}}>

      {props.children}

    </ProductContext.Provider>
  )
}

export default ProductState
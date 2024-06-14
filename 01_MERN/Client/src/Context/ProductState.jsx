import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'
import axios from 'axios'


const ProductState = (props) => {

  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState()

  const url = "http://localhost:5000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/get`, {
        headers: {
          "Content-Type": " Application/json",
        },
        withCredentials: true,
      });
      console.log(" fecthe Data", api.data.product);
      setProducts(api.data.product);
    }
    fetchProduct();
  }, [reload])

  // add product 
  const addProduct = async (
    title,
    description,
    price,
    qty,
    imgSrc,
    category,
  ) => {
    const api = await axios.post(`${url}/product/add`, {
      title,
      description,
      price,
      qty,
      imgSrc,
      category,

    },
    {
      headers: {
        "Content-Type": " Application/json",
      },
      withCredentials: true,
    }
  
  );
  setReload(!reload)
  return api.data

    // console.log(api);
  }




  return (
    <ProductContext.Provider
      value={{ products,addProduct,url }} >

      {props.children}

    </ProductContext.Provider>
  )
}

export default ProductState
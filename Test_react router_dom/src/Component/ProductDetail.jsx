import React from 'react'
import { items } from '../Data';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  const {id} = useParams();
  const data = items.filter((products)=>products.id==id);
  console.log(data);

  return (
    <>
    <img src={data[0].imgSrc} />
    <h3>{data[0].title}</h3>
    <h3>{data[0].Actor}</h3>
    <h3>{data[0].category}</h3>
    <h3>{data[0].releasedata}</h3>
    
    </>
    
  )
}

export default ProductDetail
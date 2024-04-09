import React from 'react'
import { items } from '../Data'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <Products product={items}/> 
    </div>
  )
}

export default Home
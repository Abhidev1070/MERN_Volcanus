import React, { useEffect, useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";

import { items } from "./Data";
import  FormHandling from "./FormHandling";
import Movies from "./Movies";


const App = () => {
  const [product, setproducts] = useState(items);
useEffect(()=>{
  document.title = product[1].category
console.log("This is useEffect hook");

},[product]);// dependencty array

  return (

    <>
      <Navbar setproducts={setproducts} />
      {/* <Products product={product} /> */}

      {/* <FormHandling/> */}
      <Movies/>
    </>
    
  );
};

export default App;
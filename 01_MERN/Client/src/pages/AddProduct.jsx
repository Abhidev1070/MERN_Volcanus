import React, { useContext } from 'react'
import { useState } from 'react';
import ProductContext from '../Context/ProductContext';
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate();
  const {addProduct} = useContext(ProductContext)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    qty: "",
    imgSrc: "",
    category: "",

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };
  const {
     title, description,price,qty,imgSrc,category, } = formData;


  const submitHandler = async (e) => {
    e.preventDefault();
    if (formData.category == "--Select Product Category--"||formData.category.length == 0) {
      alert("Please choose catgory")
    }
    else {
      console.log("formDAta", formData);
       const res =await addProduct(title, description,price,qty,imgSrc,category);
       alert(res.message)
       if(res.success){
        navigate("/")

       }
    }

  }
  return (
    <>
      <div className="container mx-auto my-3 p-5" style={{ width: '600px', border: "1px solid yellow" }}>

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="htmlform-label">Title</label>
            <input type="text" className="form-control bg-black text-light " required
              value={formData.title} name='title' onChange={handleChange}
            />

          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="htmlform-label">Description</label>
            <input type="text" className="form-control bg-black text-light" required value={formData.description} name='description' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="htmlform-label">Category</label>
            <select className="form-select bg-black text-light" aria-label="Default select example" required value={formData.category} name='category' onChange={handleChange}>
              <option selected> --Select Product Category--</option>
              <option value="1">Mobiles</option>
              <option value="2">Tablets</option>
              <option value="3">Laptops</option>
              <option value="3">Comra</option>
              <option value="3">Lap</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="htmlform-label">Price</label>
            <input type="text" className="form-control bg-black text-light" required value={formData.price} name='price' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="htmlform-label">Quantity</label>
            <input type="text" className="form-control bg-black text-light" required value={formData.qty} name='qty' onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlfor="exampleInputPassword1" className="htmlform-label">ImgSec</label>
            <input type="text" className="form-control bg-black text-light" required value={formData.imgSrc} name='imgSrc' onChange={handleChange} />
          </div>

          <div className="d-grid col-6 mx-auto">
            <button type="submit" className="btn btn-primary">AddProduct</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default AddProduct
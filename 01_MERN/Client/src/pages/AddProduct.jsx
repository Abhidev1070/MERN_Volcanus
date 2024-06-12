import React from 'react'

const AddProduct = () => {
  return (
    <>
    <div className="container mx-auto my-3 p-5"  style={{width:'600px', border:"1px solid yellow"}}>

    <form>
  <div className="mb-3">
    <label  className="htmlform-label">Title</label>
    <input type="text" className="form-control bg-black text-light " required  />
    
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="htmlform-label">Description</label>
    <input type="text" className="form-control bg-black text-light" required/>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="htmlform-label">Category</label>
    <select className="form-select bg-black text-light" aria-label="Default select example">
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
    <input type="text" className="form-control bg-black text-light"required />
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="htmlform-label">Quantity</label>
    <input type="text" className="form-control bg-black text-light" required/>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="htmlform-label">ImgSec</label>
    <input type="text" className="form-control bg-black text-light"required />
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
import React from 'react'

const Products = ({ data }) => {
  return (
    <div>

      <div className="container">
        <div className="row">
          {data.map((Product) => (
            <div key={Product.id} className='col-md-4 my-3'>
            
              <div className="card bg-dark text-light" style={{width: "18rem"}}>
                <div className=' d-flex justify-content-center align-content-center p-3'>
                <img src={Product.imgSrc} className="card-img-top" alt="#" style={{width:"220px", height:"220", borderRadius:"10px", border:"2px solid yellow"}}/>

                </div>




                  <div className="card-body text-center">
                    <h5 className="card-title">{Product.title}</h5>
                    <p className="card-text">{Product. description}</p>
                    <button className='btn btn-primary mx-3'>{Product.price}</button>
                    <button className='btn btn-warning'>Add to cart</button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
import React, { useState } from 'react'


const Products = ({products}) => {
  
  return (
    <div  className='container'>
        <div className="row">

            {products?.map((p)=>
            <div key={p.id} className='col-md-4 col-lg-4 my-3'>

                <div className='card bg-black text-center'
                style={{width:"18"}}>
                    <div className='d-flex justify-content-center align-content-center p-3' >
                        <img src={p.imgSrc} 
                        className='card-img-top' 
                        alt="..."
                        style={{
                            width:"120px"
                        }}/>

                    </div>
                    <div className='card-body gb-dark text-light'>
                        <h5 className='card-title'>{p.title}</h5>
                        <p className='card-text'>{p.description}</p>
                        <a href="#" className='btn.btn-primary '>{p.priec}</a>
                        <a href="#">{p.n}</a>
                    </div>
                    
                </div>
            </div>
            )}
        </div>
        <navbar/>


    </div>
    
  )
}

export default Products
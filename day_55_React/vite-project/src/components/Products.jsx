import React from 'react'
import { Link } from "react-router-dom";

const Products = ({product}) => {
    return (
        <>
            {product.map((p) => (
                <Link to={`/product/${p.id}`} key={p.id} >
                    <div>
                        <div >
                            <img src={p.imgSrc}  />
                        </div>

                        <div >
                            <h5 >{p.title}</h5>
                            <p >{p.description}</p>
                        </div>

                    </div>
                </Link>
            ))}



        </>

    )
}

export default Products
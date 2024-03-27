import React from 'react'
import { items } from './Data/'

const Navbar = ({ setproducts }) => {
    const filterByCategory = (cat) => {
        const filterdData = items.filter((data) => data.category === cat);
        // console.log(filterdData);
        setproducts(filterdData);
    }
    return (
        <>
            <div className='nav p-3 d-flex justify-content-center'>
                <div className="btn btn-secondary mx-3" onClick={()=>setproducts(items)}>no filter</div>
                <div className="btn btn-primary"></div>
                <div className="btn btn-warning" onClick={()=>filterByCategory("mobiles")}> {">"}mobail</div>
                <div className="btn btn-secondary"onClick={()=>filterByCategory("laptops")}>laptop</div>
                <div className="btn btn-secondary">8000</div>
                <div className="btn btn-secondary">50000</div>

            </div>
        </>
    )
}

export default Navbar
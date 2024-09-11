import React, { useState } from 'react'
import { Data } from './Data'

const Index = (props) => {
    const [images, setimages] = useState(Data);

    const filterbyCategory = (cat) =>{
        const result = Data.filter((e)=>e.catcategory==cat);
        setimages(result)
        console.log("image result= ",result);
    }

    return (
        <>
        <button onClick={()=>filterbyCategory("A")}>{props.tital}</button>
        <button  onClick={()=>filterbyCategory("B")}>B</button>
        <button  onClick={()=>filterbyCategory("C")}>C</button>
        <button  onClick={()=>filterbyCategory("D")}>D</button>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexWrap:'wrap',
                gap:"5px"
            }}>

                {images.map((e) => (
                    <div key={e.id}>

                        <img src={e.img} alt="" style={{border:'2px solid #fff', borderRadius:"10px", width:"350px", height:"350px"}}/>
                    </div>

                ))}
            </div>

        </>
    )
}

export default Index
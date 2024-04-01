import React from 'react'

const Todos = ({data}) => {
  return (

   <>

    
    <div className='container text-center my-5' style={{width:"700px"}} >
    {data.map((d)=>(
        <div key={d.id} className='bg-danger p-2  m-3'
        style={{borderRadius:"10px"}}
        >

            <h3>{d.title}</h3>
            <p>{d.description}</p>
            <div className='container'>
                <button className='btn btn-warning mx-3'>Edit</button>
                <button className='btn btn-info mx-3'>Dalete</button>
            </div>

        </div>
    )
     
    )}

    </div>

   
   </>
  )
}

export default Todos
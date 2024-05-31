import React, { useState } from 'react'

const Todos = ({todos}) => {
    
  return (
    <div className='container '>
    {todos.map((e)=>(
        <div key={e.id} className=' bg-success p-3 my-3 text-center con'>
            <div>{e.name}</div>
            <p>{e.age}</p>
            <p>{e.Movie}</p>
            <div>
                <button className="btn btn-warning mx-2">Edit</button>
                <button className="btn btn-danger mx-2">Delete</button>
            </div>
        </div>

    ))}

    </div>
  )
}

export default Todos
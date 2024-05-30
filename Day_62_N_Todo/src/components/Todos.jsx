import React, { useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState(
        [
            { id: 1, name: "Alice", age: 25, occupation: "Engineer", Movie: "Inception" },
            { id: 2, name: "Bob", age: 30, occupation: "Designer", Movie: "The Matrix" },
            { id: 3, name: "Charlie", age: 35, occupation: "Teacher", Movie: "Interstellar" },
            { id: 4, name: "David", age: 40, occupation: "Doctor", Movie: "The Godfather" },
            { id: 5, name: "Eve", age: 28, occupation: "Artist", Movie: "Amélie" }
        ]    
    )
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
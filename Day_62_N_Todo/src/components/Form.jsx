import React, { useState } from 'react'

const Form = ({addTodo}) => {
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(Math.random(),title,description)
        // alert(`your to do has been add...`);
        setTitle("");
        setdescription("");
    }
    return (

        <>
        <div className='containar text-center my-5'>

        

            <form onSubmit={submitHandler}>
                title: {''}<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
               
                description:{''} <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} />
                {/* <input type="submit" value='submit' /> */}
                <button className='btn btn-warning my-2'> submit</button>
            </form>
            </div>

        </>

    )
}

export default Form
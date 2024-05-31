import React, { useState } from 'react'

const Form = ({addTodo}) => {
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(Math.random(),title,description)
        alert(`your to do has been add...`)
        setTitle("")
        setdescription("")
    }
    return (

        <>

            <form onSubmit={submitHandler}>
                title: {''}<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br /><br />
                description:{''} <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} /><br /><br />
                <input type="submit" value='submit' />
            </form>

        </>

    )
}

export default Form
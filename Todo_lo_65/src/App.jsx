
import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [data, setData] = useState([])

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [id, setId] = useState("")
  useEffect(() => {
    const temp = data.filter((e) => e.id == id)
    setname(temp[0]?.name);
    setemail(temp[0]?.email);

  }, [id])



  const submitHandler = (e) => {
    e.preventDefault();
    //edit logic
    if (id != "") {
      const temp = data.filter((e) => e.id == id);

      setname(temp[0].name);
      setemail(temp[0].email);

      let newArray = data;
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].id == temp[0].id){
            (newArray[i].id = temp[0].id),
            (newArray[i].name = name),
            (newArray[i].email = email),

      }
      }
      setData(newArray);
      setname("");
      setemail("");
    }
    else {
      const addTodo = (id, name, email) => {
        const obj = {
          id,
          name,
          email
        };
        setData([...data, obj]);
      };

    }

    addTodo(Math.random(), name, email)

    setname("");
    setemail("");
  }
  const deleta = (id) => {
    setData(data.filter((e) => e.id != id))

  }

  return (
    <>
      <div className='form_div' onSubmit={submitHandler}>

        <form className='input_div'>
          <input type="text" placeholder='name' value={name} onChange={(e) => setname(e.target.value)} />
          <input type="text" placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} />

          <button>Add</button>
        </form>

        <div className='displya'>

          {data.map((e) => (
            <h1 key={e.id}>
              <div> Name:{e.name}</div>
              <div>Email:{e.email}</div>
              <button>Edit</button>
              <button onClick={() => deleta(e.id)}>Delete</button>

            </h1>

          ))}


        </div>

      </div>



    </>
  )
}

export default App
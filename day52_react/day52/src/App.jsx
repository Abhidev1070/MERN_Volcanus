import React, { useState } from 'react'
import Form from'./components/Form'
import Todos from './components/Todos'



const App = () => {
  const [data, setData] = useState([
    { id: 1, title: 'MERN Batch -2 ', description: 'this is Batch vray Talented' },
    { id: 2, title: 'Avegers Infinity war ', description: 'this is Batch vray Talented' }, ,
    { id: 3, title: ' Chennai Express', description: 'this is Batch vray Talented' },
  ]);
  // Add todo

  const addTodo = (title, description)=>{
    const obj={ id: Math.random(), title, description, }

    setData([...data,obj])

  };

  return (
    <>
   
    <Form addTodo={addTodo}/>
      <Todos data={data} />
    
    </>
  )
}

export default App;
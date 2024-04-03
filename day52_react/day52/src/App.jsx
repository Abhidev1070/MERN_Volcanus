import React, { useState } from 'react'
import Form from'./components/Form'
import Todos from './components/Todos'



const App = () => {
  const [data, setData] = useState([
    { id: 1, title: 'MERN Batch -2 ', description: 'this is Batch vray Talented' },
    { id: 2, title: 'Avegers Infinity war ', description: 'this is Batch vray Talented' }, ,
    { id: 3, title: ' Chennai Express', description: 'this is Batch vray Talented' },
  ]);
  const [editdeta, seteditdeta] = useState([])
  // Add todo

  const addTodo = (title, description)=>{
    const obj={ id: Math.random(), title, description, }

    setData([...data,obj])

  };
  /// Delete todo 
  const deleteTodo =(id)=>{
    const filteredDeta = data.filter((d)=>d.id != id)
    setData(filteredDeta)
    console.log(filteredDeta);
  };
///Edit Todos

// const editTodo =(id)=> seteditdeta(data.filter((d)=>d.id==id));
 
 



  return (
    <>
   
    <Form addTodo={addTodo} data={data} editedData={editedData}/>
      <Todos data={data}  setData={setData} deleteTodo={deleteTodo}/>
    
    </>
  )
}

export default App;
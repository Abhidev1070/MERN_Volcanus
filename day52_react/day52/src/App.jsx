import React, { useState } from 'react'
import Form from'./components/Form'
import Todos from './components/Todos'



const App = () => {
  const [data, setData] = useState([
    { id: 1, title: 'MERN Batch -2 ', description: 'this is Batch vray Talented' },
    { id: 2, title: 'Avegers Infinity war ', description: 'this is Batch vray Talented' }, ,
    { id: 3, title: ' Chennai Express', description: 'this is Batch vray Talented' },
  ])
  return (
    <>
    <Form/>
      <Todos data={data} />
    
    </>
  )
}

export default App;
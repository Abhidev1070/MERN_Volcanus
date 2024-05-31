import { useState } from 'react'
import Todos from './components/Todos'
import Form from './components/Form'


const App = () => {
  const [todos, setTodos] = useState(
    [
        { id: 1, title: "Alice", age: 25, description: "Engineer", Movie: "Inception" },
        { id: 2, title: "Bob", age: 30, description: "Designer", Movie: "The Matrix" },
       
    ]    
)
const addTodo =(id,title,desc)=>{
  const obj ={
    id,
    title,
    age,
    description:desc,
    Movie
  }
  setTodos([...todos,obj])
}
  return (
    <div>
      <Form addTodo={addTodo}/>
      <div className="btn btn-warning" onClick={()=>addTodo(3,'infinity war','one this')}>add
       

      </div>
      <addTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
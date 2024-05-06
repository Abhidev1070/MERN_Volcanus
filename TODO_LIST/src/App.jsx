import React, { useState } from 'react'
import TodoInput from './componet/TodoInput'
import TodoList from './componet/TodoList'
import DataFetch from './componet/DataFetch'
// import { useEffect } from 'react'
const App = () => {
//   const [data, setdata] = useState([])
//   useEffect(() => {
//     const fetchData = async() => {
//       const api = await fetch ("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
//       const res= await api.json();
//       console.log(res.meals);
//       setdata(res.meals)
//      }
//      fetchData();
//   }, [])
  return (
    <>
    {/* // {data.map((e)=>( */}
    {/* //   <h1>{e.strMeal}</h1> */}
    {/* // ))} */}
    {/* <TodoInput/> */}
    {/* <TodoList/> */}
    <DataFetch/>
    
    </>
  )
}
export default App
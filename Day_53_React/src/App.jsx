import { useEffect, useState } from 'react'
import ShowData from './ShowData'

const App = () => {
  const [data, setData] = useState([])
useEffect(() => {
 const FetchData =async ()=>{
  const api = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await api.json()
  // console.log(data);
  setData(data);
 }
 FetchData();

}, [])


  return (
   <>
   <h1>Fetching data from API</h1>
   <h1> </h1>
   <ShowData data={data}/>
   
   </>

  )
}

export default App
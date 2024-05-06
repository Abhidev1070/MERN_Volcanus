import { useEffect, useState } from 'react'

const DataFetch = () => {
   const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
            const Abhi =await api.json();
            console.log(Abhi.meals);
            setData(Abhi.meals);
          }
          fetchData();
    
    }, [])
    
  return (
    <>
    {Data.map((p)=>(
        <h1>{p.strMeal}</h1>
    ))}
    
    </>
  )
}

export default DataFetch
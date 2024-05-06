import React, { useEffect, useState } from 'react'

const TodoInput = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        const fetchData = async()=>{
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
            const Abhi = await api.json();
            console.log(Abhi.meals);
            setData(Abhi.meals);
        }
        fetchData();
    }, [])

    
  return (
    <>
    {Data.map((e)=>(
        <h1>{e.strMeal}</h1>
    ))}
    
    </>
  )
}

export default TodoInput

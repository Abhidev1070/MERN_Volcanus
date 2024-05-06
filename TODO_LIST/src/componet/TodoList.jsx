import React, { useState } from 'react'
import { useEffect } from 'react'

const TodoList = () => {
    const [Data, setData] = useState([]);
    // console.log(Data);
    useEffect(() => {
        const fatchData = async()=> { 
            const api = await fetch ("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
            const Abhi = await api.json();
            console.log(Abhi.meals);
            
            setData(Abhi.meals);
            
         }
         fatchData();
      
    }, [])
    
  return (
    <>
    {Data.map((p)=>(

        <>
        <h1>{p.strMeal}</h1>
        <img src={p.strMealThumb} alt="#" />
        
        </>

    ))}
    </>
  )
}

export default TodoList
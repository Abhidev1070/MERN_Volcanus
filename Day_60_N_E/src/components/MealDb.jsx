import React, { useEffect, useState } from 'react'

const MealDb = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
      const FetchData =async()=>{
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        const data = await api.json();
        console.log(data);
        setdata(data.meals)

      }
      FetchData();
      
    
     
    }, [])
    
  return (
    <div>
        <h1>data fetch</h1>
        {data.map((e)=>(
            <div key={e.id}>
                <h1>{e.meals}</h1>
                <h1>{e.strMeal}</h1> 
                <h1>{e.strMealThumb}</h1>

            </div>
        ))}

    </div>
  )
}

export default MealDb
import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        const FetchData = async()=>{
            const api = await fetch('https://jsonplaceholder.typicode.com/users')
            const Abhi =await api.json();
            setdata(Abhi);
            console.log(Abhi);
            

        }   
        FetchData();
    }, [])
    
  return (
    <>
    <h1>FetchData open console </h1>
    {data.map((e)=>(
        <>
        <h1 key={e.id}>
        <h1>{e.address}</h1>
        <h1>{e.name}</h1>
        <h1>{e.email}</h1>
        </h1>
        

        </>
        

    ))}

    
    </>
  )
}

export default FetchData
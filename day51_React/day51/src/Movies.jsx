import React,{useState} from 'react'

const Movies = () => {
    const [name,setName]= useState("");
    const [acter,setActer]= useState("");
    const [data,setData]= useState("");
    const [flag,setflag]=useState(false)
    

    const onSubmit =(e)=>{
        e.preventDefault()
        alert ("you sumit");
        console.log(`name =${name} /n Acter = ${acter} /n Data = ${data}`);
        setflag(true)
    }


  return (
   <>
   <form className="container" onSubmit={onSubmit}>
    <h1>Movie</h1>

    MovieName:- <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
    <br />
    <br />

    MovieActer:- <input type="name"  value={acter}  onChange={(e)=>setActer(e.target.value)} />
    <br /><br />

    MovieData:- <input type="Data" value={data}  onChange={(e)=>setData(e.target.value)}/>
    <br /><br />

    <button className='btn btn-warning'> Submit</button>


   </form>
   {flag && (
    <>
    <h1>name={name}</h1>
    <h1>Emali = {emali}</h1>
    <h1> password={passWord}</h1>

    </>
   )

   }

   </>
  )
}

export default Movies
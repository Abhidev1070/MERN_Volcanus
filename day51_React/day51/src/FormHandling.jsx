import React ,{useState} from 'react'


const FormHandling = () => {
    const [name,setName]= useState("");
    const [ emali,setEmali]= useState("");
    const [passWord,setPassWord]= useState("");
   const [flag,setflag]=useState(false)

    const onSumitHandler=(e)=>{
      e.preventDefault()
      // backend logic here
      alert ("you form has been sumit")
      console.log(`name =${name} /n Email = ${emali}/n password = ${passWord}`);
      setflag(true)

    }
  return (
   <>
   <form className="container " onSubmit={onSumitHandler}>
    
    <h1>Form Handling </h1>
    Name:- <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <br />
    <br />
    Gmali:- <input type="emali"  value={emali} onChange={(e)=>setEmali(e.target.value)}/>
    <br /><br />
    passWord:- <input type="password" value={passWord}
    onChange={(e)=>setPassWord(e.target.value)} />
    
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

export default FormHandling
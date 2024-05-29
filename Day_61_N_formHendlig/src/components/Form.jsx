import React, { useState } from 'react'

const Form = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [Password, setPassword] = useState("")
    // console.log(name);

    const onSubmitHendler=(e)=>{
        e.preventDefault();
        alert(name+email+Password)
        setname('')
        setemail('')
        setPassword('');
        

    }
  return (
    <>
        <h1>Form Hendlig</h1>
        <br />
        <br />
       <form onSubmit={ onSubmitHendler} >
        
       name:= {''}<input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
       <br />
       <br />
       
       Email:= {''}<input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
       <br />
       <br />
       
       Password:= {''}<input type="password" value={Password}  onChange={(e)=>setPassword(e.target.value)} />
       <br />
       <br />
       <input type="submit" />
       <br />
       <br />
       </form>


    </>
  )
}

export default Form
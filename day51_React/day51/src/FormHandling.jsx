import React ,{useState} from 'react'


const FormHandling = () => {
    const [name,setname]= useState("");
    const [ Gmali,setGmali]= useState("");
    const [passWord,setpassWord]= useState("");
  return (
   <>
   <div className="container text-center">
    <h1>Form Handling </h1>
    Name:- <input type="text" />
    <br />
    <br />
    Gmali:- <input type="emali" />
    <br /><br />
    passWord:- <input type="password" />
    

   </div>
   
   </>
  )
}

export default FormHandling
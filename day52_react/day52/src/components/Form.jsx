import { useState } from "react";


const Form = ({addTodo}) => {
  const [title,settitle]=useState("")
  const [description,setdescription]=useState("")
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    if(title==""||description ==""){
      alert("This is alert")
    }else{
      alert("This is not ")
    }
    addTodo(title,description);
    settitle("");
    setdescription("");

  }


  return (
    <>
  
      <div className="container p-3 mt-5" >
      <h1>first react project</h1>
      

        <form className='row d-flex justify-content-center align-items-center p-3'
        onSubmit={onSubmitHandler}>

          <div className="mb-3 col-md-5">

           
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            value={title}
            onChange={(e)=> settitle(e.target.value)}
            />
            <div id="emailHelp" ></div>
          </div>
          <div className="mb-3 col-md-5">
            
            <input type="text" className="form-control" id="exampleInputPassword1"
            value={description}
            onChange={(e)=> setdescription(e.target.value)} />
          </div>
          
          <div className='mb-3 col-md-2'>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>


    </>
  );
};

export default Form
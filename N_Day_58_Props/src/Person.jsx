import React from 'react'

const Person = (props) => {
    // const proson ={
    //     name:'Abhishek',
    //     age:20,
    //     salary:10000
    // }
  return (
    <div>
<h1>name-:{props.name}</h1>
<h1>age:-{props.age}</h1>

    </div>
  )
}

export default Person
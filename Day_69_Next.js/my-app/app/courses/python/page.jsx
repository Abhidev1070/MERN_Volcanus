import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1> python list</h1>
       <ul>
        <li>machine learning</li>
        <li> Deep learning</li>
        <li>Artificial Inrelegence</li>
        <li>Django</li>
        <li>Fast API</li>
       </ul>
       <Link href="/courses" ><button>Nevigate to Courses</button></Link>
    </div>
  )
}

export default page
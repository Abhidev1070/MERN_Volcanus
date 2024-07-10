import React, { useState } from 'react'
import Link from 'next/link'
"use client";

const page = () => {
  const arr = ['Core_java','DSA_in_java','Full_Stack',4,5,];
  const [courses, setcourses] = useState([
    {id:1,title:"core_java",price:120000},
    {id:1,title:"core_java",price:120000},
    {id:1,title:"core_java",price:120000},
  ])
  return (
    <div>
        <h1>java Courses we offer</h1>
        <ul>
          {courses.map((data)=><div key={data.id} >
          <li>
              <Link href={`/courses/java/${arr[0]}`} >{data.title}</Link>
            </li>

          </div>)}
            
            {/* <li><Link href={`/courses/java/${arr[1]}`}>DSA in java</Link></li>
            <li>
              <Link href={`/courses/java/${arr[2]}`}>Full Stack</Link>
               </li> */}
            
        </ul>
        <Link href="/courses" ><button>Nevigate to Courses</button></Link>
        
    </div>
  )
}

export default page
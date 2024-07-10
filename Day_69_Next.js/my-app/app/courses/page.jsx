import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div> <h1>page Courses we offer</h1>
    <ul>
      <Link href='/courses/java'>Java</Link>
      <Link href="/courses/Python">Python</Link>
      
    </ul>
    </div>
  )
}

export default page
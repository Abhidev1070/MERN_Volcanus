import React from 'react'

const page = ({params}) => {
    console.log("this is coming from de",params);
  return (
    <div>
      page code={params._id}

    </div>
  )
}

export default page
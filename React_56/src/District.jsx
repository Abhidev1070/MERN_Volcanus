import React from 'react'
import Panchayat from './Panchayat'

const District = ({name}) => {
  return (
    <div>District
        <Panchayat name={name}/>
    </div>
  )
}

export default District
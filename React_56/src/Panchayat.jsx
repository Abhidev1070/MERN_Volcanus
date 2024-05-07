import React from 'react'
import Janta from './Janta'

const Panchayat = ({name}) => {
  return (
    <div>Panchayat
        <Janta name={name}/>
    </div>
  )
}

export default Panchayat
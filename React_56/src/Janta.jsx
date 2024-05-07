import React, { useContext } from 'react'
import AppContext from './Context/AppContext'

const janta = ({name}) => {
    const data = useContext(AppContext)
    
  return (
    <div>janta={name}{data.name}</div>
  )
}

export default janta;
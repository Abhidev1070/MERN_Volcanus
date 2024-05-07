import React from 'react'
import AppContext from './AppContext'

const AppState = (props) => {
    const name = "ABIH";
    const person = {name:"Superman",salary:100}
  return (
    <AppContext.Provider
     value={{
        name,
        person,
     }}
     >
        {props.children}
    </AppContext.Provider>
  )
}

export default AppState
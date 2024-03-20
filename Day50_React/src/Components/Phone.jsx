import React from 'react'

const Phone = ({name,ram,mini,Dark,light,counter,plasOne,maynsOne}) => {
  return (
<>
<h1>{counter}</h1>
<h1>{ram}</h1>
<h1>{name}</h1>
<h1>{mini}</h1>
<button onClick={Dark}>DarkMood</button>
<button onClick={light}>lightMood</button>
<button onClick={plasOne}>+1</button>
<button onClick={maynsOne}>-1</button>
</>
  )
}

export default Phone
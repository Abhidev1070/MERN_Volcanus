import React from 'react'

const ShowData = ({data}) => {
  return (
    <>
    <div className="container">
        {
            data.map((d)=>(
                <div key={d.id} className="container">
                    <h2>{d.id}</h2>
                    <h2>{d.title}</h2>
                </div>
            ))
        }
    </div>
    </>
    
  )
}

export default ShowData
import React from 'react'
import skill from './data/skills.json'

const Skill = () => {
  return (
    <>
    <div className="container skills">
<h1>SKILLS</h1>
<div className='items' >
{skill.map((data)=>(
<>
  <div className="item" key={data.id}>
    <img src={`/assets/${data.imageSrc}`} alt="Image" />
    <h3>{data.title}</h3>
  </div>



</>
))}
</div>


    </div>
    
    </>
    
  )
}

export default Skill
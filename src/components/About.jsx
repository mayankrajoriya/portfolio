import React from 'react'
import experience from "./Data/experience.json"




const About = () => {
  return (
    <div className='container'
    id='about'>
       <h1 >EXPERIENCE</h1>
      {experience.map((data) => {
        return (
          <div key={data.id} className="ex-items text-center">
            <div className="left">
              <img src={`/assets/images/${data.imageSrc}`} alt="" />
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>{data.startDate} {data.endDate} {data.location}</h4>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default About
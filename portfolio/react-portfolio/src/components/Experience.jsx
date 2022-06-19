import React from 'react'

import '../styles/experience.css'
import { WorkData } from '../../work-data'

const Experience = () => {
  return (
    <section className='section' id="experince">
      <h1>Experience</h1>

      <span>Below are some of the places where I&apos;ve plied the art of web development.</span>

      <div className='grid_container'>
        {WorkData.map((item, i) => (
          <div key={i} className='card'>
            <h3>{item.company}</h3>
            <p>{item.position}, {item.type}</p>
            <i>{item.start} - {item.end}</i>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
import React from 'react'

import styles from '../styles/Experience.module.css'
import { WorkData } from '../../work-data'

const Experience = () => {
  return (
    <section className={styles.section} id="experince">
      <h1>Experience</h1>

      <span>Below are some of the places where i&apos;ve plied the art of web development.</span>

      <div className={styles.grid_container}>
        {WorkData.map((item, i) => (
          <div key={i} className={styles.card}>
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
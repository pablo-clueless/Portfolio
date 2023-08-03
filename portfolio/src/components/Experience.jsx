import { motion } from "framer-motion"
import React from "react"

import { textVariant } from "../utils/motion"
import { EMPLOYMENTS } from "../constants"
import { Container } from "../layouts"
import { styles } from "../styles"

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>work history</p>
        <h2 className={`${styles.sectionHeadText} text-black`}>Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap items-center justify-center gap-10">
          {EMPLOYMENTS.map((emp, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <h4 className="text-xl font-bold text-black">{emp.company}</h4>
              <p className="text-sm font-semibold text-gray-500">{emp.date}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default Container(Experience, "work")

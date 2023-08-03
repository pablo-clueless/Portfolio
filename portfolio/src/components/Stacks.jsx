import { motion } from "framer-motion"
import React from "react"

import { textVariant } from "../utils/motion"
// import { BallCanvas } from "../components"
import { Container } from "../layouts"
import { STACKS } from "../constants"
import { styles } from "../styles"

const Stacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>tools & technologies</p>
        <h2 className={`${styles.sectionHeadText}`}>Tech Stacks.</h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {STACKS.map((stack, index) => (
          <p key={index} style={{color: stack.color}} className="font-extrabold">{stack.name}</p>
        ))}
      </div>
    </>
  )
}

export default Container(Stacks, "")

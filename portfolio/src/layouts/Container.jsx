import { motion } from "framer-motion"
import React from "react"

import { staggerContainer } from "../utils/motion"
import { styles } from "../styles"

const Container = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        id={id}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <Component />
      </motion.section>
    )
  }

export default Container

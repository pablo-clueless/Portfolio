import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import React from "react"

import { fadeIn, textVariant } from "../utils/motion"
import { Container } from "../layouts"
import { styles } from "../styles"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>introduction</p>
        <h2 className={`${styles.sectionHeadText} text-black`}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex flex-col text-xl md:text-2xl text-gray-500 max-w-3xl leading-[30px]">
        <span className="my-2">
          Born and raised in Lagos, Nigeria. I am a full stack developer with
          love for sleek designs, motion and 3D. The endless possibilities of
          the web fuels my passion. I constantly endeavor to get better and
          surpass my threshold to deliver outstanding results.
        </span>
        <span className="my-2">
          Currently, I am the lead developer (FE) at Zummit Africa. And I am
          pursuing a diploma in computer science.
        </span>
        <span className="my-2">
          I like football, pop music, good food and video games. And web3. In
          that order.
        </span>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10"></div>
    </>
  )
}

export default Container(About, "about")

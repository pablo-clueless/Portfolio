import { ArrowDown } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import React from "react"

import { HeroCanvas } from "../components"
import { styles } from "../styles"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center gap-5`}>
        <div className="">
          <h1 className={`${styles.heroHeadText} text-black text-center`}>
            Hi, I'm Samson
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-500 text-center`}>
            Cool. Calm. Clueless
          </p>
        </div>
      </div>
      <HeroCanvas />
      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{y: [0, 24, 0]}}
            transition={{duration: 1.5, repeat: Infinity, repeatType: "loop"}}
          >
            <ArrowDown className="fill-black text-5xl" />
          </motion.div>
        </a>
      </div>
    </section>
  )
}

export default Hero

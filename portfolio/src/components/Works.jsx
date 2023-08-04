import { ArrowLeft, ArrowRight, LinkSimple } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { useState } from "react"

import { fadeIn, textVariant } from "../utils/motion"
import { PROJECTS } from "../constants"
import { Container } from "../layouts"
import { styles } from "../styles"

const Card = ({ current, index, name, description, image, url }) => {
  return (
    <motion.div
      className={`w-full cursor-pointer relative ${index === current ? "block" : "hidden"}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "tween", delay: 0.1, duration: 1, ease: "easeInOut" }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 15, scale: 1, speed: 1000 }} className="w-full">
        <div className="relative w-full">
          <div className="w-full">
            <img
              src={image}
              alt={name}
              className="w-full aspect-[2/1] object-cover object-top grayscale hover:grayscale-0 transition-colors duration-500"
            />
          </div>
        </div>
      </Tilt>
      <div className="mt-4">
        <h3 className="text-lg md:text-xl text-black font-extrabold">
          {name}
        </h3>
        <p className="text-base md:text-lg text-gray-500 font-bold">
          {description}
        </p>
      </div>
      <a href={url} target="_blank" className="rounded-full bg-black/70 p-2 absolute top-4
       right-4">
        <LinkSimple className="text-2xl" />
      </a>
    </motion.div>
  )
}

const Works = () => {
  const [current, setCurrent] = useState(0)

  const next = () =>
    current === PROJECTS.length - 1
      ? setCurrent(0)
      : setCurrent(prev => prev + 1)

  const previous = () =>
    current === 0
      ? setCurrent(PROJECTS.length - 1)
      : setCurrent(prev => prev - 1)

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>curating my portfolio</p>
        <h2 className={`${styles.sectionHeadText} text-black`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-xl md:text-2xl text-gray-500 max-w-3xl leading-[30px]">
          Here is a selection of projects I've done.
        </motion.p>
      </div>
      <div className="my-20 w-full h-fit flex items-center mx-auto gap-20 md:gap-60 overflow-hidden">
        {PROJECTS.map((project, index) => (
          <Card
            key={`project${index}`}
            index={index}
            current={current}
            {...project}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-end gap-10 mt-20 transition-all duration-500">
        <button
          onClick={previous}
          className="w-20 h-20 bg-black text-white rounded-full grid place-items-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
          <ArrowLeft className="text-3xl" />
        </button>
        <button
          onClick={next}
          className="w-20 h-20 bg-black text-white rounded-full grid place-items-center hover:bg-white hover:text-black hover:border-2 hover:border-black">
          <ArrowRight className="text-3xl" />
        </button>
      </div>
    </>
  )
}

export default Container(Works, "projects")

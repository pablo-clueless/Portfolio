import { LinkSimple } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

import { fadeIn, textVariant } from "../utils/motion"
import { PROJECTS } from "../constants"
import { Container } from "../layouts"
import { styles } from "../styles"

const Card = ({index, name, description, image, url}) => {
  return (
    <motion.div className="w-full  relative" variants={fadeIn("left", "tween", index * 0.5, 0.75)}>
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
        <h3 className="text-lg text-black font-extrabold">{name}</h3>
        <p className="text-sm text-gray-500 font-bold">{description}</p>
      </div>
      <a href={url} target="_blank" className="rounded-full bg-black/70 p-2 absolute top-4
       right-4">
        <LinkSimple className="text-2xl" />
      </a>
    </motion.div>
  )
}

const Works = () => {
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
      <div className="my-20 w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-20">
        {PROJECTS.map((project, index) => (
          <Card key={`project${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default Container(Works, "projects")

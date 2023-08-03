import { motion } from "framer-motion"

import { EarthCanvas, Logo } from "../components"
import { slideIn } from "../utils/motion"
import { CONNECT } from "../constants"
import { Container } from "../layouts"
import { styles } from "../styles"

const Contact = () => {
  return (
    <footer className="w-full flex flex-col gap-20">
      <div className="w-full flex flex-col-reverse xl:flex-row gap-10 overflow-hidden">
        <div>
          <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75]">
            <p className={`${styles.sectionSubText} text-white`}>
              get in touch
            </p>
            <h2 className={`${styles.sectionHeadText} text-white`}>
              Contact Me.
            </h2>
          </motion.div>
          <div className="flex flex-col gap-5 mt-20">
            <Logo size="text-6xl text-white" />
            <div className="flex flex-col gap-4">
              {CONNECT.map((connect, index) => (
                <a key={index} href={connect.url} target="_blank" className="text-white font-semibold capitalize cursor-pointer hover:tracking-[5px] transition-all duration-500">
                  {connect.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <EarthCanvas />
        </motion.div>
      </div>
      <div className="w-full flex items-center">
        <p className="text-sm text-white font-semibold uppercase">
          &copy; {new Date().getFullYear()} samson okunola
        </p>
      </div>
    </footer>
  )
}

export default Container(Contact, "contact")

import { Link } from "react-router-dom"

import { NAVLINKS } from "../constants"
import { styles } from "../styles"
import Logo from "./Logo"

const Navbar = () => {

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white`}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" onClick={() => {setActive(""); window.scrollTo(0, 0)}}>
          <Logo color="text-black" size="text-base md:text-xl" />
        </Link>
        <ul className="list-none flex flex-row gap-2 md:gap-10">
          {NAVLINKS.map((link) => (
            <li
              key={link.id}
              className="text-xs md:text-[18px] text-black font-semibold capitalize hover:tracking-[5px] transition-all duration-500">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

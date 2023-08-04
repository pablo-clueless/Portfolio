import React from "react"

import { useMousePosition } from "../hooks"
import "./styles/cursor.css"

const Cursor = () => {
  const {x, y} = useMousePosition()

  return (
    <>
    <div className="cursor-ring" style={{left: `${x}px`, top: `${y}px`}}></div>
    <div className="cursor-dot" style={{left: `${x}px`, top: `${y}px`}}></div>
    </>
  )
}

export default Cursor
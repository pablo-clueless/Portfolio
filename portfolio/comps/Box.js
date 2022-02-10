import React, { useRef } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"
// import { useSpring, a } from "react-spring"

import img from "../public/NormalMap.png"
import { TextureLoader } from "three"

const Box = (props) => {
    const mesh = useRef(null)

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01  
    })

    return (
        <mesh castShadow position={props.position} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={props.args}/>
            <MeshWobbleMaterial attach="material" color={props.color} speed={props.speed} factor={props.factor} />
        </mesh>
    )
}

export default Box
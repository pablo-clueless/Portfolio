import React, { useRef } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"


const Torus = (props) => {
    const ref = useRef(null)

    useFrame(() => {
        ref.current.rotation.y += 0.01
    })

    return (
        <points onClick={props.onClick} castShadow position={props.position} ref={ref}>
            <torusBufferGeometry attach="geometry" args={props.args} />
            <pointsMaterial size={0.05} />
        </points>
    )
}

export default Torus
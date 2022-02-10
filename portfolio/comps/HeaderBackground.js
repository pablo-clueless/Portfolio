import React, { useEffect, useState } from "react"
// import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"

import Torus from "./Torus"
import Sphere from "./Sphere"

const HeaderBackground = () => {
    const [positionZ, setPositionZ] = useState(0)

    useEffect(() => {
        const updateSphere = () => {
            let y = window.scrollY
            setPositionZ(y * -0.05)
        }
        window.addEventListener("scroll", updateSphere)
    },[positionZ])

    return (
        <>
        <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 10] }}>
            {/* ambient light */}
            <ambientLight intensity={0.3} />

            {/* directional light */}
            <directionalLight position={[0, 10, 0]} intensity={1.5}  castShadow />

            {/* point lights */}
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />

            <group>
                <Stars radius={100} depth={50} count={10000} factor={4} saturation={1} fade />
                <Sphere position={[1, (positionZ * -0.25), positionZ]} args={[2, 64, 64]} color="#1A5846" />
            </group>
        </Canvas>
        </>
    )
}

export default HeaderBackground
import React, { useEffect, useState } from "react"
// import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"

import Torus from "./Torus"
import Sphere from "./Sphere"

const HeaderBackground = () => {
    const [position, setPosition] = useState(0)

    useEffect(() => {
        const updateSphere = () => {
            let y = window.scrollY
            setPosition(y * -0.05)
        }
        window.addEventListener("scroll", updateSphere)
    },[position])

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
                <Sphere position={[1, (position * -0.25), (position - 3)]} args={[1, 64, 64]} color="#1A5846" />
            </group>
            <OrbitControls enableZoom={false} enableRotate enablePan autoRotate />
        </Canvas>
        </>
    )
}

export default HeaderBackground
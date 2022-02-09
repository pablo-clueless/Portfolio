import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"

import Box from "./Box"

const Three = () => {
    
    return (
        <>
        <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [-5, 2, 10] }} shadows>
            {/* ambient light */}
            <ambientLight intensity={0.3} />

            {/* directional light */}
            <directionalLight position={[0, 10, 0]} intensity={1.5}  castShadow />

            {/* point lights */}
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />

            {/* shapes */}
            <Box position={[0, -2, 0]} args={[3.5, 2, 1]} color="#1A5846" speed={1} factor={0.6} />
            <Box position={[-4, 1, -3]} args={[1, 1, 0.5]} color="#39FF14" speed={6} factor={0.6} />
            <Box position={[10, -8, -5]} args={[0.5, 2, 2]} color="beige" speed={6} factor={1} />
        </Canvas>
        </>
    )
}

export default Three
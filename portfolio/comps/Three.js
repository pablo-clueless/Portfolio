import React, { Suspense, useState } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"

import Box from "./Box"
import Sphere from './Sphere'
import Torus from "./Torus"

const Three = () => {
    const [active, setActive] = useState(false)
    
    return (
        <>
        <Canvas
        camera={{ fov: 50, near: 0.1, far: 1000, position: [-5, 2, 10] }} shadows={{ type: "BasicShadowMap" }}>

            {/* ambient light */}
            <ambientLight intensity={0.3} />

            {/* directional light */}
            <directionalLight castShadow position={[0, 10, 2]} intensity={1.5} />

            {/* point lights */}
            <pointLight position={[-10, 40, -50]} intensity={5} color="#39FF14" />
            <pointLight position={[0, -10, 0]} intensity={1.5} color="red" />
            
            <group>
                <Stars radius={100} depth={50} count={10000} factor={4} saturation={1} fade />
                {/* <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} >
                    <planeBufferGeometry attach="geometry" args={[100, 100]} />
                    <meshStandardMaterial attach="material" color="gray" />
                </mesh> */}
                {/* shapes */}
                {/* <Sphere onClick={() => setActive(!active)} position={[0, 1, 0]} args={[2, 64, 64]} color="pink" /> */}
                {/* <Box position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" speed={2} factor={0.6} />
                <Box position={[-2, 1, -3]} args={[1, 1, 1]} color="pink" speed={6} factor={0.6} />
                <Box position={[5, 1, -2]} args={[0.5, 1, 0.5]} color="beige" speed={6} factor={0.6} /> */}
               <Torus position={[0, 1, 0]} args={[1.5, 0.7, 16, 100]} color="pink" speed={1.5} factor={2} />
            </group>

            {/* {active && <OrbitControls />} */}
            {/* <OrbitControls /> */}
        </Canvas>
        </>
    )
}

export default Three
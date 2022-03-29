import React, { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Planet = () => {
    const [model, setModel] = useState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        new GLTFLoader().load('/scene.gltf', setModel)
    })

    return model ? <primitive object={model.scene} /> : null
}

const HeaderBackground = () => {
    const [position, setPosition] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const updateSphere = () => {
            let y = window.scrollY
            setPosition(y * -0.05)
        }
        window.addEventListener("scroll", updateSphere)
    },[position])

    useEffect(() => {
        const updateWidth = () => {
            let deviceWidth = innerWidth
            setWidth(deviceWidth)
        }
        window.addEventListener("resize", updateWidth)
    },[width])

    return (
        <>
        <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [0, 0, 10] }}>
            {/* ambient light */}
            <ambientLight intensity={0.5} />

            {/* directional light */}
            <directionalLight position={[0, 10, 0]} intensity={1.5}  castShadow />


            <group>
                <Stars radius={100} depth={50} count={10000} factor={4} saturation={1} fade />
                
                 {/* Planet.gltf object, tried importing as a component but it wasn't working for a reason, position and scale are set by the useEffect hook */}
                 <mesh position={[0, (position * -0.05), 0]} scale={width <= 500 ? 0.015 : 0.025}>
                    <Planet />
                </mesh>
            </group>

            {/* zoom is disabled for all devices, other controls are hidden from from mobile devices by setting the z-index to -1 on small screens */}
            <OrbitControls enableZoom={false} enableRotate enablePan autoRotate autoRotateSpeed={0.5} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2} />
        </Canvas>
        </>
    )
}

export default HeaderBackground
import React, { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const BTCCoin = () => {
    const [model, setModel] = useState()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        new GLTFLoader().load('/3d-objs/btc/scene.gltf', setModel)
    })

    return model ? <primitive object={model.scene} /> : null
}

const Three = () => {
    
    return (
        <>
        <Canvas camera={{ fov: 50, near: 0.1, far: 1000, position: [-5, 2, 10] }} shadows>
            {/* ambient light */}
            <ambientLight intensity={1} color='white' />

            {/* directional light */}
            <directionalLight position={[0, 10, 0]} intensity={10}  castShadow color='white' />

            {/* point lights */}
            <pointLight position={[-10, 0, -20]} intensity={1} color='white' />
            <pointLight position={[0, -10, 0]} intensity={1.5} color='white' />

            {/* tokens */}
            <mesh position={[0, -3, 0]} rotateX={2} rotateY={45} scale={0.03}>
                <BTCCoin />
            </mesh>
            <mesh position={[-5, 0, 0]} scale={0.01}>
                <BTCCoin />
            </mesh>
            <mesh position={[-0.9, 1, 0]} scale={0.015}>
                <BTCCoin />
            </mesh>
            <mesh position={[2.5, 0, 0]}  scale={0.01}>
                <BTCCoin />
            </mesh>       
        </Canvas>
        </>
    )
}

export default Three
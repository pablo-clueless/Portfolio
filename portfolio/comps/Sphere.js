import React, { useRef } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"

const Box = (props) => {
    // const texture = new THREE.TextureLoader().load("/public/metal.jpg")

    const mesh = useRef(null)

    useFrame(() => mesh.current.rotation.x = mesh.current.rotation.y += 0.01)

    return (
        <mesh castShadow position={props.position} ref={mesh}>
            <sphereBufferGeometry attach="geometry" args={props.args}/>
            <MeshWobbleMaterial attach="material" color={props.color} speed={1} factor={0.6} />
        </mesh>
    )
}

export default Box
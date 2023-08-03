import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

import CanvasLoader from "./Loader"

const Model = ({ isMobile }) => {
  const model = useGLTF("./fox_walk.glb")

  let mixer
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene)
    model.animations.forEach(clip => {
      mixer.clipAction(clip).play()
    })
  }

  useFrame((state, delta) => {
    mixer.update(delta)
  })

  model.scene.traverse(child => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      child.material.side = THREE.FrontSide
    }
  })

  return (
    <mesh>
      <pointLight intensity={1} />
      <ambientLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.3 : 0.5}
        position={[0, -4, 0]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  )
}

const HeroCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("change", handleResize)
  })

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [25, 5, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default HeroCanvas
useGLTF.preload("./fox_walk.glb")

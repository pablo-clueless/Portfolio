import React, { Component } from 'react'
import * as THREE from 'three'
import OrbitControls from "three-orbitcontrols"
import { MeshWobbleMaterial } from '@react-three/drei'

import styles from '../styles/PureThree.module.css'

class PureThree extends Component {
    componentDidMount() {
        // scene
        this.scene = new THREE.Scene()

        // renderer
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        this.mount.appendChild(this.renderer.domElement)

        // camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.z = 5

        // create shape
        var geometry = new THREE.SphereBufferGeometry(1, 64, 64)
        var texture = new THREE.TextureLoader().load('/public/AmbientOcclusionMap.png')
        var material = new THREE.MeshStandardMaterial({
            color: 0x1A5846,
            normalMap: texture
        })
        this.sphere = new THREE.Mesh(geometry, material)

        // add shape to scene
        this.scene.add(this.sphere)
        this.animate()
        this.renderer.render(this.scene, this.camera)

        // add ambient light
        this.ambientLight = new THREE.AmbientLight(0xFFFFFF)
        this.ambientLight.intensity = 5
        this.scene.add(this.ambientLight)

        // add directional light
        this.directionalLight = new THREE.DirectionalLight(0xff00000, 10)
        this.directionalLight.position.set(0, 10, 0)
        this.directionalLight.intensity = 1.5
        this.scene.add(this.directionalLight)

        // add point light one
        this.pointLightOne = new THREE.PointLight(0x39FF14, 10)
        this.pointLightOne.position.set(-10, 40, -50)
        this.pointLightOne.intensity = 5
        this.scene.add(this.pointLightOne)

        // add point light one
        this.pointLightTwo = new THREE.PointLight(0xff0000, 10)
        this.pointLightTwo.position.set(0, 10, 0)
        this.pointLightTwo.intensity = 1.5
        this.scene.add(this.pointLightTwo)

        // orbit controls
        // new OrbitControls(this.camera, this.renderer.domElement)

        // event handlers
        // window resize
        window.addEventListener("resize", this.handleWindowResize)
    }

    // animate object
    animate = () => {
        requestAnimationFrame(this.animate)

        // set rotation
        this.sphere.rotation.x += 0.01
        this.sphere.rotation.y += 0.01

        // rerender
        this.renderer.render(this.scene, this.camera)
    }

    // handle window resize
    handleWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div ref={mount => {
                this.mount = mount
            }} className={styles.render} />
        )
    }
}

export default PureThree
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    Html,
    Environment,
    useGLTF,
    ContactShadows,
    OrbitControls,
} from '@react-three/drei'
import * as THREE from 'three'

import './App.css'
import Arcade from './Arcade'
import { AmbientLight } from 'three'

const ArcadeModel = () => {
    const scene = useGLTF('/arcade-v2.glb')
    return <primitive object={scene.scene} dispose={null} />
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <Canvas camera={{ position: [0, 2, 4], fov: 55 }}>
            {/* <pointLight position={[-5, 10, 10]} intensity={1.5} /> */}
            <Suspense fallback={null}>
                <group position={[0, -2.5, 0]}>
                    <Arcade />
                </group>
                <Environment preset='city' />
            </Suspense>
            <ContactShadows
                position={[0, -4.5, 0]}
                scale={20}
                blur={2}
                far={4.5}
            />
            <OrbitControls
            // minPolarAngle={Math.PI / 2.2}
            // maxPolarAngle={Math.PI / 2.2}
            />
        </Canvas>
    )
}

export default App

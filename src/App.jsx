import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    Environment,
    useGLTF,
    ContactShadows,
    OrbitControls,
} from '@react-three/drei'
import * as THREE from 'three'
import { Model as Player } from './Player'
import { Sky } from '@react-three/drei'

import './App.css'
import Arcade from './Arcade'
import Ground from './Ground'

const ArcadeModel = () => {
    const scene = useGLTF('/arcade-v2.glb')
    return <primitive object={scene.scene} dispose={null} />
}

function App() {
    const [count, setCount] = useState(0)

    return (
        <Canvas camera={{ position: [0, 2, 4], fov: 55 }}>
            <Suspense fallback={null}>
                <Sky sunPosition={[50, 20, 50]} />
                <group position={[0, -2.5, 0]}>
                    <Arcade />
                </group>
                <Player scale={5} position={[10, -7, 0]} />

                <Ground position={[0, -7, 0]} />
                <Environment preset='city' />
            </Suspense>
            <ContactShadows
                position={[0, -4.5, 0]}
                scale={20}
                blur={2}
                far={4.5}
            />
            <ambientLight intensity={0.5} />
            {/* <OrbitControls /> */}
        </Canvas>
    )
}

export default App

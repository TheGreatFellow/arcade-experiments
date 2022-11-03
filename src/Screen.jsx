import { useRef, useState, useEffect, Suspense } from 'react'
import {
    useGLTF,
    useAspect,
    useVideoTexture,
    useTexture,
} from '@react-three/drei'
import * as THREE from 'three'
export default function Screen({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/tv_screen-transformed.glb')

    return (
        <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.22}>
                    <mesh
                        geometry={nodes.Tv1_0.geometry}
                        material={materials.Tv1_Material}
                    />
                    <mesh
                        geometry={nodes.Tv1_2.geometry}
                        material={materials.Tv1_Stand_Material}
                    />
                    <mesh
                        geometry={nodes.Tv_screen.geometry}
                        material={materials.Tv1_Glass_Material}
                    ></mesh>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/tv_screen-transformed.glb')

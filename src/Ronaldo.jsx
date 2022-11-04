
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ronaldo-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI/2]}>
        <mesh geometry={nodes.Object_2.geometry} >
            <meshStandardMaterial    wireframe color='#4deeea'   />
        </mesh>
        <mesh geometry={nodes.Object_3.geometry} >
            <meshStandardMaterial    wireframe color='#4deeea'   />
        </mesh>
        <mesh geometry={nodes.Object_4.geometry} >
            <meshStandardMaterial    wireframe color='#4deeea'   />
        </mesh>
        <mesh geometry={nodes.Object_5.geometry} >
            <meshStandardMaterial    wireframe color='#4deeea'   />
        </mesh>
        <mesh geometry={nodes.Object_6.geometry} >
            <meshStandardMaterial    wireframe color='#4deeea'   />
        </mesh>
        <mesh geometry={nodes.Object_7.geometry} >
            <meshStandardMaterial    wireframe color='#4deeea'   />
        </mesh>
        <mesh geometry={nodes.Object_8.geometry} >
            <meshStandardMaterial    wireframe color='#4deeea'   />
        </mesh>
        <mesh geometry={nodes.Object_9.geometry} >
            <meshStandardMaterial    wireframe color='#4deeea'   />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/ronaldo-transformed.glb')

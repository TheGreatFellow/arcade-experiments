/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 pool.glb
Author: dylanheyes (https://sketchfab.com/dylanheyes)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bathhouse-aca612273c874155afddeb15a6574b12
Title: Bathhouse
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/pool.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.56}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[12.22, -378.58, -1.85]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Bathhouse_Bathhouse_0.geometry} material={materials.Bathhouse} />
            <mesh geometry={nodes.Bathhouse_Bathhouse_0_1.geometry} material={materials.Bathhouse} />
            <mesh geometry={nodes.Bathhouse_Bathhouse_0_2.geometry} material={materials.Bathhouse} />
            <mesh geometry={nodes.Bathhouse_Water_0.geometry} material={materials.Water} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pool.glb')
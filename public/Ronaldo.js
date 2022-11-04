/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: hegdearun870 (https://sketchfab.com/hegdearun870)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/christiano-ronaldo-db5f3dc8e44044e98b4df68b2b688dd6
title: Christiano Ronaldo
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ronaldo-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.CR7_Head} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.t0161_0} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.t0162_0} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.t0166_0} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.t0167_0} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.t0168_0} />
      </group>
    </group>
  )
}

useGLTF.preload('/ronaldo-transformed.glb')
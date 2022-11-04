import { useGLTF, Html } from '@react-three/drei'
import { useState } from 'react'

import TetrisGame from './Tetris'


export default function Model(props) {
  const { nodes, materials } = useGLTF('/game_4-transformed.glb')
  const [pause, setPause] = useState(false)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.blinn3SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.phongE3SG} />
        {pause?<Html  transform occlude rotation={[1.3, 0, 0]} position={[0,-29 ,355]} scale={[17,10,8]} >
                <TetrisGame/>
            </Html>: <group></group>}
      </group>
            <mesh onClick={() => setPause(!pause)} scale={50}  position={[0.3,200,100]} >
                <boxGeometry />
                <meshStandardMaterial
                    // map={textur}
                    color='hotpink'
                />
            </mesh>
    </group>
  )
}

useGLTF.preload('/game_4-transformed.glb')
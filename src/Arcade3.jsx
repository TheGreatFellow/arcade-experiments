import { useGLTF, Html } from '@react-three/drei'

import TetrisGame from './Tetris'


export default function Model(props) {
  const { nodes, materials } = useGLTF('/game_4-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.blinn3SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.phongE3SG} />
        {/* <Html className="content" transform occlude rotation={[1.3, 0, 0]} position={[0,-27 ,375]} scale={[17,10,8]} >
                <TetrisGame/>
            </Html> */}
      </group>
    </group>
  )
}

useGLTF.preload('/game_4-transformed.glb')
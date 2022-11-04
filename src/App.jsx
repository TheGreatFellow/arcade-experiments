import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { Model as Player } from "./Player";
import { Sky } from "@react-three/drei";

import "./App.css";
import Arcade1 from "./arcade-games/Arcade1";
import Arcade2 from "./arcade-games/Arcade2";
import Arcade3 from "./arcade-games/Arcade3";
import Ground from "./Ground";
import Screen from "./Screen";
import Screen1 from "./Screen1";
import Billboard from "./Billboard";
import Stadium from "./Stadiums";
import Gallery from "./Gallery";
import Ronaldo from "./Ronaldo";
import { Model as Man } from "./Man";
import { useOthers } from "./liveblocks.config.jsx";

const ArcadeModel = () => {
  const scene = useGLTF("/arcade-v2.glb");
  return <primitive object={scene.scene} dispose={null} />;
};

function App() {
  const [count, setCount] = useState(0);
  const others = useOthers();

  return (
    <Canvas camera={{ position: [0, 2, 4], fov: 55 }}>
      <Suspense fallback={null}>
        <Sky sunPosition={[50, 20, 50]} />
        <Stadium scale={25} />
        <Gallery
          scale={6}
          position={[50, 0.1, -20]}
          rotation={[0, -Math.PI, 0]}
        />
        {others.map(({ connectionId, presence }) => {
          console.log("presence", presence);
          return (
            <Man
              key={connectionId}
              scale={[5, 5, 5]}
              position={[
                presence.position.x,
                presence.position.y,
                presence.position.z,
              ]}
            />
          );
        })}
        <Ronaldo scale={30} position={[0, 0, 0]} />
        <Player scale={5} position={[10, 0, 0]} />
        {/* <OrbitControls /> */}
        <group position={[-90, 0, 30]} rotation={[0, Math.PI / 2, 0]}>
          <Arcade2 scale={0.08} />
        </group>
        <group position={[-90, 0, 20]} rotation={[0, Math.PI / 2, 0]}>
          <Arcade1 />
        </group>
        <group position={[-90, 0, -20]} rotation={[0, Math.PI / 2, 0]}>
          <Arcade3 scale={0.025} />
        </group>
        {/*<Billboard scale={0.03} position={[50, -5, 50]} />*/}
        <group position={[-110, 10, -4]} rotation={[0, Math.PI / 2, 0]}>
          <Screen
            // position={[30.7, 2.5, 0.5]}
            // rotation={[0, -1.2, 0]}
            scale={[22, 21, 21]}
          />
          <Screen1
            position={[0, 9.1, 1]}
            // rotation={[0, -1.2, 0]}
            scale={[27.448627904828147, 15.439853196465833, 1]}
          />
        </group>
        <Ground position={[0, 0, 0]} />
        <Environment preset="city" />
      </Suspense>

      <ambientLight intensity={0.5} />
    </Canvas>
  );
}

export default App;

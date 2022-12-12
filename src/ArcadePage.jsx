import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Model as Club } from "./Club";
import { Model as Player } from "./Player";

const ArcadePage = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" />
      <Sky sunPosition={[0, 1, 0]} />
      <Player scale={5} position={[0, 1, 0]} />
      {/* <OrbitControls /> */}
      <Club scale={25} />
    </Canvas>
  );
};

export default ArcadePage;

import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useParams } from "react-router";
import { Model as Club } from "./Pool";
import { getAvatar } from "./constants";

const PoolPage = () => {
  const { id } = useParams();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="dawn" />
      <Sky sunPosition={[0, 1, 0]} />
      {/* <Player scale={5} position={[0, 1, 0]} /> */}
      {getAvatar(id, true, { scale: 5 })}
      {/* <OrbitControls /> */}
      <Club scale={6} position={[0,33,0]}  />
    </Canvas>
  );
};

export default PoolPage;

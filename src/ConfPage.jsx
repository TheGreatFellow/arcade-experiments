import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useParams } from "react-router";
import ConfRoom from "./ConfRoom";
import { getAvatar } from "./constants";

const ConfPage = () => {
  const { id } = useParams();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" />
      <Sky sunPosition={[0, 1, 0]} />
      {/* <Player scale={5} position={[0, 1, 0]} /> */}
      {getAvatar(id, true, { scale: 5 })}
      {/* <OrbitControls /> */}
      <ConfRoom scale={10} />
    </Canvas>
  );
};

export default ConfPage;
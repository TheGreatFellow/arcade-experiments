import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React,{Suspense} from "react";
import { useParams } from "react-router";
import { Model as Club } from "./Auditorium";
import { getAvatar } from "./constants";
import WhiteBoardContainer from "./Components/whiteboard/container/Container";

const AudPage = () => {
  const { id } = useParams();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Environment preset="sunset" />
      <Sky sunPosition={[0, 1, 0]} />
      {/* <Player scale={5} position={[0, 1, 0]} /> */}
      {getAvatar(id, true, { scale: 5 })}
      {/* <OrbitControls/> */}
      <Club scale={6} />
    </Canvas>
  );
};

export default AudPage;

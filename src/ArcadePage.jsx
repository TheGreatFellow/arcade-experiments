import { Environment, Html, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useParams } from "react-router";
import { Model as Club } from "./Club";
import { getAvatar } from "./constants";

const ArcadePage = () => {
  const { id } = useParams();

  return (
    <Canvas>
      <Suspense
        fallback={
          <Html>
            <h1>Loading...</h1>
          </Html>
        }
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Environment preset="sunset" />
        <Sky sunPosition={[0, 1, 0]} />
        {/* <Player scale={5} position={[0, 1, 0]} /> */}
        {getAvatar(id, true, { scale: 5 })}
        {/* <OrbitControls /> */}
        <Club scale={25} />
      </Suspense>
    </Canvas>
  );
};

export default ArcadePage;

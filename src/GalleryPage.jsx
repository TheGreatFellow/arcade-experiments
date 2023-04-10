import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Gallery from "./Gallery";
import { Model as Player } from "./Player";
import { getAvatar } from "./constants";
import { useParams } from "react-router";

const GalleryPage = () => {
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
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Environment preset="sunset" />
        <Sky sunPosition={[0, 1, 0]} />
        {/* <Player scale={5} /> */}
        {getAvatar(id, true, { scale: 5 })}
        {/* <OrbitControls /> */}
        <Gallery scale={6} rotation={[0, -Math.PI, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default GalleryPage;

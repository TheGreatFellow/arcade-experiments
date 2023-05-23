import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect, Suspense } from "react";
import { Model as Classroom } from "../Classroom";
import { Model as Man1 } from "../Man1";
import { Model as Man } from "../Man";
import { useOthers } from "../liveblocks.config";

function Test() {
  const others = useOthers();

  return (
    <Canvas>
      <Suspense>
        <Man1 scale={5} position={[0, -1, 0]} isPlaying={true} />
        {others.map(({ connectionId, presence }) =>
          presence.position ? (
            <Man key={connectionId} scale={5} position={presence.position} />
          ) : null
        )}
        <Classroom scale={3} />
      </Suspense>
      <ambientLight />
    </Canvas>
  );
}

export default Test;

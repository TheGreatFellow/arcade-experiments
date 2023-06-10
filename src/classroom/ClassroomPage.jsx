import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model as Classroom } from "./Classroom";
import { Model as Man1 } from "../Man1";
import { Model as Man } from "../Man";
import { useOthers } from "../liveblocks.config";

function ClassroomPage() {
  const others = useOthers();

  return (
    <Canvas>
      <Suspense>
        <Man1 scale={5} position={[0, -1, 0]} isPlaying={true} />
        {others.map(
          ({ connectionId, presence }) =>
            presence.position &&
            presence.name && (
              <group key={connectionId} position={presence.position}>
                <Man scale={5} val={presence.position} />
                <NameTag position={[0, 9.2, 0]} name={presence.name} />
              </group>
            )
        )}
        <Classroom scale={3} />
      </Suspense>
      <ambientLight />
    </Canvas>
  );
}

export default ClassroomPage;

import * as THREE from "three";
import { Text } from "@react-three/drei";

const NameTag = ({ position, name }) => {
  return (
    <group position={position}>
      <mesh>
        <planeGeometry args={[2, 0.4]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.2}
        font="https://fonts.googleapis.com/css2?family=Roboto"
        anchorX="center"
        anchorY="middle"
        color="black"
      >
        {name}
      </Text>
    </group>
  );
};

export default NameTag;

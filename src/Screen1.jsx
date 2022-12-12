import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useAspect,
  useVideoTexture,
  useTexture,
  Html,
} from "@react-three/drei";

export default function Screen1(props) {
  const size = useAspect(1920 * 4, 1080 * 4);
  // console.log(size);
  return (
    <mesh {...props}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url="./football.jpg" />}>
        <VideoMaterial url="./football.mp4" />
      </Suspense>
    </mesh>
  );
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { Model as Player } from "./Player";
import { Sky } from "@react-three/drei";

import "./App.css";
import Arcade1 from "./arcade-games/Arcade1";
import Arcade2 from "./arcade-games/Arcade2";
import Arcade3 from "./arcade-games/Arcade3";
import Ground from "./Ground";
import Screen from "./Screen";
import Screen1 from "./Screen1";
import Billboard from "./Billboard";
import Stadium from "./Stadiums";
import Gallery from "./Gallery";
import Ronaldo from "./Ronaldo";
import { Model as Man } from "./Man";
import { useOthers } from "./liveblocks.config.jsx";
import { Peer } from "peerjs";

const ArcadeModel = () => {
  const scene = useGLTF("/arcade-v2.glb");
  return <primitive object={scene.scene} dispose={null} />;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const others = useOthers();
  const [peerId, setPeerId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const remoteAudioRef = useRef(null);
  const peerInstance = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on("open", (id) => {
      setPeerId(id);
    });

    peer.on("call", (call) => {
      setLoggedIn(true);
      var getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

      getUserMedia({ audio: true }, (mediaStream) => {
        call.answer(mediaStream);
        call.on("stream", function (remoteStream) {
          remoteAudioRef.current.srcObject = remoteStream;
          remoteAudioRef.current.play();
        });
      });
    });

    peerInstance.current = peer;
  }, []);

  const call = (remotePeerId) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    getUserMedia({ audio: true }, (mediaStream) => {
      const call = peerInstance.current.call(remotePeerId, mediaStream);

      call.on("stream", (remoteStream) => {
        remoteAudioRef.current.srcObject = remoteStream;
        remoteAudioRef.current.play();
      });
    });
  };

  return (
    <>
      {loggedIn ? (
        <>
          <audio ref={remoteAudioRef} autoPlay />
          <Canvas camera={{ position: [0, 2, 4], fov: 55 }}>
            <Suspense fallback={null}>
              <Sky sunPosition={[50, 20, 50]} />
              <Stadium scale={25} />
              <Gallery
                scale={6}
                position={[50, 0.1, -20]}
                rotation={[0, -Math.PI, 0]}
              />
              {others.map(({ connectionId, presence }) => {
                console.log("presence", presence);
                if (presence.position) {
                  return (
                    <Man
                      key={connectionId}
                      scale={[5, 5, 5]}
                      position={[
                        presence.position.x,
                        presence.position.y,
                        presence.position.z,
                      ]}
                    />
                  );
                }
              })}
              <Ronaldo scale={30} position={[0, 0, 0]} />
              <Player scale={5} position={[10, 0, 0]} />
              {/* <OrbitControls /> */}
              <group position={[-90, 0, 30]} rotation={[0, Math.PI / 2, 0]}>
                <Arcade2 scale={0.08} />
              </group>
              <group position={[-90, 0, 20]} rotation={[0, Math.PI / 2, 0]}>
                <Arcade1 />
              </group>
              <group position={[-90, 0, -20]} rotation={[0, Math.PI / 2, 0]}>
                <Arcade3 scale={0.025} />
              </group>
              {/*<Billboard scale={0.03} position={[50, -5, 50]} />*/}
              <group position={[-110, 10, -4]} rotation={[0, Math.PI / 2, 0]}>
                <Screen
                  // position={[30.7, 2.5, 0.5]}
                  // rotation={[0, -1.2, 0]}
                  scale={[22, 21, 21]}
                />
                <Screen1
                  position={[0, 9.1, 1]}
                  // rotation={[0, -1.2, 0]}
                  scale={[27.448627904828147, 15.439853196465833, 1]}
                />
              </group>
              <Ground position={[0, 0, 0]} />
              <Environment preset="city" />
            </Suspense>

            <ambientLight intensity={0.5} />
          </Canvas>
        </>
      ) : (
        <div className="App">
          <div className="navbar">
            <h2>MetaPlex</h2>
            <p>About Us</p>
          </div>
          <h2>Join with a friend 🧑‍🤝‍🧑</h2>

          <p>
            My Id: &nbsp;
            <code
              onClick={() => {
                navigator.clipboard.writeText(peerId);
                setCopied(true);
              }}
            >
              {peerId}
            </code>
          </p>

          <input
            type="text"
            placeholder="Enter Other Player Id"
            value={remotePeerIdValue}
            onChange={(e) => setRemotePeerIdValue(e.target.value)}
          />
          <br />
          <button
            onClick={() => {
              setLoggedIn(true);
              call(remotePeerIdValue);
            }}
          >
            Connect to Player
          </button>
          <div className="divider">
            <div className="dash"></div>
            <p>OR</p>
            <div className="dash"></div>
          </div>
          <h2>Lone Wolf 🐺</h2>
          <button
            onClick={() => {
              setLoggedIn(true);
            }}
          >
            Join Individually
          </button>
          <br />
          <br />
          <br />
        </div>
      )}
    </>
  );
}

export default App;

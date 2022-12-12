import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useParams } from "react-router-dom";

import {
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
  Html,
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
import Ronaldo from "./Ronaldo";
import { Model as Portal } from "./Nether_portal";
import { Model as Man1 } from "./Man1";
import { Model as Man2 } from "./Man2";
import { Model as Man3 } from "./Man3";
import { Model as Woman } from "./Woman";
import { Model as Exit } from "./Exit";
import { useOthers } from "./liveblocks.config.jsx";
import { Peer } from "peerjs";

const ArcadeModel = () => {
  const scene = useGLTF("/arcade-v2.glb");
  return <primitive object={scene.scene} dispose={null} />;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [count, setCount] = useState(0);
  const others = useOthers();
  const [peerId, setPeerId] = useState("");
  const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
  const remoteAudioRef = useRef(null);
  const peerInstance = useRef(null);
  const connectedPeers = new Set();

  const { id } = useParams();

  const getAvatar = (id, isPlaying, props) => {
    switch (id) {
      case "1":
        return <Woman {...props} isPlaying={isPlaying} />;
      case "2":
        return <Man1 {...props} isPlaying={isPlaying} />;
      case "3":
        return <Man2 {...props} isPlaying={isPlaying} />;
      case "4":
        return <Man3 {...props} isPlaying={isPlaying} />;
      default:
        return null;
    }
  };

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
              <Stadium scale={70} position={[0, 7, 0]} />
              {others.map(({ connectionId, presence }) => {
                console.log("presence", presence);
                if (presence.id) {
                  if (!connectedPeers.has(presence.peerId)) {
                    call(presence.peerId);
                    connectedPeers.add(presence.peerId);
                  }
                  return (
                    // <Woman
                    //   key={connectionId}
                    //   scale={5}
                    //   position={[
                    //     presence.position.x,
                    //     presence.position.y,
                    //     presence.position.z,
                    //   ]}
                    // />
                    getAvatar(presence.id, false, {
                      key: connectionId,
                      scale: 5,
                      x: presence.x,
                      z: presence.z,
                      offset: presence.offset,
                    })
                  );
                }
              })}
              {/* <Ronaldo scale={30} position={[0, 0, 0]} /> */}
              {/* <Portal scale={5} position={[-50, -8, -100]} /> */}
              {/* <Player scale={5} position={[10, 0, 0]} /> */}
              {/* <Man1 scale={5} position={[0, 0, 0]} isPlaying /> */}
              {getAvatar(id, true, { scale: 5, peerId })}
              {/* <Woman scale={5} position={[5, 0, 0]} /> */}
              {/* <Man2 scale={5} position={[20, 0, 0]} />
              <Man3 scale={5} position={[15, 0, 0]} /> */}
              {/* <OrbitControls /> */}
              {/* <group position={[-90, 0, 30]} rotation={[0, Math.PI / 2, 0]}>
                <Arcade2 scale={0.08} />
              </group>
              <group position={[-90, 0, 20]} rotation={[0, Math.PI / 2, 0]}>
                <Arcade1 />
              </group>
              <group position={[-90, 0, -20]} rotation={[0, Math.PI / 2, 0]}>
                <Arcade3 scale={0.025} />
              </group> */}
              {/*<Billboard scale={0.03} position={[50, -5, 50]} />*/}
              <group
                scale={2}
                position={[0, 40, -30.5]}
                rotation={[0, Math.PI, 0]}
              >
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
              <group
                scale={2}
                position={[-27, 40, -4]}
                rotation={[0, (3 * Math.PI) / 2, 0]}
              >
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
              <group
                scale={2}
                position={[27, 40, -4]}
                rotation={[0, Math.PI / 2, 0]}
              >
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
              <group
                scale={2}
                position={[0, 40, 22.5]}
                rotation={[0, 2 * Math.PI, 0]}
              >
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
              {/* <Ground position={[0, 0, 0]} /> */}
              {/* <Environment preset="sunset" /> */}
            </Suspense>
            <ambientLight intensity={1} />
            <group position={[-28, -10, -140]}>
              <Portal scale={6} />
              <Exit scale={0.008} position={[26, 50.5, 3.7]} />
            </group>
            <group position={[-28, -10, 140]}>
              <Portal scale={6} />
              <Exit
                scale={0.008}
                position={[26, 50.5, -3.8]}
                rotation={[0, Math.PI, 0]}
              />
            </group>
            <group position={[230, -10, 20]}>
              <Portal scale={6} rotation={[0, Math.PI / 2, 0]} />
              <Exit
                scale={0.008}
                position={[26, 50.5, 3.7]}
                rotation={[0, (3 * Math.PI) / 2, 0]}
              />
            </group>
            <group position={[-230, -10, 20]} rotation={[0, Math.PI / 2, 0]}>
              <Portal scale={6} />
              <Exit scale={0.008} position={[26, 50.5, 3.7]} />
            </group>
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

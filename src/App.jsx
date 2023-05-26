import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useParams } from "react-router-dom";
// import { Room, RoomEvent, Participant } from "livekit-client";

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

import { Model as Portal } from "./Nether_portal";

import { Model as Exit } from "./Exit";
import { Model as Classroom } from "./Classroom";
import {Model as University} from "./University";

const ArcadeModel = () => {
  const scene = useGLTF("/arcade-v2.glb");
  return <primitive object={scene.scene} dispose={null} />;
};

function App() {
  

  const { id } = useParams();

  // const room = new Room({
  //   // automatically manage subscribed video quality
  //   adaptiveStream: true,

  //   // optimize publishing bandwidth and CPU for published tracks
  //   dynacast: true,
  // });

  // room
  //   .on(RoomEvent.TrackSubscribed, handleTrackSubscribed)
  //   .on(RoomEvent.TrackUnsubscribed, handleTrackUnsubscribed)
  //   .on(RoomEvent.LocalTrackUnpublished, handleLocalTrackUnpublished);

  // function handleTrackSubscribed(track, publication, participant) {
  //   // attach it to a new HTMLVideoElement or HTMLAudioElement
  //   console.log(participant);
  //   if (track.kind === "audio") {
  //     const element = track.attach();
  //     this.appendChild(element);
  //   }
  // }

  // function handleTrackUnsubscribed(track, publication, participant) {
  //   // remove tracks from all attached elements
  //   track.detach();
  // }

  // function handleLocalTrackUnpublished(track, participant) {
  //   // when local tracks are ended, update UI to remove them from rendering
  //   track.detach();
  // }

  // useEffect(() => {
  //   // connect to room
  //   room
  //     .connect(
  //       "wss://metaplex.livekit.cloud",
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzExNzgxOTEsImlzcyI6IkFQSUtHZDZzcmZGTUpvMiIsIm5iZiI6MTY3MTA5MTc5MSwic3ViIjoidXNlci1iYzNiNTcwNyIsInZpZGVvIjp7InJvb20iOiJyb29tLTE5MGM3NjMxIiwicm9vbUpvaW4iOnRydWV9fQ.PjJhYV9Nas_bLy6up3eyc601suykudKdCyXNJbh4f78"
  //     )
  //     .then(() => {
  //       console.log("connected to room", room.name);
  //       room.localParticipant.enableCameraAndMicrophone();
  //     });
  // }, []);

  // useEffect(() => {
  //   const peer = new Peer();

  //   peer.on("open", (id) => {
  //     setPeerId(id);
  //   });

  //   peer.on("call", (call) => {
  //     setLoggedIn(true);
  //     var getUserMedia =
  //       navigator.getUserMedia ||
  //       navigator.webkitGetUserMedia ||
  //       navigator.mozGetUserMedia;

  //     getUserMedia({ audio: true }, (mediaStream) => {
  //       call.answer(mediaStream);
  //       call.on("stream", function (remoteStream) {
  //         remoteAudioRef.current.srcObject = remoteStream;
  //         remoteAudioRef.current.play();
  //       });
  //     });
  //   });

  //   peerInstance.current = peer;
  // }, []);

  // const call = (remotePeerId) => {
  //   var getUserMedia =
  //     navigator.getUserMedia ||
  //     navigator.webkitGetUserMedia ||
  //     navigator.mozGetUserMedia;

  //   getUserMedia({ audio: true }, (mediaStream) => {
  //     const call = peerInstance.current.call(remotePeerId, mediaStream);

  //     call.on("stream", (remoteStream) => {
  //       remoteAudioRef.current.srcObject = remoteStream;
  //       remoteAudioRef.current.play();
  //     });
  //   });
  // };

  return (
    <>
      {/* <audio ref={remoteAudioRef} autoPlay /> */}
      <Canvas camera={{ position: [-410, 50, 300], fov: 55 }}>
        <Suspense
          fallback={
            <Html>
              <h1>Loading...</h1>
            </Html>
          }
        >
          <University scale={200} position={[20,-30,10]}/>
          {/* <Sky sunPosition={[50, 20, 50]} />
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
          })} */}
          {/* <Ronaldo scale={30} position={[0, 0, 0]} /> */}
          {/* <Portal scale={5} position={[-50, -8, -100]} /> */}
          {/* <Player scale={5} position={[10, 0, 0]} /> */}
          {/* <Man1 scale={5} position={[0, 0, 0]} isPlaying /> */}
          {/* {getAvatar(id, true, { scale: 5, peerId })} */}
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
          {/* <group scale={2} position={[0, 40, -30.5]} rotation={[0, Math.PI, 0]}>
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
          </group> */}
          {/* <Ground position={[0, 0, 0]} /> */}
          {/* <Environment preset="sunset" /> */}
        </Suspense>
        <OrbitControls />
        <pointLight />
        <ambientLight intensity={1} />
        <group position={[7, -10, -160]}>
          <Portal scale={5} position={[-37, 24, 0]} />
          <Exit scale={0.008} position={[-37, 51.5, 3.7]} />
          <Html position={[-36, 45, 3.7]} transform>
            <h1
              style={{
                color: "white",
                fontSize: "180px",
              }}
            >
              Arcade
            </h1>
          </Html>
        </group>
        <group position={[-28, -10, 140]}>
          <Portal scale={5} position={[65, 24, 58]} rotation={[0,3,0]} />
          <Exit
            scale={0.008}
            position={[65, 50.5, 58]}
            rotation={[0, Math.PI, 0]}
          />
          <Html position={[65, 43, 58]} rotation={[0, Math.PI, 0]} transform>
            <h1
              style={{
                color: "white",
                fontSize: "180px",
              }}
            >
              Merchandise
            </h1>
          </Html>
        </group>
        <group position={[230, -10, 20]}>
          <Portal
            scale={5}
            rotation={[0, Math.PI / 2 + 2.7, 0]}
            position={[-70, 23, 93]}
          />
          <Exit
            scale={0.008}
            position={[-70, 50.5, 93]}
            rotation={[0, (3 * Math.PI) / 2 + 2.7, 0]}
          />
          <Html
            position={[-70, 43, 93]}
            rotation={[0, (3 * Math.PI) / 2 + 2.7, 0]}
            transform
          >
            <h1
              style={{
                color: "white",
                fontSize: "180px",
              }}
            >
              NFT Gallery
            </h1>
          </Html>
        </group>
        <group position={[-230, -10, 20]} rotation={[0, Math.PI / 2, 0]}>
          <Portal scale={5} position={[84, 24, 70]} rotation={[0,2.9,0]} />
          <Exit scale={0.008} position={[84, 50.5, 70]} rotation={[0,2.9,0]}/>
          <Html position={[84, 43, 70]} rotation={[0,2.9,0]} transform>
            <h1
              style={{
                color: "white",
                fontSize: "180px",
              }}
            >
              Games
            </h1>
          </Html>
        </group>
      </Canvas>
    </>
    // )
    // : (
    //   <div className="App">
    //     <div className="navbar">
    //       <h2>MetaPlex</h2>
    //       <p>About Us</p>
    //     </div>
    //     <h2>Join with a friend 🧑‍🤝‍🧑</h2>

    //     <p>
    //       My Id: &nbsp;
    //       <code
    //         onClick={() => {
    //           navigator.clipboard.writeText(peerId);
    //           setCopied(true);
    //         }}
    //       >
    //         {peerId}
    //       </code>
    //     </p>

    //     <input
    //       type="text"
    //       placeholder="Enter Other Player Id"
    //       value={remotePeerIdValue}
    //       onChange={(e) => setRemotePeerIdValue(e.target.value)}
    //     />
    //     <br />
    //     <button
    //       onClick={() => {
    //         setLoggedIn(true);
    //         call(remotePeerIdValue);
    //       }}
    //     >
    //       Connect to Player
    //     </button>
    //     <div className="divider">
    //       <div className="dash"></div>
    //       <p>OR</p>
    //       <div className="dash"></div>
    //     </div>
    //     <h2>Lone Wolf 🐺</h2>
    //     <button
    //       onClick={() => {
    //         setLoggedIn(true);
    //       }}
    //     >
    //       Join Individually
    //     </button>
    //     <br />
    //     <br />
    //     <br />
    //   </div>
    // )}
    // </>
  );
}

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [currentAccount, setCurrentAccount] = useState(null);
//   const [characterNFT, setCharacterNFT] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [count, setCount] = useState(0);
//   const others = useOthers();
//   const [peerId, setPeerId] = useState("");
//   const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
//   const remoteAudioRef = useRef(null);
//   const peerInstance = useRef(null);
//   const checkIfWalletIsConnected = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         console.log("Make sure you have MetaMask!");

//         setIsLoading(false);
//         return;
//       } else {
//         console.log("We have the ethereum object", ethereum);

//         const accounts = await ethereum.request({
//           method: "eth_accounts",
//         });

//         if (accounts.length !== 0) {
//           const account = accounts[0];
//           console.log("Found an authorized account:", account);
//           setCurrentAccount(account);
//         } else {
//           console.log("No authorized account found");
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     setIsLoading(false);
//   };
//   const checkNetwork = async () => {
//     try {
//       if (window.ethereum.networkVersion !== "5") {
//         alert("Please connect to Rinkeby!");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     const peer = new Peer();

//     peer.on("open", (id) => {
//       setPeerId(id);
//     });

//     peer.on("call", (call) => {
//       setLoggedIn(true);
//       var getUserMedia =
//         navigator.getUserMedia ||
//         navigator.webkitGetUserMedia ||
//         navigator.mozGetUserMedia;

//       getUserMedia({ audio: true }, (mediaStream) => {
//         call.answer(mediaStream);
//         call.on("stream", function (remoteStream) {
//           remoteAudioRef.current.srcObject = remoteStream;
//           remoteAudioRef.current.play();
//         });
//       });
//     });

//     peerInstance.current = peer;
//   }, []);

//   const call = (remotePeerId) => {
//     var getUserMedia =
//       navigator.getUserMedia ||
//       navigator.webkitGetUserMedia ||
//       navigator.mozGetUserMedia;

//     getUserMedia({ audio: true }, (mediaStream) => {
//       const call = peerInstance.current.call(remotePeerId, mediaStream);

//       call.on("stream", (remoteStream) => {
//         remoteAudioRef.current.srcObject = remoteStream;
//         remoteAudioRef.current.play();
//       });
//     });
//   };
//   const connectWalletAction = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         alert("Get MetaMask!");
//         return;
//       }
//       const accounts = await ethereum.request({
//         //request access to account
//         method: "eth_requestAccounts",
//       });
//       console.log("Connected", accounts[0]); //print the public address
//       setCurrentAccount(accounts[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     setIsLoading(true);
//     checkIfWalletIsConnected();
//     checkNetwork();
//   }, []);

//   useEffect(() => {
//     const fetchNFTMetadata = async () => {
//       console.log("Checking for Character NFT on address:", currentAccount);

//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const gameContract = new ethers.Contract(
//         CONTRACT_ADDRESS,
//         myEpicGame.abi,
//         signer
//       );

//       const characterNFT = await gameContract.checkIfUserHasNFT();
//       if (characterNFT.characterName) {
//         console.log("User has character NFT");
//         setCharacterNFT(transformCharacterData(characterNFT));
//       }

//       setIsLoading(false);
//     };

//     if (currentAccount) {
//       console.log("CurrentAccount:", currentAccount);
//       fetchNFTMetadata();
//     }
//   }, [currentAccount]);

//   return (
//     <>
//       {loggedIn ? (
//         <>
//           <audio ref={remoteAudioRef} autoPlay />
//           <Canvas camera={{ position: [0, 2, 4], fov: 55 }}>
//             <Suspense fallback={null}>
//               <Sky sunPosition={[50, 20, 50]} />
//               <Stadium scale={25} />
//               <Gallery
//                 scale={6}
//                 position={[50, 0.1, -20]}
//                 rotation={[0, -Math.PI, 0]}
//               />
//               {others.map(({ connectionId, presence }) => {
//                 console.log("presence", presence);
//                 if (presence.position) {
//                   return (
//                     <Man
//                       key={connectionId}
//                       scale={[5, 5, 5]}
//                       position={[
//                         presence.position.x,
//                         presence.position.y,
//                         presence.position.z,
//                       ]}
//                     />
//                   );
//                 }
//               })}
//               <Ronaldo scale={30} position={[0, 0, 0]} />
//               <Player scale={5} position={[10, 0, 0]} />
//               <group position={[-90, 0, 30]} rotation={[0, Math.PI / 2, 0]}>
//                 <Arcade2 scale={0.08} />
//               </group>
//               <group position={[-90, 0, 20]} rotation={[0, Math.PI / 2, 0]}>
//                 <Arcade1 />
//               </group>
//               <group position={[-90, 0, -20]} rotation={[0, Math.PI / 2, 0]}>
//                 <Arcade3 scale={0.025} />
//               </group>
//               {/*<Billboard scale={0.03} position={[50, -5, 50]} />*/}
//               <group position={[-110, 10, -4]} rotation={[0, Math.PI / 2, 0]}>
//                 <Screen
//                   // position={[30.7, 2.5, 0.5]}
//                   // rotation={[0, -1.2, 0]}
//                   scale={[22, 21, 21]}
//                 />
//                 <Screen1
//                   position={[0, 9.1, 1]}
//                   // rotation={[0, -1.2, 0]}
//                   scale={[27.448627904828147, 15.439853196465833, 1]}
//                 />
//               </group>
//               <Ground position={[0, 0, 0]} />
//               <Environment preset="city" />
//             </Suspense>

//             <ambientLight intensity={0.5} />
//           </Canvas>
//         </>
//       ) : (
//         <div className="App">
//           <div className="navbar">
//             <h2>MetaPlex</h2>
//             <button
//               className="cta-button connect-wallet-button"
//               onClick={connectWalletAction}
//             >
//               {currentAccount ? currentAccount : "Connect Wallet"}
//             </button>
//           </div>
//           <h2>Join with a friend 🧑‍🤝‍🧑</h2>

//           <p>
//             My Id: &nbsp;
//             <code
//               onClick={() => {
//                 navigator.clipboard.writeText(peerId);
//                 setCopied(true);
//               }}
//             >
//               {peerId}
//             </code>
//           </p>

//           <input
//             type="text"
//             placeholder="Enter Other Player Id"
//             value={remotePeerIdValue}
//             onChange={(e) => setRemotePeerIdValue(e.target.value)}
//           />
//           <br />
//           <button
//             onClick={() => {
//               setLoggedIn(true);
//               call(remotePeerIdValue);
//             }}
//           >
//             Connect to Player
//           </button>
//           <div className="divider">
//             <div className="dash"></div>
//             <p>OR</p>
//             <div className="dash"></div>
//           </div>
//           <h2>Lone Wolf 🐺</h2>
//           <button
//             onClick={() => {
//               setLoggedIn(true);
//             }}
//           >
//             Join Individually
//           </button>
//           <br />
//           <br />
//           <br />
//         </div>
//       )}
//     </>
//   );
// }

export default App;

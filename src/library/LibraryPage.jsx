import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { Model as Library } from "./Library";
import { Model as Man1 } from "../Man1";
import { Model as Man } from "../Man";
import { useOthers } from "../liveblocks.config";
import { Html } from "@react-three/drei";
import NameTag from "../NameTag";
// import { toWei } from "web3-utils";

function LibraryPage() {
  const others = useOthers();
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);

  if (others && numberOfPlayers != others.length) {
    setNumberOfPlayers(others.length);
  }

  const fund = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          const transaction = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [
              {
                from: accounts[0],
                to: "0x917a68cC6F5C0CcEC69C9C0b3Bd9A4A88573b38C", // Replace with the recipient address
                value: "0x38d7ea4c68000",
              },
            ],
          });
          console.log("Transaction Hash:", transaction);
        }
      } catch (error) {
        console.log("Error checking wallet connection:", error);
      }
    } else {
      console.log("Metamask extension not found");
    }
  };

  return (
    <Canvas>
      <Suspense>
        <Man1 scale={5} isPlaying={true} />
        {Array.from({ length: numberOfPlayers }).map((_, index) => (
          <group key={index}>
            <Man scale={5} callback={() => others} index={index} />
            {/* <NameTag position={[0, 9.2, 0]} name={presence.name} /> */}
          </group>
        ))}
        {/* {otherPlayers.current.map(
          ({ connectionId, presence }) =>
            presence.position &&
            presence.name &&
            presence.position[0] != 0 && (
              <group key={connectionId} position={presence.position}>
                <Man scale={5} val={presence.position} />
                <NameTag position={[0, 9.2, 0]} name={presence.name} />
              </group>
            )
        )} */}
        <Library scale={6} />
        <Html occlude transform position={[0, 8, -100]}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              justifyItems: "center",
              maxWidth: "2000px",
              margin: "0 auto",
              background: "white",
              padding: "60px",
              borderRadius: "40px",
            }}
          >
            <h1 style={{ color: "black", margin: "0 auto 30px auto" }}>
              Research Projects
            </h1>
            <div style={{ display: "flex" }}>
              <div style={{ textAlign: "center", margin: "0 20px" }}>
                <img
                  src="https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTE0elNaaTRmY0wuX0FDX1NMMTUwMF8uanBn.jpg"
                  alt="Image 1"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>
                  One Brain: Adapting a single standalone CPU to multiple
                  form-factor displays
                </h2>
                <h3 style={{ color: "black" }}>Pareekshit Joshi</h3>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "150px",
                  }}
                  onClick={() => fund()}
                >
                  Fund
                </button>
              </div>
              <div style={{ textAlign: "center", margin: "0 20px" }}>
                <img
                  src="https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTE0elNaaTRmY0wuX0FDX1NMMTUwMF8uanBn.jpg"
                  alt="Image 2"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>One Brain</h2>
                <h3 style={{ color: "black" }}>Shreyas Patil</h3>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "150px",
                  }}
                >
                  Fund
                </button>
              </div>
              <div style={{ textAlign: "center", margin: "0 20px" }}>
                <img
                  src="https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTE0elNaaTRmY0wuX0FDX1NMMTUwMF8uanBn.jpg"
                  alt="Image 3"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>One Brain</h2>
                <h3 style={{ color: "black" }}>Ankit Singh</h3>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "150px",
                  }}
                >
                  Fund
                </button>
              </div>
              <div style={{ textAlign: "center", margin: "0 20px" }}>
                <img
                  src="https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTE0elNaaTRmY0wuX0FDX1NMMTUwMF8uanBn.jpg"
                  alt="Image 3"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>One Brain</h2>
                <h3 style={{ color: "black" }}>Manu S H</h3>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "150px",
                  }}
                >
                  Fund
                </button>
              </div>
              <div style={{ textAlign: "center", margin: "0 20px" }}>
                <img
                  src="https://www.nepal.ubuy.com/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTE0elNaaTRmY0wuX0FDX1NMMTUwMF8uanBn.jpg"
                  alt="Image 3"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>One Brain</h2>
                <h3 style={{ color: "black" }}>Dr. Ramya R S</h3>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "150px",
                  }}
                >
                  Fund
                </button>
              </div>
            </div>
          </div>
        </Html>
      </Suspense>
      <ambientLight />
    </Canvas>
  );
}

export default LibraryPage;

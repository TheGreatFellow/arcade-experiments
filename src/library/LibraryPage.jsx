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
                  src="https://www.iconpacks.net/icons/1/free-document-icon-901-thumb.png"
                  alt="Image 1"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>
                  Educational applications of metaverse: possibilities and
                  limitations
                </h2>
                <h3 style={{ color: "black" }}>Pareekshit Joshi</h3>
                <a
                  href="https://synapse.koreamed.org/articles/1149230"
                  target="_blank"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    margin: "0 4px 0 0",
                    padding: "12px 32px",
                    borderRadius: "8px",
                  }}
                >
                  Link
                </a>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "100px",
                  }}
                  onClick={() => fund()}
                >
                  Fund
                </button>
              </div>
              <div style={{ textAlign: "center", margin: "0 20px" }}>
                <img
                  src="https://www.iconpacks.net/icons/1/free-document-icon-901-thumb.png"
                  alt="Image 2"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>
                  Nutbaas: A blockchain-as-a-service platform
                </h2>
                <h3 style={{ color: "black" }}>Shreyas Patil</h3>
                <a
                  href="https://ieeexplore.ieee.org/iel7/6287639/8600701/08840920.pdf"
                  target="_blank"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    margin: "0 4px 0 0",
                    padding: "12px 32px",
                    borderRadius: "8px",
                  }}
                >
                  Link
                </a>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "100px",
                  }}
                  onClick={() => fund()}
                >
                  Fund
                </button>
              </div>
              <div style={{ textAlign: "center", margin: "0 20px" }}>
                <img
                  src="https://www.iconpacks.net/icons/1/free-document-icon-901-thumb.png"
                  alt="Image 3"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>
                  A governance model for the application of AI in health care
                </h2>
                <h3 style={{ color: "black" }}>Ankit Singh</h3>
                <a
                  href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7647243/"
                  target="_blank"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    margin: "0 4px 0 0",
                    padding: "12px 32px",
                    borderRadius: "8px",
                  }}
                >
                  Link
                </a>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "100px",
                  }}
                  onClick={() => fund()}
                >
                  Fund
                </button>
              </div>
              <div style={{ textAlign: "center", margin: "0 20px" }}>
                <img
                  src="https://www.iconpacks.net/icons/1/free-document-icon-901-thumb.png"
                  alt="Image 3"
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <h2 style={{ color: "black" }}>
                  Neurosymbolic AI: the 3rd wave
                </h2>
                <h3 style={{ color: "black" }}>Manu S H</h3>
                <a
                  href="https://link.springer.com/article/10.1007/s10462-023-10448-w"
                  target="_blank"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    margin: "0 4px 0 0",
                    padding: "12px 32px",
                    borderRadius: "8px",
                  }}
                >
                  Link
                </a>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    width: "100px",
                  }}
                  onClick={() => fund()}
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

import React, { useState, useEffect } from "react";
import Web3 from "web3";

const LandingPage = () => {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            setConnected(true);
          }
        } catch (error) {
          console.log("Error checking wallet connection:", error);
        }
      } else {
        console.log("Metamask extension not found");
      }
    };

    checkWalletConnection();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setWalletAddress(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.log("Error connecting wallet:", error);
      }
    } else {
      console.log("Metamask extension not found");
    }
  };

  const formatWalletAddress = (address) => {
    if (address) {
      const beginning = address.slice(0, 6);
      const end = address.slice(-4);
      return `${beginning}...${end}`;
    }
    return "";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {connected && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3
              style={{ marginBottom: "20px", color: "white" }}
            >{`Connected to: ${formatWalletAddress(walletAddress)}`}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="green"
              viewBox="0 0 16 16"
              style={{ marginLeft: "5px" }}
            >
              <path d="M6.166 11.247l-3.36-3.36L1 9.96l5.166 5.166L15.96 4.415 14.543 3l-8.377 8.247z" />
            </svg>
          </div>
          <input
            type="name"
            style={{
              width: "100%",
              padding: "4px 16px",
              borderRadius: "0.375rem" /* You may adjust the value as needed */,
              fontWeight: "bold",
              border: "1px solid #ccc",
              borderColor: "#ccc",
              outline: "none",
            }}
            placeholder="Enter Name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>
      )}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#F6851B",
          color: "white",
          borderRadius: "5px",
          fontSize: "18px",
          fontWeight: "bold",
          margin: "20px 0 0 0",
          cursor: "pointer",
        }}
        onClick={
          connected
            ? () => {
                localStorage.setItem("playerName", playerName);
                window.location = "/classroom";
              }
            : connectWallet
        }
      >
        {connected ? (
          "Enter Metaversity ->"
        ) : (
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png?20220831120339"
              alt="Metamask Logo"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            Connect Wallet
          </>
        )}
      </button>
    </div>
  );
};

export default LandingPage;

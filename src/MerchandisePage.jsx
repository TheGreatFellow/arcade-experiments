import React from "react";
import "./MerchandisePage.css";

const MerchandisePage = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item">
          <img
            src="https://cdn.shopify.com/s/files/1/2389/6625/products/Home1_ae350648-ffaa-48c8-aae4-ddc6b1888336.jpg?v=1647496802"
            height={200}
            alt="Merchandise"
          />
          <p style={{ color: "black", margin: "0" }}>Real Madrid</p>
          <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
            Price: 0.0001 ETH
          </p>
          <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
            Unique Code: #986565
          </p>
          <br />
          <button style={{ fontSize: "16px", width: "100%" }}>
            Mint Unique NFT
          </button>
        </div>
        <div className="grid-item">
          <img
            src="https://www.copycatz.in/wp-content/uploads/2022/03/manchester-united-home-2021-22-121379.jpg"
            height={200}
            alt="Merchandise"
          />
          <p style={{ color: "black", margin: "0" }}>Manchester United</p>
          <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
            Price: 0.0001 ETH
          </p>
          <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
            Unique Code: #988752
          </p>
          <br />
          <button style={{ fontSize: "16px", width: "100%" }}>
            Mint Unique NFT
          </button>
        </div>
        <div className="grid-item">
          <img
            src="https://n4.sdlcdn.com/imgs/h/j/y/Juventus-Ronaldo-Home-Jersey-Black-SDL769164442-1-45c6f.jpg"
            height={200}
            alt="Merchandise"
          />
          <p style={{ color: "black", margin: "0" }}>Juventus</p>
          <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
            Price: 0.0001 ETH
          </p>
          <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
            Unique Code: #989672
          </p>
          <br />
          <button style={{ fontSize: "16px", width: "100%" }}>
            Mint Unique NFT
          </button>
        </div>
        <div className="grid-item">
          <img
            src="https://i.pinimg.com/474x/49/11/aa/4911aaed43dc6b77680a4deaacbc07a5.jpg"
            height={200}
            alt="Merchandise"
          />
          <p style={{ color: "black", margin: "0" }}>Arsenal</p>
          <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
            Price: 0.0001 ETH
          </p>
          <p style={{ color: "black", margin: "0", fontSize: "14px" }}>
            Unique Code: #982876
          </p>
          <br />
          <button style={{ fontSize: "16px", width: "100%" }}>
            Mint Unique NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchandisePage;

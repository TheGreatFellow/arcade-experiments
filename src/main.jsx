import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "./liveblocks.config.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoomProvider id="room-1" initialPresence={{ position: null }}>
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => <App />}
      </ClientSideSuspense>
    </RoomProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "./liveblocks.config.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArcadePage from "./ArcadePage";
import GalleryPage from "./GalleryPage";
import MerchandisePage from "./MerchandisePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/:id"
          element={
            <RoomProvider id="home" initialPresence={{ position: null }}>
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <App />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
        <Route
          path="/arcade/:id"
          element={
            <RoomProvider id="arcade" initialPresence={{ position: null }}>
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <ArcadePage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
        <Route
          path="/gallery/:id"
          element={
            <RoomProvider id="gallery" initialPresence={{ position: null }}>
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <GalleryPage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
        <Route
          path="/merchandise"
          element={
            <RoomProvider id="merchandise" initialPresence={{ position: null }}>
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <MerchandisePage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

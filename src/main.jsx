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
import ConfPage from "./ConfPage";
import AudPage from "./AudPage";
import LibPage from "./LibPage";
import PoolPage from "./PoolPage";
import ClassroomPage from "./classroom/ClassroomPage";
import LibraryPage from "./library/LibraryPage";
import LandingPage from "./landing/LandingPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/classroom"
          element={
            <RoomProvider
              id="classroom"
              initialPresence={{
                position: [0, -1, 0],
                name: localStorage.getItem("playerName"),
              }}
            >
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <ClassroomPage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
        <Route
          path="/library"
          element={
            <RoomProvider
              id="library"
              initialPresence={{
                position: [0, -1, 0],
                name: localStorage.getItem("playerName"),
              }}
            >
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <LibraryPage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
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
          path="/games/:id"
          element={
            <RoomProvider id="game" initialPresence={{ position: null }}>
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <ConfPage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
        <Route
          path="/gallery/:id"
          element={
            <RoomProvider id="gallery" initialPresence={{ position: null }}>
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <LibPage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
        <Route
          path="/pool/:id"
          element={
            <RoomProvider id="pool" initialPresence={{ position: null }}>
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <PoolPage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
        <Route
          path="/merchandise/:id"
          element={
            <RoomProvider id="merchandise" initialPresence={{ position: null }}>
              <ClientSideSuspense fallback={<div>Loading...</div>}>
                {() => <AudPage />}
              </ClientSideSuspense>
            </RoomProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

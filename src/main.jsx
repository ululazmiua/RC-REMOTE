import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import PlayGame from "./components/play/playGame.jsx";
import Menu from "./components/play/Menu.jsx";
import Documentation from "./components/documentationPage/Documentation.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Menu />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="/doc" element={<Documentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

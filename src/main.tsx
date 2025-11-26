import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import NotesPage from "./pages/NotesPage";
import WorksPage from "./pages/WorksPage";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<AboutPage />} />
        <Route path="works" element={<WorksPage />} />
        <Route path="notes" element={<NotesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

import "@ps1ui/core/styles.css";
import "./index.css";

import { PS1Root } from "@ps1ui/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { IdeShell } from "./components/ide";
import { AboutPage } from "./pages/AboutPage";
import { NotesPage } from "./pages/NotesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { WorksPage } from "./pages/WorksPage";

const router = createBrowserRouter([
  {
    Component: IdeShell,
    children: [
      {
        index: true,
        Component: AboutPage,
      },
      {
        path: "works",
        Component: WorksPage,
      },
      {
        path: "notes",
        Component: NotesPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PS1Root>
      <RouterProvider router={router} />
    </PS1Root>
  </StrictMode>,
);

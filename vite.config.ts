import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/config": path.resolve(__dirname, "config.ts"),
      "@/types": path.resolve(__dirname, "src/types.ts"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/data": path.resolve(__dirname, "data"),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    svgr(),
    tailwindcss(),
  ],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/teddy_portfolio/",
  optimizeDeps: {
    include: ["react-slick"], // <-- Add this
  },
});

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import preload from "vite-plugin-preload";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["@fortawesome/react-fontawesome", "@fortawesome/free-solid-svg-icons", "@fortawesome/free-brands-svg-icons"],
        },
      },
    },
  },
});
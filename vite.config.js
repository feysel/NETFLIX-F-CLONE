import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// vite.config.js
export default {
  base: '/NETFLEX-F-CLONE/', // Make sure this is your GitHub Pages URL path
  build: {
    outDir: 'dist' // This is the default, but it's good to confirm
  }
}
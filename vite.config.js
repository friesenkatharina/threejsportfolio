import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "three"],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Optional, um die Warnung für große Chunks anzupassen
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "service-worker.ts",
      manifest: {
        name: "Howwe - PWA POC",
        icons: [
          {
            src: "icons/favicon.ico",
            sizes: "48x48",
            type: "image/x-icon",
          },
          {
            src: "icons/logo192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "icons/logo512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        start_url: "/pwa-poc",
        display: "standalone",
        theme_color: "#ff6309",
        background_color: "#ffffff",
      },
    }),
  ],
  base: "/pwa-poc/",
});

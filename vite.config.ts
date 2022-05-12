import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  name: "Howwe - PWA POC",
  id: "/pwa-poc",
  start_url: "https://reforce-international.github.io/pwa-poc/",
  display: "standalone",
  theme_color: "#ff6309",
  background_color: "#ffffff",
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
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "service-worker.ts",
      scope: "/pwa-poc/",
      base: "/pwa-poc/",
      devOptions: {
        enabled: process.env.NODE_ENV !== "production",
        /* when using generateSW the PWA plugin will switch to classic */
        type: "module",
        navigateFallback: "index.html",
      },
      manifest,
    }),
  ],
  base: "/pwa-poc/",
});

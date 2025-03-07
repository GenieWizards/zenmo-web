import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    VitePWA({
      registerType: "autoUpdate",
      // Enable devOoptions to see the output of the plugin in development
      // devOptions: {
      //   enabled: true,
      // },
      // generates 'manifest.webmanifest' file on build
      manifest: {
        // caches the assets/icons mentioned (assets/* includes all the assets present in your src/ directory)
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "assets/*"],
        name: "Simplifying Progressive Web App (PWA) Development with Vite: A Beginners Guide",
        short_name: "PWA Guide",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/images/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        // defining cached files formats
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});

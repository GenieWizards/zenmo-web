import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line node/prefer-global/process
  const env = loadEnv(mode, process.cwd(), "");

  const API_URL = `${env.VITE_API_URL ?? "http://localhost:8999"}`;
  const PORT = `${env.VITE_PORT ?? "3000"}`;
  const NODE_ENV = `${env.NODE_ENV ?? "development"}`;

  return {
    server: {
      port: Number(PORT),
      API_URL,
      NODE_ENV,
    },
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
        // Enable devOptions to see the output of the plugin in development
        // devOptions: {
        //   enabled: true,
        // },
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
    },
  };
});

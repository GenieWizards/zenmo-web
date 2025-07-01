import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tanstackRouter from "@tanstack/router-plugin/vite";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line node/prefer-global/process
  const env = loadEnv(mode, process.cwd(), "");

  const PORT = `${env.VITE_PORT ?? "3000"}`;

  return {
    server: {
      port: Number(PORT),
    },
    plugins: [
      tanstackRouter({
        autoCodeSplitting: true,
      }),
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
      tanstackStart({
        tsr: {
          srcDirectory: "src",
        },
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
    },
  };
});

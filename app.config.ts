import { defineConfig } from "@tanstack/react-start/config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { VitePWA } from "vite-plugin-pwa";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  tsr: {
    appDirectory: "src",
  },
  vite: {
    plugins: [
      TanStackRouterVite({
        autoCodeSplitting: true,
      }),
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
  },
});

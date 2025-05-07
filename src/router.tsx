import { createRouter as createTanStackRouter } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

// Create a new router instance
export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
  });

  return router;
}

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

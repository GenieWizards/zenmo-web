import { createRouter as createTanStackRouter } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

import { NotFound } from "./components/not-found";

/**
 * Creates and configures a new router instance with the application's route tree, intent-based preloading, and scroll restoration enabled.
 *
 * @returns A configured router instance for use in the application.
 */
export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultNotFoundComponent: () => <NotFound />,
  });

  return router;
}

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

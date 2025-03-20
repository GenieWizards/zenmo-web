import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {
        import.meta.env.VITE_NODE_ENV !== "production"
          && (
            <>
              <ReactQueryDevtools buttonPosition="bottom-right" />
              <TanStackRouterDevtools />
            </>
          )
      }
    </>
  ),
});

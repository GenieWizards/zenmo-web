import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { IS_ENV_PRODUCTION } from "@/utils/constants";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {
        !IS_ENV_PRODUCTION
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

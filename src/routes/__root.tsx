import appCss from "@/styles/app.css?url";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/components/theme-provider";
import { IS_PRODUCTION } from "@/utils/constants";
import { seo } from "@/utils/seo";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      ...seo({
        title: "Zenmo - The ultimate Finance Management System",
        description: `Zenmo: Split expenses, track finances, find balance.`,
      }),
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
});

/**
 * Renders the application's root layout, wrapping nested routes with the main HTML document structure.
 *
 * This component serves as the entry point for all nested routes, ensuring they are rendered within the {@link RootDocument} layout.
 */
function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

/**
 * Renders the root HTML document structure for the application, including head content, React Query context, developer tools, notifications, and scripts.
 *
 * @param children - The React nodes to be rendered within the document body.
 */
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />

        {/* FIXME: Find a better way to add the below script safely */}

        {/* Google Tag Manager snippet */}
        {/* <script */}
        {/*   dangerouslySetInnerHTML={{ */}
        {/*     __html: ` */}
        {/*       window.dataLayer = window.dataLayer || []; */}
        {/*       function gtag() { */}
        {/*         dataLayer.push(arguments); */}
        {/*       } */}
        {/*       gtag("js", new Date()); */}
        {/**/}
        {/*       gtag("config", "G-TRCB701S2S"); */}
        {/*     `, */}
        {/*   }} */}
        {/* /> */}
        {/* <script */}
        {/*   dangerouslySetInnerHTML={{ */}
        {/*     __html: ` */}
        {/*       (function (c, l, a, r, i, t, y) { */}
        {/*         c[a] = */}
        {/*           c[a] || */}
        {/*           function () { */}
        {/*             (c[a].q = c[a].q || []).push(arguments); */}
        {/*           }; */}
        {/*         t = l.createElement(r); */}
        {/*         t.async = 1; */}
        {/*         t.src = "https://www.clarity.ms/tag/" + i; */}
        {/*         y = l.getElementsByTagName(r)[0]; */}
        {/*         y.parentNode.insertBefore(t, y); */}
        {/*       })(window, document, "clarity", "script", "qm5cfatim4"); */}
        {/*     `, */}
        {/*   }} */}
        {/* /> */}
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            {children}
            {!IS_PRODUCTION && (
              <>
                <ReactQueryDevtools buttonPosition="bottom-right" />
                <TanStackRouterDevtools />
              </>
            )}
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>

        <Scripts />
      </body>
    </html>
  );
}

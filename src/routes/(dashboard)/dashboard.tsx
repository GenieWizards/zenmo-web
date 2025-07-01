import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardBreadcrumb } from "@/modules/dashboard/ui/components/dashboard-breadcrumb";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

export const Route = createFileRoute("/(dashboard)/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").slice(2);

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main>
        <div className="flex items-center space-x-2">
          <SidebarTrigger />
          <DashboardBreadcrumb pathnames={pathnames} />
        </div>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

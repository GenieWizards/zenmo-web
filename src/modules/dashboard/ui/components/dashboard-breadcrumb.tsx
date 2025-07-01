import { Link } from "@tanstack/react-router";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function formatPathname(pathname: string) {
  return pathname.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function DashboardBreadcrumb({ pathnames }: { pathnames: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.length !== 0 && <BreadcrumbSeparator />}
        {pathnames.map((pathname, index) => (
          <Fragment key={pathname}>
            <BreadcrumbItem>
              {index < pathnames.length - 1
                ? (
                    <BreadcrumbLink asChild>
                      <Link to={pathname}>{formatPathname(pathname)}</Link>
                    </BreadcrumbLink>
                  )
                : (
                    <BreadcrumbPage>{formatPathname(pathname)}</BreadcrumbPage>
                  )}
            </BreadcrumbItem>
            {index < pathnames.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

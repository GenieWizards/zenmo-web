import { Link } from "@tanstack/react-router";
import { Fragment, useId } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function DashboardBreadcrumb({ pathnames }: { pathnames: string[] }) {
  const id = useId();

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
          <Fragment key={id}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {index < pathnames.length - 1
                  ? <Link to={pathname}>{pathname}</Link>
                  : <BreadcrumbPage>{pathname}</BreadcrumbPage>}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < pathnames.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

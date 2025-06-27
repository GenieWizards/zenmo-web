import { Separator } from "@radix-ui/react-menubar";
import { Link } from "@tanstack/react-router";
import { ChartSpline, ChevronUp, NotebookText, User, User2, Users } from "lucide-react";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const firstSection = [
  {
    icon: NotebookText,
    label: "Add Expense",
    href: "/add-expense",
  },
  {
    icon: Users,
    label: "Groups",
    href: "/groups",
  },
  {
    icon: User,
    label: "Friends",
    href: "/friends",
  },
  {
    icon: ChartSpline,
    label: "Activity",
    href: "/activity",
  },
];

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="text-sidebar-accent-foreground">
        <Link to="/dashboard" className="flex items-center gap-2 px-2 pt-2">
          <img src="/logo.svg" alt="Zenmo Logo" />
          <p className="text-2xl font-semibold">Zenmo</p>
        </Link>
      </SidebarHeader>

      <div className="px-4 py-2">
        <Separator className="opacity-10 h-0.5 bg-white" />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstSection?.map(item => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link to={item.href}>
                      <item.icon className="size-5" />
                      <span className="text-sm font-medium tracking-tight">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-4 py-2">
          <Separator className="opacity-10 text-[#5D6B68]" />
        </div>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  Username
                  {/* ^ FIXME: Get the username dynamically of the logged in user */}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

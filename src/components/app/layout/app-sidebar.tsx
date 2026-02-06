"use client";

import * as React from "react";

import { NavGroup } from "@/components/app/layout/nav-group";
import { WorkspaceSwitcher } from "@/components/app/workspaces/workspace-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { MAIN_NAV } from "@/lib/constants/nav";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <WorkspaceSwitcher />
      </SidebarHeader>

      <SidebarContent>
        {MAIN_NAV.navGroups.map((group, index) => (
          <NavGroup key={index} title={group.title} items={group.items} />
        ))}
      </SidebarContent>

      <SidebarFooter></SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

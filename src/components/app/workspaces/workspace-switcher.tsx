"use client";

import { Check, ChevronsUpDown, Settings, UserPlus2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";

import { CreateWorkspace } from "@/components/app/workspaces/create-workspace";
import { PlanColor } from "@/components/app/workspaces/plan-color";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useWorkspaces } from "@/lib/swr/use-workspaces";
import { cn } from "@/lib/utils";

export function WorkspaceSwitcher() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();

  const { isMobile } = useSidebar();
  const { workspaces } = useWorkspaces();

  const activeWorkspace = useMemo(() => {
    return workspaces.find((workspace) => workspace.slug === params.slug);
  }, [workspaces, params.slug]);

  if (!activeWorkspace) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                <div className="leading-none font-semibold uppercase">
                  {activeWorkspace.name.slice(0, 1)}
                </div>
              </div>

              <div className="grid flex-1 text-left leading-tight">
                <div className="truncate text-sm font-medium">
                  {activeWorkspace.name}
                </div>

                <div className="text-muted-foreground truncate text-xs">
                  <PlanColor plan={activeWorkspace.plan} />
                </div>
              </div>

              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg sm:min-w-72"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <div className="flex flex-col gap-2.5 px-2 pt-1 pb-2 sm:p-2">
              <div className="flex items-center gap-x-2.5">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-7 items-center justify-center rounded-md">
                  <div className="text-sm leading-none font-semibold uppercase">
                    {activeWorkspace.name.slice(0, 1)}
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="truncate text-sm leading-5 font-medium">
                    {activeWorkspace.name}
                  </div>

                  <div className="text-muted-foreground truncate text-xs leading-tight capitalize">
                    {activeWorkspace.plan} · {activeWorkspace.total_members}{" "}
                    member
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-1.5">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="font-normal"
                >
                  <Link href="#">
                    <Settings />
                    Settings
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="font-normal"
                >
                  <Link href="#">
                    <UserPlus2 />
                    Invite members
                  </Link>
                </Button>
              </div>
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Workspaces
            </DropdownMenuLabel>

            <div className="flex flex-col gap-0.5">
              {workspaces.map((workspace) => (
                <DropdownMenuItem
                  key={workspace.id}
                  onClick={() => router.push(`/dashboard/${workspace.slug}`)}
                  className={cn(
                    "cursor-pointer py-2",
                    workspace.id === activeWorkspace.id && "bg-accent"
                  )}
                >
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-5 items-center justify-center rounded-sm">
                    <div className="text-xs leading-none font-semibold uppercase">
                      {workspace.name.slice(0, 1)}
                    </div>
                  </div>

                  <span className="block truncate text-sm leading-5">
                    {workspace.name}
                  </span>

                  {workspace.id === activeWorkspace.id && (
                    <Check className="text-foreground ml-auto" />
                  )}
                </DropdownMenuItem>
              ))}

              <CreateWorkspace className="justify-start font-normal" />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

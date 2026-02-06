"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import type {
  NavCollapsible,
  NavGroup as NavGroupProps,
  NavItem,
  NavLink,
} from "@/lib/types";
import { cn } from "@/lib/utils";

export function NavGroup({ title, items }: NavGroupProps) {
  const { state, isMobile } = useSidebar();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const workspaceSlug = getWorkspaceSlug(pathname);

  const href = searchParams?.toString()
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  return (
    <SidebarGroup>
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item, index) => {
          const key = `${item.title}-${index}`;

          const resolvedItem = {
            ...item,
            url: item.url
              ? withWorkspaceSlug(item.url, workspaceSlug)
              : undefined,
            items: item.items?.map((sub) => ({
              ...sub,
              url: withWorkspaceSlug(sub.url, workspaceSlug),
            })),
          };

          if (!item.items)
            return (
              <SidebarMenuLink
                key={key}
                item={resolvedItem as NavLink}
                href={href}
              />
            );

          if (state === "collapsed" && !isMobile) {
            return (
              <SidebarMenuCollapsedDropdown
                key={key}
                item={resolvedItem as NavCollapsible}
                href={href}
              />
            );
          }

          return (
            <SidebarMenuCollapsible
              key={key}
              item={resolvedItem as NavCollapsible}
              href={href}
            />
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}

function NavBadge({ children }: { children: ReactNode }) {
  return (
    <Badge
      variant="outline"
      className="text-muted-foreground ml-auto rounded-full px-1.5 py-0.5 text-xs tabular-nums"
    >
      {children}
    </Badge>
  );
}

function SidebarMenuLink({ item, href }: { item: NavLink; href: string }) {
  const { setOpenMobile } = useSidebar();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(href, item)}
        tooltip={item.title}
      >
        <Link href={item.url} onClick={() => setOpenMobile(false)}>
          {item.icon && <item.icon className={cn("text-muted-foreground")} />}
          <span>{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function SidebarMenuCollapsible({
  item,
  href,
}: {
  item: NavCollapsible;
  href: string;
}) {
  const { setOpenMobile } = useSidebar();
  return (
    <Collapsible
      asChild
      defaultOpen={checkIsActive(href, item, true)}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon className="text-muted-foreground" />}
            <span>{item.title}</span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent className="CollapsibleContent">
          <SidebarMenuSub>
            {item.items.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  asChild
                  isActive={checkIsActive(href, subItem)}
                >
                  <Link href={subItem.url} onClick={() => setOpenMobile(false)}>
                    {subItem.icon && (
                      <subItem.icon className="text-muted-foreground" />
                    )}
                    <span>{subItem.title}</span>
                    {subItem.badge && <NavBadge>{subItem.badge}</NavBadge>}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function SidebarMenuCollapsedDropdown({
  item,
  href,
}: {
  item: NavCollapsible;
  href: string;
}) {
  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={checkIsActive(href, item)}
          >
            {item.icon && <item.icon className="text-muted-foreground" />}
            <span>{item.title}</span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" sideOffset={4}>
          <DropdownMenuLabel>
            {item.title} {item.badge ? `(${item.badge})` : ""}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {item.items.map((sub, index) => (
            <DropdownMenuItem key={`${sub.title}-${index}`} asChild>
              <Link
                href={sub.url}
                className={checkIsActive(href, sub) ? "bg-secondary" : ""}
              >
                {sub.icon && <sub.icon className="text-muted-foreground" />}
                <span className="max-w-52 text-wrap">{sub.title}</span>
                {sub.badge && (
                  <span className="ms-auto text-xs">{sub.badge}</span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}

function checkIsActive(
  currentHref: string,
  item: NavItem,
  checkForParent: boolean = false
): boolean {
  const currentPath = currentHref.split("?")[0];

  const normalize = (path: string) =>
    path === "/" ? path : path.replace(/\/$/, "");

  const normalizedCurrent = normalize(currentPath);
  const normalizedItemUrl = item.url ? normalize(item.url) : null;

  if (normalizedItemUrl && normalizedCurrent === normalizedItemUrl) {
    return true;
  }

  if (checkForParent && item.items && item.items.length > 0) {
    return item.items.some((child) => {
      const childUrl = child.url ? normalize(child.url) : null;
      return childUrl && normalizedCurrent.startsWith(childUrl);
    });
  }

  if (normalizedItemUrl) {
    return normalizedCurrent.startsWith(normalizedItemUrl);
  }

  return false;
}

function getWorkspaceSlug(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] !== "dashboard") return null;

  if (segments.length < 2) return null;

  return segments[1];
}

function withWorkspaceSlug(url: string, workspaceSlug: string | null) {
  if (!workspaceSlug) return url;

  const segments = url.split("/").filter(Boolean);

  if (segments[0] !== "dashboard") return url;

  segments.shift();

  return `/dashboard/${workspaceSlug}/${segments.join("/")}`;
}

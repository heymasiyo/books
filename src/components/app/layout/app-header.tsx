"use client";

import { CreditCard, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";

import { UserDropdown } from "@/components/app/layout/user-dropdown";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useWorkspaceSlug } from "@/lib/hooks/use-workspace-slug";

export function AppHeader() {
  const { withWorkspaceSlug } = useWorkspaceSlug();

  return (
    <header className="bg-sidebar border-sidebar-border sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <SidebarTrigger variant="outline" className="size-8" />

          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-6"
          />

          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-[0.8125rem] md:hidden lg:flex"
            >
              <Link href={withWorkspaceSlug("/dashboard/sales/invoices/add")}>
                <ShoppingCart />
                Sell
              </Link>
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="flex size-8 lg:hidden"
                  aria-label="Sell"
                >
                  <Link
                    href={withWorkspaceSlug("/dashboard/sales/invoices/add")}
                  >
                    <ShoppingCart />
                  </Link>
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Sell</p>
              </TooltipContent>
            </Tooltip>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-[0.8125rem] md:hidden lg:flex"
            >
              <Link
                href={withWorkspaceSlug("/dashboard/purchases/invoices/add")}
              >
                <ShoppingBag />
                Buy
              </Link>
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="flex size-8 lg:hidden"
                  aria-label="Buy"
                >
                  <Link
                    href={withWorkspaceSlug(
                      "/dashboard/purchases/invoices/add"
                    )}
                  >
                    <ShoppingBag />
                  </Link>
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Buy</p>
              </TooltipContent>
            </Tooltip>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="text-[0.8125rem] md:hidden lg:flex"
            >
              <Link href={withWorkspaceSlug("/dashboard/expenses/add")}>
                <CreditCard />
                Expenses
              </Link>
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="flex size-8 lg:hidden"
                  aria-label="Expenses"
                >
                  <Link href={withWorkspaceSlug("/dashboard/expenses/add")}>
                    <CreditCard />
                  </Link>
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Expenses</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}

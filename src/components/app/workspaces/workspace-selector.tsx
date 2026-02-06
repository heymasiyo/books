"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { CreateWorkspace } from "@/components/app/workspaces/create-workspace";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { useWorkspaces } from "@/lib/swr/use-workspaces";

export function WorkspaceSelector() {
  const { workspaces } = useWorkspaces();

  return (
    <div className="flex flex-col gap-4">
      {workspaces.map((workspace) => (
        <Item
          asChild
          key={workspace.id}
          variant="outline"
          className="bg-background! hover:ring-ring/50 rounded-lg hover:ring-3"
        >
          <Link href={`/dashboard/${workspace.slug}`}>
            <ItemContent>
              <ItemTitle>{workspace.name}</ItemTitle>

              <ItemDescription className="text-xs capitalize">
                {workspace.plan} · {workspace.total_members} member
              </ItemDescription>
            </ItemContent>

            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </Link>
        </Item>
      ))}

      <CreateWorkspace />
    </div>
  );
}

import Link from "next/link";

import { useWorkspaces } from "@/lib/swr/use-workspaces";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { ChevronRightIcon } from "lucide-react";

export function WorkspaceSelector() {
  const { workspaces } = useWorkspaces();

  return (
    <div className="flex flex-col gap-4">
      {workspaces.map((workspace) => (
        <Item
          asChild
          key={workspace.id}
          variant="outline"
          className="rounded-lg"
        >
          <Link href={`/dashboard/${workspace.slug}`}>
            <ItemContent>
              <ItemTitle>{workspace.name}</ItemTitle>

              <ItemDescription className="text-xs">
                {workspace.plan_formatted} · {workspace.total_members} Member
              </ItemDescription>
            </ItemContent>

            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </Link>
        </Item>
      ))}
    </div>
  );
}

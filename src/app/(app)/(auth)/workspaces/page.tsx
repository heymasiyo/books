import type { Metadata } from "next";

import { WorkspaceSelector } from "@/components/app/workspaces/workspace-selector";

export const metadata: Metadata = {
  title: "Choose your workspace",
};

export default function WorkspacesPage() {
  return (
    <div className="w-full max-w-sm">
      <h3 className="text-center text-xl font-semibold">
        Choose a workspace to continue
      </h3>

      <div className="mt-8">
        <WorkspaceSelector />
      </div>
    </div>
  );
}

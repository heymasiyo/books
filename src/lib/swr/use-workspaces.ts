import { Workspace } from "@/lib/types";

export function useWorkspaces() {
  const workspaces: Workspace[] = [
    {
      id: "1",
      name: "Satrio Inc",
      slug: "satrio-inc",
      plan: "advanced",
      logo: "",
      total_members: 10,
    },
    {
      id: "2",
      name: "Acme Inc",
      slug: "acme-inc",
      plan: "business",
      logo: "",
      total_members: 5,
    },
  ];

  return { workspaces };
}

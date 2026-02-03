export function useWorkspaces() {
  return {
    workspaces: [
      {
        id: "1",
        name: "Satrio Inc",
        slug: "satrio-inc",
        plan: "advanced",
        plan_formatted: "Advanced",
        logo: "",
        total_members: 10,
      },
      {
        id: "2",
        name: "Acme Inc",
        slug: "acme-inc",
        plan: "bussiness",
        plan_formatted: "Business",
        logo: "",
        total_members: 5,
      },
    ],
  };
}

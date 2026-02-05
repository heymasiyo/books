export const plans = ["free", "pro", "business", "advanced"] as const;

export type PlanProps = (typeof plans)[number];

export type Workspace = {
  id: string;
  name: string;
  slug: string;
  plan: PlanProps;
  logo: string;
  total_members: number;
};

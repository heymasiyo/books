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

type BaseNavItem = {
  title: string;
  badge?: string;
  icon?: React.ElementType;
};

export type NavLink = BaseNavItem & {
  url: string;
  items?: never;
};

export type NavCollapsible = BaseNavItem & {
  items: (BaseNavItem & { url: string })[];
  url?: never;
};

export type NavItem = NavCollapsible | NavLink;

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export type NavData = {
  navGroups: NavGroup[];
};

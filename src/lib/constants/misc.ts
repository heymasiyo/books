import { PlanProps } from "@/lib/types";

export const PLAN_COLOR_MAP: Record<PlanProps, string> = {
  free: "text-muted-foreground",
  pro: "text-blue-600 dark:text-blue-400",
  business: "text-sky-600 dark:text-sky-400",
  advanced: "text-amber-600 dark:text-amber-400",
};

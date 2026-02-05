import { PLAN_COLOR_MAP } from "@/lib/constants/misc";
import { PlanProps } from "@/lib/types";
import { capitalize, cn } from "@/lib/utils";

export function PlanColor({ plan }: { plan: PlanProps }) {
  const className = PLAN_COLOR_MAP[plan] ?? "text-muted-foreground";

  return <div className={cn(className)}>{capitalize(plan)}</div>;
}

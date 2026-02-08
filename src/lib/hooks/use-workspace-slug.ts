import { usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";

export function useWorkspaceSlug() {
  const pathname = usePathname();

  const workspaceSlug = useMemo(() => {
    if (!pathname) return null;

    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] !== "dashboard") return null;
    if (segments.length < 2) return null;

    return segments[1];
  }, [pathname]);

  const withWorkspaceSlug = useCallback(
    (url: string) => {
      if (!workspaceSlug) return url;

      const segments = url.split("/").filter(Boolean);

      if (segments[0] !== "dashboard") return url;

      segments.shift();

      return `/dashboard/${workspaceSlug}/${segments.join("/")}`;
    },
    [workspaceSlug]
  );

  return {
    workspaceSlug,
    withWorkspaceSlug,
  };
}

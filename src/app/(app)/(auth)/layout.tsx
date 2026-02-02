import Link from "next/link";

import { GridPattern } from "@/components/grid-pattern";
import { cn } from "@/lib/utils";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid h-screen grid-cols-1">
      <div className="relative">
        <div className="absolute inset-0 isolate overflow-hidden">
          <div
            className={cn(
              "absolute inset-y-0 left-1/2 w-300 -translate-x-1/2",
              "mask-[linear-gradient(black,transparent_320px),linear-gradient(90deg,transparent,black_5%,black_95%,transparent)] mask-intersect"
            )}
          >
            <GridPattern width={60} height={60} x={-1} y={-1} />
          </div>
        </div>

        <div className="relative flex min-h-screen w-full flex-col items-center gap-9">
          <Link
            href="/"
            className="font-display p-3 text-3xl font-semibold tracking-tight"
          >
            books
          </Link>

          <div className="flex w-full flex-1 flex-col items-center justify-center px-4">
            {children}
          </div>

          <p className="text-muted-foreground px-20 py-8 text-xs font-medium md:px-0">
            By continuing, you agree to Books&rsquo;s{" "}
            <Link
              href="/legal/terms"
              className="text-foreground/80 hover:text-foreground font-semibold transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/privacy"
              className="text-foreground/80 hover:text-foreground font-semibold transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

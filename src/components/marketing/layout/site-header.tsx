import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="bg-background border-border/40 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 xl:px-0">
        <div className="grow basis-0">
          <Link
            href="/"
            className="font-display w-fit py-2 pr-2 text-2xl font-semibold tracking-tight"
          >
            books
          </Link>
        </div>

        <div className="flex grow basis-0 justify-end gap-4">
          <div className="flex w-fit gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Log in</Link>
            </Button>

            <Button asChild size="sm">
              <Link href="/register">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { GridPattern } from "@/components/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeHero() {
  return (
    <div className="relative overflow-clip px-4">
      <div className="relative mx-auto max-w-270 px-4 py-20 sm:px-12">
        <div className="pointer-events-none absolute inset-0 border-x mask-[linear-gradient(transparent,black)]" />

        <div
          className={cn(
            "pointer-events-none absolute inset-x-px inset-y-0 overflow-hidden",
            "mask-[linear-gradient(transparent,black),radial-gradient(130%_50%_at_50%_100%,transparent,black)] mask-intersect"
          )}
        >
          <GridPattern
            width={60}
            height={60}
            x={-1}
            y={-1}
            className="inset-[unset] bottom-0 left-1/2 h-150 w-270 -translate-x-1/2"
          />
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 text-center">
          <Link
            href="#"
            className="group divide-border bg-background hover:bg-secondary flex rounded-full border text-xs font-medium drop-shadow-sm transition-colors duration-75 sm:divide-x"
            aria-label="Introducing Books"
          >
            <span className="py-1.5 pl-4 sm:pr-2.5">Introducing Books</span>

            <span className="text-muted-foreground flex items-center gap-1.5 p-1.5 pl-2.5">
              <span className="hidden sm:block">Read more</span>

              <div className="rounded-full p-0.5">
                <ArrowUpRight
                  strokeWidth={4}
                  className="size-2.5 transition-transform duration-100 group-hover:translate-x-px group-hover:-translate-y-px"
                />
              </div>
            </span>
          </Link>

          <h1 className="font-display mt-5 text-center text-4xl font-medium text-pretty sm:text-5xl sm:leading-[1.15]">
            Manage your business finances, effortlessly
          </h1>

          <p className="text-muted-foreground mt-5 text-pretty sm:text-xl">
            A modern accounting platform that simplifies invoicing, expense
            tracking, and financial reporting in one place.
          </p>

          <div className="mt-10 flex w-fit gap-4">
            <Button asChild className="h-auto">
              <Link href="/register">Start free trial</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="text-muted-foreground h-auto"
            >
              <Link href="#">Get a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

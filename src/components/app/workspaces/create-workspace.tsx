"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod/v4";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { workspaceSchema } from "@/lib/zod/schemas/workspaces";

export function CreateWorkspace({
  buttonTitle = "Create workspace",
  className,
}: {
  buttonTitle?: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof workspaceSchema>>({
    resolver: zodResolver(workspaceSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  function submit(data: z.infer<typeof workspaceSchema>) {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Workspace created successful");

      form.reset();

      setIsOpen(false);
    }, 500);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className={cn(className)}>
          <PlusIcon className="text-muted-foreground" />
          {buttonTitle}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-md! gap-0 rounded-2xl p-0"
        showCloseButton={false}
      >
        <DialogHeader className="hidden">
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>

        <div className="flex flex-col items-center justify-center space-y-3 rounded-tl-2xl rounded-tr-2xl border-b px-4 py-4 pt-8 sm:px-16">
          <div className="bg-background border-foreground pointer-events-none size-10 rounded-full border-10" />

          <h3 className="text-lg font-medium">Create a workspace</h3>

          <p className="text-muted-foreground -translate-y-2 text-center text-xs text-balance">
            Set up a shared workspace to manage your finances with your team.{" "}
            <Link
              href="#"
              target="_blank"
              className="hover:text-foreground cursor-help font-medium underline decoration-dotted underline-offset-2 transition-colors"
            >
              Learn more.
            </Link>
          </p>
        </div>

        <div className="bg-muted/50 rounded-br-2xl rounded-bl-2xl px-4 py-8 sm:px-16">
          <form
            id="form"
            onSubmit={form.handleSubmit(submit)}
            className="flex flex-col gap-7"
          >
            <FieldGroup className="gap-4.5">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name">Workspace name</FieldLabel>

                    <InputGroup className="bg-background">
                      <InputGroupInput
                        {...field}
                        id="name"
                        type="name"
                        aria-invalid={fieldState.invalid}
                        placeholder="Acme, Inc."
                        autoComplete="on"
                        disabled={isLoading}
                        className="rounded-md text-sm"
                        required
                      />
                    </InputGroup>

                    <FieldDescription className="text-xs">
                      This is the name of your company or product.
                    </FieldDescription>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="slug"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="slug">Workspace slug</FieldLabel>

                    <InputGroup className="bg-background">
                      <InputGroupInput
                        {...field}
                        id="slug"
                        type="slug"
                        aria-invalid={fieldState.invalid}
                        placeholder="acme-inc"
                        autoComplete="on"
                        disabled={isLoading}
                        className="rounded-md text-sm"
                        required
                      />
                    </InputGroup>

                    <FieldDescription className="text-xs">
                      This is used for your workspace.
                    </FieldDescription>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <Button type="submit" form="form" disabled={isLoading}>
              {isLoading && <Spinner />}
              Create workspace
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

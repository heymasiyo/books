"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod/v4";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { forgotPasswordSchema } from "@/lib/zod/schemas/auth";

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function submit(data: z.infer<typeof forgotPasswordSchema>) {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Send reset link successful");

      form.reset();
    }, 500);
  }

  return (
    <div className="flex flex-col gap-3">
      <form
        id="form"
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col gap-7"
      >
        <FieldGroup className="gap-4.5">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id="email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="email@address.com"
                    autoComplete="on"
                    disabled={isLoading}
                    className="rounded-md text-sm"
                    required
                  />
                </InputGroup>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="flex w-full flex-col gap-3">
          <Button type="submit" form="form" disabled={isLoading}>
            {isLoading && <Spinner />}
            Send reset link
          </Button>

          <Button
            type="button"
            variant="outline"
            asChild
            className="bg-background! hover:ring-ring/50 hover:ring-3"
          >
            <Link href="/login">Back to Log in</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}

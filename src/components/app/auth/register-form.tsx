"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod/v4";

import { AuthSeparator } from "@/components/app/auth/auth-separator";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { registerSchema } from "@/lib/zod/schemas/auth";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function submit(data: z.infer<typeof registerSchema>) {
    setIsLoading(true);
    console.log(data);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Register successful");

      form.reset();
    }, 500);
  }

  return (
    <div className="flex flex-col gap-3">
      <Button
        type="button"
        variant="outline"
        disabled={isLoading}
        className="bg-background! hover:ring-ring/50 hover:ring-3"
      >
        <Icons.google />
        Continue with Google
      </Button>

      <AuthSeparator />

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
                <FieldLabel htmlFor="name">Name</FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id="name"
                    type="text"
                    aria-invalid={fieldState.invalid}
                    placeholder="Steve Jobs"
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

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">Password</FieldLabel>

                <InputGroup>
                  <InputGroupInput
                    {...field}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    aria-invalid={fieldState.invalid}
                    placeholder="8+ characters required"
                    autoComplete="off"
                    disabled={isLoading}
                    className="rounded-md text-sm"
                    required
                  />

                  <InputGroupAddon align="inline-end">
                    <InputGroupButton
                      aria-label="Toogle password visibility"
                      size="icon-xs"
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={isLoading}
                    >
                      {showPassword ? <Eye /> : <EyeOff />}
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button type="submit" form="form" disabled={isLoading}>
          {isLoading && <Spinner />}
          Sign in
        </Button>
      </form>
    </div>
  );
}

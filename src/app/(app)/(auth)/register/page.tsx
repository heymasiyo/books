import type { Metadata } from "next";

import Link from "next/link";

import { RegisterForm } from "@/components/app/auth/register-form";

export const metadata: Metadata = {
  title: "Create your Books account",
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-sm">
      <h3 className="text-center text-xl font-semibold">
        Create your Books account
      </h3>

      <div className="mt-8">
        <RegisterForm />
      </div>

      <p className="text-muted-foreground mt-6 text-center text-sm font-medium">
        Already have an account?&nbsp;
        <Link
          href="/login"
          className="text-foreground/80 hover:text-foreground font-semibold transition-colors"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}

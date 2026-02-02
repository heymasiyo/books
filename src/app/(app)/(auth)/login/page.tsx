import type { Metadata } from "next";

import Link from "next/link";

import { LoginForm } from "@/components/app/auth/login-form";

export const metadata: Metadata = {
  title: "Sign in to Books",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm">
      <h3 className="text-center text-xl font-semibold">
        Log in to your Books account
      </h3>

      <div className="mt-8">
        <LoginForm />
      </div>

      <p className="text-muted-foreground mt-6 text-center text-sm font-medium">
        Don't have an account?&nbsp;
        <Link
          href="/register"
          className="text-foreground/80 hover:text-foreground font-semibold transition-colors"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}

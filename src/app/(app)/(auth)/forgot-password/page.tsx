import type { Metadata } from "next";

import { ForgotPasswordForm } from "@/components/app/auth/forgot-password-form";

export const metadata: Metadata = {
  title: "Forgot Password for Books",
};

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-sm">
      <h3 className="text-center text-xl font-semibold">Reset your password</h3>

      <div className="mt-8">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

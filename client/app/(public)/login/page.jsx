import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <Suspense fallback={<div className="text-sm text-gray-600">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}

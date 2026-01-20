"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const sp = useSearchParams();
  const next = sp.get("next") || "/items";

  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      toast.error(data.message || "Invalid email or password");
      return;
    }

    toast.success("Logged in!");
    router.push(next);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border rounded-xl p-6">
      <div>
        <label className="text-sm">Email</label>
        <input
          className="mt-1 w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@example.com"
        />
      </div>

      <div>
        <label className="text-sm">Password</label>
        <input
          className="mt-1 w-full border rounded px-3 py-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="123456"
        />
      </div>

      <button
        disabled={loading}
        className="w-full rounded bg-black text-white py-2 disabled:opacity-60"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="text-xs text-gray-600">
        Demo: <b>admin@example.com</b> / <b>123456</b>
      </p>
    </form>
  );
}

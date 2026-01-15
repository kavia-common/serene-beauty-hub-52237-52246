"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

// PUBLIC_INTERFACE
export default function NewsletterForm() {
  /** Client-only newsletter form that shows a success toast (no backend). */
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    setPending(true);
    // Simulate a calm async interaction.
    await new Promise((r) => setTimeout(r, 600));
    setPending(false);
    setEmail("");
    toast.success("You’re subscribed. Welcome to the calm glow.");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
      aria-label="Newsletter signup form"
    >
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full flex-1 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-better-purple"
      />
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-better-purple/80 to-better-blue/70 px-5 py-3 text-sm font-semibold text-white shadow-glow-blue transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-better-blue"
      >
        {pending ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}

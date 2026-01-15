import Link from "next/link";
import React from "react";

// PUBLIC_INTERFACE
export default function ErrorPage() {
  /** Minimal legacy error page used by Next export pipeline in some cases. */
  return (
    <main className="min-h-screen px-4 py-14">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center text-white/90 backdrop-blur-md md:p-12">
        <p className="text-xs text-white/55">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white/95 md:text-4xl">
          Error
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/65">
          This is a static site. If you hit an error path, it may be due to a
          missing page or an invalid route.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-2xl bg-gradient-to-r from-better-purple/80 to-better-blue/70 px-5 py-3 text-sm font-semibold text-white shadow-glow-blue transition hover:opacity-95"
          >
            Go home
          </Link>
          <Link
            href="/articles"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
          >
            Browse articles
          </Link>
        </div>
      </div>
    </main>
  );
}

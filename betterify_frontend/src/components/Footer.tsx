import Link from "next/link";
import React from "react";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Site footer. */
  return (
    <footer className="relative z-10 px-4 pb-10 pt-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white/90">Betterify</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
                A serene, static space for beauty rituals and product notes —
                designed to feel calm, soft, and quietly luminous.
              </p>
            </div>

            <nav aria-label="Footer" className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/articles"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Articles
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                About
              </Link>
            </nav>
          </div>

          <hr className="hr-soft my-6" />

          <div className="flex flex-col gap-2 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Betterify. Static site, no backend.</p>
            <p>Built with Next.js + Tailwind in a dark purple glow.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

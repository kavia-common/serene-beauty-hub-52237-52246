"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

// PUBLIC_INTERFACE
export default function NavBar() {
  /** Floating navigation with serene/glass styling and a small mobile menu. */
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/articles", label: "Articles" },
      { href: "/about", label: "About" },
    ],
    []
  );

  // Close menu on route change (static client navigation).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-better-purple/25 bg-better-purple/10 shadow-glow">
            <span className="h-2.5 w-2.5 rounded-full bg-better-purple shadow-[0_0_14px_rgba(124,58,237,0.9)]" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-white/90">
            Betterify
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cx(
                  "rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "border border-better-purple/35 bg-better-purple/15 text-white shadow-glow"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/articles"
            className="ml-2 rounded-full bg-gradient-to-r from-better-purple/70 to-better-blue/60 px-4 py-2 text-sm font-semibold text-white shadow-glow-blue transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-better-blue"
          >
            Explore
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 transition hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          Menu
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={cx(
          "mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cx(
                  "rounded-xl px-4 py-3 text-sm transition",
                  active
                    ? "bg-better-purple/15 text-white"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

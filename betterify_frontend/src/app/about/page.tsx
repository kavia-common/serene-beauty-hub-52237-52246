import React from "react";

export const dynamic = "force-static";

// PUBLIC_INTERFACE
export default function AboutPage() {
  return (
    <div className="px-4 pb-12 pt-8">
      <div className="mx-auto w-full max-w-3xl">
        <header className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md md:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white/95 md:text-4xl">
            About Betterify
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            Betterify is a quiet, static space for beauty rituals and product
            notes — designed to feel serene, not loud.
          </p>
        </header>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md md:p-10">
          <h2 className="text-xl font-semibold text-white/90">
            What you’ll find here
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/70">
            <li>Gentle routines for mornings, nights, and reset days.</li>
            <li>Product notes that prioritize clarity over hype.</li>
            <li>Tag-based browsing for moods (calm, glow, minimal, etc.).</li>
            <li>
              A design that stays out of your way: dark base, purple accents,
              soft blues.
            </li>
          </ul>

          <hr className="hr-soft my-8" />

          <h2 className="text-xl font-semibold text-white/90">How it works</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Posts are stored as local markdown files under <code>/content</code>{" "}
            and rendered statically at build time. There is no backend and no
            database — just serene content.
          </p>
        </section>
      </div>
    </div>
  );
}

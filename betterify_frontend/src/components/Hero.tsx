"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// PUBLIC_INTERFACE
export default function Hero() {
  /** Hero section with serene messaging and subtle motion. */
  return (
    <section className="relative px-4 pt-10 md:pt-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-12">
          {/* Animated gradient veil */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-90 animate-shimmer"
            style={{
              background:
                "radial-gradient(900px 380px at 20% 10%, rgba(124,58,237,0.32), transparent 60%)," +
                "radial-gradient(900px 380px at 80% 70%, rgba(59,130,246,0.22), transparent 60%)," +
                "linear-gradient(120deg, rgba(124,58,237,0.08), rgba(59,130,246,0.06), rgba(124,58,237,0.08))",
              backgroundSize: "200% 200%",
            }}
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75">
              <span className="h-1.5 w-1.5 rounded-full bg-better-purple shadow-[0_0_16px_rgba(124,58,237,0.8)]" />
              Dark, serene, and softly luminous
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl"
            >
              Betterify
              <span className="text-white/70"> — beauty notes in a calm glow</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              Explore rituals, product reviews, and gentle routines — curated for
              clarity, softness, and a serene mind.
            </motion.p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-better-purple/80 to-better-blue/70 px-5 py-3 text-sm font-semibold text-white shadow-glow-blue transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-better-blue"
              >
                Browse articles
              </Link>
              <Link
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-better-purple"
              >
                Get serene updates
              </Link>
            </div>

            <div className="mt-10">
              <hr className="hr-soft" />
              <p className="mt-4 text-xs text-white/55">
                No accounts. No clutter. Just static, thoughtful content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

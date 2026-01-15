import React from "react";

// PUBLIC_INTERFACE
export default function AnimatedBackground() {
  /**
   * Decorative animated background. Kept lightweight (pure CSS) for static export.
   * It is intentionally non-interactive and sits behind all content.
   */
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Particle texture (radial gradient) */}
      <div className="absolute inset-0 opacity-[0.28] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* Aurora / flare blobs */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.55),rgba(124,58,237,0)_55%)] blur-3xl animate-drift" />
      <div className="absolute -bottom-40 left-[-120px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.42),rgba(59,130,246,0)_60%)] blur-3xl animate-floatSlow" />
      <div className="absolute top-[18%] right-[-160px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(124,58,237,0.38),rgba(124,58,237,0)_60%)] blur-3xl animate-floatSlow" />

      {/* Subtle gradient veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-better-base0/30 via-better-base0/10 to-better-base1/50" />
    </div>
  );
}

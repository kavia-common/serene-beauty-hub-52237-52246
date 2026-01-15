import Link from "next/link";
import React from "react";

type TagProps = {
  label: string;
  href?: string;
};

// PUBLIC_INTERFACE
export default function Tag({ label, href }: TagProps) {
  /** A small tag pill used across cards and filters. */
  const classes =
    "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 " +
    "transition hover:border-better-purple/40 hover:bg-better-purple/10 hover:text-white " +
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-better-purple";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return <span className={classes}>{label}</span>;
}

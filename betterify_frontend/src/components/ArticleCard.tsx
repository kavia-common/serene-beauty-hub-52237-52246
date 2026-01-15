"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  href: string;
  cover: string;
  featured?: boolean;
};

// PUBLIC_INTERFACE
export default function ArticleCard({
  title,
  excerpt,
  date,
  tags,
  href,
  cover,
  featured,
}: ArticleCardProps) {
  /** Interactive article card with subtle motion and glow. */
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative h-full"
    >
      <Link
        href={href}
        className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-better-purple/35 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-better-purple"
      >
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-better-purple/20 via-transparent to-better-blue/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Image
            src={cover}
            alt=""
            width={1200}
            height={675}
            className="h-44 w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
            priority={!!featured}
          />
          {featured ? (
            <div className="absolute left-3 top-3 rounded-full border border-better-purple/35 bg-better-purple/15 px-3 py-1 text-xs text-white/90 shadow-glow">
              Featured
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xs text-white/55">
            <time dateTime={date}>{date}</time>
          </p>
          <span className="text-xs text-white/45 transition group-hover:text-white/70">
            Read →
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold tracking-tight text-white/92">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{excerpt}</p>

        {tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 3).map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        ) : null}
      </Link>
    </motion.article>
  );
}

"use client";

import Link from "next/link";
import React, { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import Tag from "@/components/Tag";
import type { Post } from "@/lib/posts";

type ArticlesClientProps = {
  posts: Post[];
  tags: string[];
};

// PUBLIC_INTERFACE
export default function ArticlesClient({ posts, tags }: ArticlesClientProps) {
  /** Client-only filtering by `?tag=` for static hosting. */
  const sp = useSearchParams();
  const activeTag = sp?.get("tag") ?? "";

  const filtered = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((p) => p.frontmatter.tags.includes(activeTag));
  }, [posts, activeTag]);

  return (
    <div className="mt-6">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white/90">Filter by tag</h2>
            <p className="mt-1 text-sm text-white/60">
              {activeTag
                ? `Showing posts tagged “${activeTag}”.`
                : "Select a tag to gently narrow the view."}
            </p>
          </div>

          {activeTag ? (
            <Link
              href="/articles"
              className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Clear filter
            </Link>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t} label={t} href={`/articles?tag=${t}`} />
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ArticleCard
            key={p.slug}
            title={p.frontmatter.title}
            excerpt={p.frontmatter.excerpt}
            date={p.frontmatter.date}
            tags={p.frontmatter.tags}
            cover={p.frontmatter.cover}
            href={`/articles/${p.slug}`}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70 backdrop-blur-md">
          No posts found for this tag yet.
        </div>
      ) : null}
    </div>
  );
}

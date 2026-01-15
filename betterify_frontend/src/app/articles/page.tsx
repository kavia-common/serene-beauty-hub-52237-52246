import React, { Suspense } from "react";
import { getAllPosts, getAllTags } from "@/lib/posts";
import ArticlesClient from "./ArticlesClient";

export const dynamic = "force-static";

// PUBLIC_INTERFACE
export default function ArticlesPage() {
  const posts = getAllPosts();
  const tags = getAllTags(posts);

  return (
    <div className="px-4 pb-10 pt-8">
      <div className="mx-auto w-full max-w-6xl">
        <header className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md md:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-white/95 md:text-4xl">
            Articles
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
            Static markdown posts — calm product notes, gentle routines, and
            softly luminous rituals.
          </p>
        </header>

        {/* Suspense keeps app router happy with useSearchParams */}
        <Suspense
          fallback={
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70 backdrop-blur-md">
              Loading…
            </div>
          }
        >
          <ArticlesClient posts={posts} tags={tags} />
        </Suspense>
      </div>
    </div>
  );
}

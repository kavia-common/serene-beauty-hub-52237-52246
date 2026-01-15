import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import Markdown from "markdown-to-jsx";
import Tag from "@/components/Tag";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const dynamicParams = false;

// PUBLIC_INTERFACE
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// PUBLIC_INTERFACE
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const siteUrl =
    process.env.NEXT_PUBLIC_FRONTEND_URL?.trim() || "http://localhost:3000";

  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    const title = post.frontmatter.title;
    const description = post.frontmatter.excerpt || "A Betterify article.";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `${siteUrl}/articles/${post.slug}/`,
        type: "article",
        images: [
          {
            url: post.frontmatter.cover,
            width: 1200,
            height: 675,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [post.frontmatter.cover],
      },
    };
  } catch {
    return {
      title: "Article not found",
    };
  }
}

// PUBLIC_INTERFACE
export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="px-4 pb-12 pt-8">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/articles"
          className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          ← Back to Articles
        </Link>

        <header className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md md:p-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <Image
              src={post.frontmatter.cover}
              alt=""
              width={1200}
              height={675}
              className="h-56 w-full object-cover opacity-95 md:h-72"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>

          <div className="mt-5">
            <p className="text-xs text-white/55">
              <time dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white/95 md:text-4xl">
              {post.frontmatter.title}
            </h1>
            {post.frontmatter.excerpt ? (
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {post.frontmatter.excerpt}
              </p>
            ) : null}

            {post.frontmatter.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((t) => (
                  <Tag key={t} label={t} href={`/articles?tag=${t}`} />
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <article className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md md:p-10">
          <div className="markdown">
            <Markdown
              options={{
                forceBlock: true,
                overrides: {
                  a: {
                    props: {
                      rel: "noreferrer noopener",
                      target: "_blank",
                    },
                  },
                },
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </article>
      </div>
    </div>
  );
}

import Link from "next/link";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import Tag from "@/components/Tag";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const dynamic = "force-static";

// PUBLIC_INTERFACE
export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags(posts);
  const featured = posts.slice(0, 3);
  const latest = posts.slice(0, 6);

  return (
    <div className="pb-6">
      <Hero />

      <section className="px-4 pt-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white/95">
                Featured glow
              </h2>
              <p className="mt-2 text-sm text-white/65">
                A few calm favorites — softly curated.
              </p>
            </div>
            <Link
              href="/articles"
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white sm:inline-flex"
            >
              View all →
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {featured.map((p) => (
              <ArticleCard
                key={p.slug}
                featured
                title={p.frontmatter.title}
                excerpt={p.frontmatter.excerpt}
                date={p.frontmatter.date}
                tags={p.frontmatter.tags}
                cover={p.frontmatter.cover}
                href={`/articles/${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-12">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white/95">
            Latest posts
          </h2>
          <p className="mt-2 text-sm text-white/65">
            New notes, gentle rituals, and product reflections.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((p) => (
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
        </div>
      </section>

      <section className="px-4 pt-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md md:p-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold tracking-tight text-white/95">
                  Categories & tags
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Browse by mood — skincare, calm routines, product notes, and
                  more. Tags are lightweight and intentionally minimal.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.slice(0, 14).map((t) => (
                    <Tag key={t} label={t} href={`/articles?tag=${t}`} />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                <p className="text-sm font-semibold text-white/90">
                  A serene approach
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Slower beauty, softer choices — designed for clarity and calm.
                </p>
                <hr className="hr-soft my-4" />
                <p className="text-xs text-white/55">
                  Tip: use the “tag” filter on the Articles page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="px-4 pt-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-better-purple/15 via-white/[0.03] to-better-blue/10 p-6 shadow-[0_40px_110px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70 [background:radial-gradient(900px_380px_at_20%_30%,rgba(124,58,237,0.25),transparent_60%),radial-gradient(900px_380px_at_80%_70%,rgba(59,130,246,0.20),transparent_60%)]"
            />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight text-white/95">
                Newsletter — calm updates
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                A gentle monthly note with a few new posts and a tiny ritual to
                try. No spam, no noise.
              </p>
              <div className="mt-6 max-w-xl">
                <NewsletterForm />
              </div>
              <p className="mt-3 text-xs text-white/55">
                Client-only demo form: no backend; just a success toast.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

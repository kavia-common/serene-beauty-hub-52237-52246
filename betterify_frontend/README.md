# Betterify Frontend (Static Next.js)

A visually rich, serene **static** blog-like website with a dark + purple theme, gentle motion, and local markdown content.

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Content: local `/content` markdown files (no backend)
- Output: static export (`output: "export"`)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build (static)

```bash
npm run build
```

This project is configured for static export and static hosting.

## Content model

Markdown posts live in:

```
/content
  your-post-slug.md
```

### Frontmatter fields (required)

```yaml
---
title: "Post Title"
date: "2025-01-12"
tags:
  - Skincare
  - Rituals
excerpt: "Short summary for cards and SEO."
cover: "/images/covers/your-cover.svg"
---
```

### Adding a new post

1. Create a new file: `content/my-new-post.md`
2. Add frontmatter + markdown body.
3. Add an optional cover image under `public/images/covers/` (SVG is recommended for static + lightweight).
4. The post will appear on:
   - Home (`/`)
   - Articles listing (`/articles`)
   - Article detail (`/articles/my-new-post`)

## Tag filtering

The Articles page supports a simple static-friendly tag filter via querystring:

- `/articles?tag=Skincare`

This is client-side filtering on top of static content.

## Notes

- Newsletter form is client-only and shows a success toast (no backend).
- No additional environment variables are required. The app uses `NEXT_PUBLIC_FRONTEND_URL` if present for metadata base URL and falls back to `http://localhost:3000`.

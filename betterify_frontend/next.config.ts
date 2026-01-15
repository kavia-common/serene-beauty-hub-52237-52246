import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Static export and <Image /> work together when images are unoptimized.
  images: { unoptimized: true },

  // Improves static hosting behavior (e.g., /articles/slug/ rather than /articles/slug).
  trailingSlash: true,

  webpack: (config, { isServer }) => {
    // Next.js static export still builds a server bundle for prerendering.
    // The server webpack runtime uses `require("./" + __webpack_require__.u(id))`.
    // Ensure `__webpack_require__.u()` returns `chunks/<id>.js` to match Next's
    // default `.next/server/chunks/` output location.
    if (isServer && config.output) {
      config.output.chunkFilename = "chunks/[id].js";
    }

    return config;
  },
};

export default nextConfig;

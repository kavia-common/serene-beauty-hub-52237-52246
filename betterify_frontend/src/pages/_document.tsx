import Document, { Head, Html, Main, NextScript } from "next/document";

/**
 * Next.js static export may still attempt to prerender legacy pages (e.g. /404)
 * using the Pages Router pipeline, which requires `pages/_document`.
 *
 * This file is intentionally minimal and theme-consistent with the App Router UI.
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#0b0b12" />
          <meta name="color-scheme" content="dark" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

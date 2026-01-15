import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ToasterClient from "@/components/ToasterClient";

const siteUrl =
  process.env.NEXT_PUBLIC_FRONTEND_URL?.trim() || "http://localhost:3000";

// PUBLIC_INTERFACE
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Betterify — serene beauty notes",
    template: "%s — Betterify",
  },
  description:
    "A serene, dark & purple themed space for beauty rituals, products, and calm routines. Static, fast, and thoughtfully designed.",
  keywords: [
    "beauty",
    "skincare",
    "wellness",
    "rituals",
    "products",
    "blog",
    "Betterify",
  ],
  openGraph: {
    title: "Betterify — serene beauty notes",
    description:
      "A serene, dark & purple themed space for beauty rituals, products, and calm routines.",
    url: siteUrl,
    siteName: "Betterify",
    type: "website",
    images: [
      {
        url: "/images/og/betterify-og.svg",
        width: 1200,
        height: 630,
        alt: "Betterify — serene beauty notes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Betterify — serene beauty notes",
    description:
      "A serene, dark & purple themed space for beauty rituals, products, and calm routines.",
    images: ["/images/og/betterify-og.svg"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] rounded-lg bg-better-base1 px-3 py-2 text-sm text-better-text shadow-glow"
        >
          Skip to content
        </a>

        <div className="relative min-h-screen overflow-x-clip">
          <AnimatedBackground />

          <header className="relative z-20">
            <NavBar />
          </header>

          <main id="main" className="relative z-10">
            {children}
          </main>

          <Footer />

          <ToasterClient />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "海峰",
    template: "%s",
  },
  description: "独立开发者，产品设计师。",
  metadataBase: new URL("https://example.com"),
};

const navLinks = [
  { href: "/", label: "关于" },
  { href: "/blog", label: "写作" },
  { href: "/reading", label: "书单" },
  { href: "/food", label: "美食" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap"
        />
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
      </head>
      <body>
        <div className="flex min-h-screen flex-col md:flex-row">
          <main className="flex-1 px-6 py-10 md:px-12 md:py-16 order-2 md:order-1">
<div style={{ maxWidth: "var(--measure)", marginLeft: "4rem" }}>
  {children}
            </div>
          </main>
          <aside
            className="shrink-0 px-6 py-6 order-1 md:order-2 md:w-56 md:py-16 md:pr-10 md:border-l"
            style={{ borderColor: "var(--color-line)" }}
          >
            <div className="md:sticky md:top-16">
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 md:block">
                <div className="flex items-baseline gap-x-2 md:block">
                  <h1 className="text-xl" style={{ fontWeight: 500 }}>
                    海峰
                  </h1>
                  <p className="text-sm md:mt-1 md:mb-8" style={{ color: "var(--color-ink-muted)" }}>
                    builder
                  </p>
                </div>
                <nav>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-x-0 md:gap-y-3 text-sm">
                    {navLinks.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className="no-underline hover:underline">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}

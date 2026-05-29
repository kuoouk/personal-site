import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Michael",
    template: "%s · Michael",
  },
  description: "独立开发者，产品设计师。在北京，做百兽志和 Primi。",
  metadataBase: new URL("https://example.com"),
};

const navLinks = [
  { href: "/about", label: "关于" },
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap"        />
        <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
      </head>
      <body>
        <div className="flex min-h-screen flex-col md:flex-row">
          {/* 左侧正文 */}
          <main className="flex-1 px-6 py-10 md:px-12 md:py-16 md:order-1">
          <div className="mx-auto" style={{ maxWidth: "var(--measure)" }}>
              {children}
            </div>
          </main>

          {/* 右侧栏 */}
          <aside
            className="shrink-0 px-6 py-10 md:order-2 md:w-56 md:py-16 md:pr-10"
            style={{ borderLeft: "1px solid var(--color-line)" }}
          >
            <div className="md:sticky md:top-16">
                <h1 className="text-xl mb-1" style={{ fontWeight: 500 }}>
                  海峰
                </h1>
              <p className="text-sm mb-8" style={{ color: "var(--color-ink-muted)" }}>
                builder
              </p>
              <nav>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 md:flex-col md:gap-y-3 text-sm">
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
          </aside>
        </div>
      </body>
    </html>
  );
}
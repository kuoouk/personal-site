import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/content";
import { format } from "date-fns";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 5);

  return (
    <>
      <Nav />


      <section className="mb-12">
        <h2 className="text-sm mb-4" style={{ color: "var(--color-ink-muted)" }}>
          近期博客
        </h2>
        <ul className="space-y-2">
          {recentPosts.map((p) => (
            <li key={p.slug} className="flex justify-between gap-4">
              <Link href={`/blog/${p.slug}`} className="flex-1">
                {p.title}
              </Link>
              <span
                className="font-en text-sm shrink-0"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {format(new Date(p.date), "yyyy.MM.dd")}
              </span>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="text-sm mt-4 inline-block" style={{ color: "var(--color-ink-muted)" }}>
          查看全部 →
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-sm mb-4" style={{ color: "var(--color-ink-muted)" }}>
          主题页面
        </h2>
        <ul className="space-y-1.5">
          <li><Link href="/works">作品</Link> — 百兽志、Primi、早期项目</li>
          <li><Link href="/reading">在读</Link> — 最近在看的书</li>
          <li><Link href="/notes">札记</Link> — 短想法、引用、链接</li>
          <li><Link href="/about">关于</Link> — 更长的自我介绍</li>
        </ul>
      </section>

      <Footer />
    </>
  );
}

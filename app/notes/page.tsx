import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getAllNotes } from "@/lib/content";
import { format } from "date-fns";

export const metadata = { title: "札记" };

export default function Notes() {
  const notes = getAllNotes();

  return (
    <>
      <Nav />
      <h1 className="text-2xl mb-3" style={{ fontWeight: 500 }}>札记</h1>
      <p className="mb-10" style={{ color: "var(--color-ink-muted)" }}>
        够不上一篇文章的引用、想法、链接。
      </p>

      <div className="space-y-10">
        {notes.map((n) => (
          <article key={n.slug} style={{ borderTop: "1px solid var(--color-line)" }} className="pt-6">
            <p className="font-en text-sm mb-2" style={{ color: "var(--color-ink-muted)" }}>
              {format(new Date(n.date), "yyyy.MM.dd")}
            </p>
            <div className="prose-article">
              {/* 札记保留 markdown 原文渲染，简单起见这里直接展示 */}
              <p style={{ whiteSpace: "pre-wrap" }}>{n.content.trim()}</p>
            </div>
          </article>
        ))}
        {notes.length === 0 && (
          <p style={{ color: "var(--color-ink-muted)" }}>还没有札记。</p>
        )}
      </div>

      <Footer />
    </>
  );
}

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "作品" };

const works = [
  {
    name: "百兽志",
    en: "Baishouzhi",
    period: "2025 – present",
    summary:
      "面向日本市场的极简日记 app。12 只手绘动物作为长期陪伴，无推送、无打卡、无 ranking。",
    link: "#",
  },
  {
    name: "Primi",
    en: "Primi",
    period: "2025 – present",
    summary:
      "AI 抠图与拼贴创作工具。围绕 Snap（抠图）和 Showcase（共创展示）两个核心功能。",
    link: "#",
  },
];

export default function Works() {
  return (
    <>
      <Nav />
      <h1 className="text-2xl mb-3" style={{ fontWeight: 500 }}>作品</h1>
      <p className="mb-10" style={{ color: "var(--color-ink-muted)" }}>
        正在做的，和过去做过的。
      </p>

      <div className="space-y-10">
        {works.map((w) => (
          <article key={w.name} style={{ borderTop: "1px solid var(--color-line)" }} className="pt-6">
            <div className="flex justify-between items-baseline gap-4 mb-2">
              <h2 className="text-lg" style={{ fontWeight: 500 }}>
                {w.name} <span className="font-en italic text-base" style={{ color: "var(--color-ink-muted)" }}>{w.en}</span>
              </h2>
              <span className="font-en text-sm shrink-0" style={{ color: "var(--color-ink-muted)" }}>
                {w.period}
              </span>
            </div>
            <p>{w.summary}</p>
            <a href={w.link} className="text-sm">了解更多 →</a>
          </article>
        ))}
      </div>

      <Footer />
    </>
  );
}

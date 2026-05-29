import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "美食" };

// 每条:餐厅名 + 地点 + 短评（可选）
const restaurants = [
  {
    name: "龚二姐湖南菜馆",
    location: "北京",
  },
  {
    name: "Ktoy",
    location: "北京",
  },
  {
    name: "懒人盐府",
    location: "北京",
    note: "自贡菜。",
  },
  
];

export default function Food() {
  return (
    <>
      <Nav />
      <p className="mb-12" style={{ color: "var(--color-ink-muted)" }}>
        填饱胃袋好比滋养心灵。
      </p>

      <ul className="space-y-5 list-disc pl-5">
  {restaurants.map((r, i) => (
    <li key={i} className="pl-2" style={{ color: "var(--color-ink-muted)" }}>
    <span style={{ color: "var(--color-ink)" }}>{r.name}</span>
    <span className="text-sm ml-2" style={{ color: "var(--color-ink-muted)" }}>
      {r.location}
    </span>
    {r.note && (
      <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
        {r.note}
      </p>
    )}
  </li>
        ))}
      </ul>

      <Footer />
    </>
  );
}

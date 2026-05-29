import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata = { title: "书单" };

// 每条：note 是主体（可长可短），author + title 在下方
const books = [
  {
    note: "“他认为西班牙要内向地寻找强盛之路。他的名言是：‘不要走出你自己，你的灵魂在里面。’”",
    author: "林达",
    title: "西班牙旅行笔记",
  },
  {
    note: "“他们中的佼佼者知道，巅峰的竞技状态永远不会出现在他们思来想去的时候。”",
    author: "安德鲁·怀尔斯",
    title: "心态制胜",
  },
  
];

export default function Reading() {
  return (
    <>
      <Nav />
      
      <p className="mb-12" style={{ color: "var(--color-ink-muted)" }}>
        you are what you read.
      </p>

      <ul className="space-y-8 list-disc pl-5">
  {books.map((b, i) => (
    <li key={i} className="pl-2" style={{ color: "var(--color-ink-muted)" }}>
    {b.note && <p className="mb-1" style={{ color: "var(--color-ink)" }}>{b.note}</p>}
    <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
      — {b.author},《{b.title}》
    </p>
  </li>
        ))}
      </ul>

      <Footer />
    </>
  );
}
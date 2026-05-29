import { Feed } from "feed";
import { getAllPosts } from "@/lib/content";

export const dynamic = "force-static";

export async function GET() {
  const site = "https://example.com"; // 改成你的域名
  const feed = new Feed({
    title: "Michael",
    description: "独立开发者，产品设计师的博客。",
    id: site,
    link: site,
    language: "zh-CN",
    copyright: `© ${new Date().getFullYear()} Michael`,
    feedLinks: { rss2: `${site}/feed.xml` },
    author: { name: "Michael" },
  });

  getAllPosts().forEach((p) => {
    feed.addItem({
      title: p.title,
      id: `${site}/blog/${p.slug}/`,
      link: `${site}/blog/${p.slug}/`,
      description: p.summary,
      date: new Date(p.date),
    });
  });

  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/xml" },
  });
}

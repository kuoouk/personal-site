import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
  readingTime: string;
};

export type Post = PostMeta & { content: string };

function readCollection(collection: "blog" | "notes"): Post[] {
  const dir = path.join(CONTENT_ROOT, collection);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "1970-01-01",
      summary: data.summary,
      tags: data.tags,
      readingTime: readingTime(content).text,
      content,
    } as Post;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): Post[] {
  return readCollection("blog");
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getAllNotes(): Post[] {
  return readCollection("notes");
}

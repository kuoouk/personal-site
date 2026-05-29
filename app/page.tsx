import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import remarkGfm from "remark-gfm";

export const metadata = { title: "博客" };

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <h1 className="text-2xl mb-12" style={{ fontWeight: 500 }}>博客</h1>

      {posts.map((p) => (
        <article key={p.slug} className="prose-article mb-16">
          <h2 style={{ marginTop: 0 }}>{p.title}</h2>
          <p className="font-en text-sm" style={{ color: "var(--color-ink-muted)", marginTop: "-0.5rem" }}>
            {format(new Date(p.date), "yyyy-MM-dd")}
            {"  "}
            <Link href={`/blog/${p.slug}`} style={{ color: "var(--color-ink-muted)" }}>
              permalink
            </Link>
          </p>
          <MDXRemote
            source={p.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </article>
      ))}

      <Footer />
    </>
  );
}
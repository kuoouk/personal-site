import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getAllPosts, getPost } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { ZoomImage } from "@/components/ZoomImage";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "未找到" };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <article className="prose-article">
        <h1>{post.title}</h1>
        <p className="font-en text-sm" style={{ color: "var(--color-ink-muted)" }}>
          {format(new Date(post.date), "yyyy.MM.dd")} · {post.readingTime}
        </p>
        <hr />
        <MDXRemote
          source={post.content}
          components={{ img: ZoomImage }}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </article>
      <Footer />
    </>
  );
}

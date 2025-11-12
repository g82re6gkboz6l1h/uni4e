import { Post } from "@/interfaces/post";
import Link from "next/link";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  if (!posts.length) {
    return null;
  }

  const featurePosts = posts.slice(0, Math.min(posts.length, 6));

  return (
    <section id="deep-dives" className="mt-24 animate-fade-up">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400 dark:text-slate-400">
            Latest dispatches
          </span>
          <h2 className="section-title text-balance">
            Fresh analyses and practical experiments
          </h2>
        </div>
        <Link href="#newsletter" className="btn-ghost">
          Weekly digest →
        </Link>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {featurePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            image={post.image}
            slug={post.slug}
            meta={post.meta}
            date={post.date}
            tags={post.tags}
            readingMinutes={post.readingMinutes}
          />
        ))}
      </div>
    </section>
  );
}

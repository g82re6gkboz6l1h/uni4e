import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import Header from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  if (!allPosts.length) {
    return null;
  }

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  const briefingPosts = morePosts.slice(0, 3);
  const toolkitHighlights = heroPost?.tags?.slice(0, 4) ?? [];

  const formatBriefDate = (value: string) =>
    new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    }).format(new Date(value));

  return (
    <main className="pb-32">
      <Header />
      <Container>
        <HeroPost
          title={heroPost.title}
          image={heroPost.image}
          slug={heroPost.slug}
          meta={heroPost.meta}
          tags={heroPost.tags}
          date={heroPost.date}
          readingMinutes={heroPost.readingMinutes}
        />

        {briefingPosts.length > 0 && (
          <section
            className="mt-20 animate-fade-up"
            aria-labelledby="briefings-heading"
          >
            <div className="surface-muted">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400 dark:text-slate-400">
                    Rapid recaps
                  </span>
                  <h2
                    id="briefings-heading"
                    className="text-2xl font-display text-ink-900 dark:text-white md:text-3xl"
                  >
                    Signals you can absorb in minutes
                  </h2>
                  <p className="max-w-2xl text-sm text-ink-600 dark:text-slate-300 md:text-base">
                    Short takes from the lab—automation tactics, performance
                    wins, and cultural shifts distilled for your next stand-up.
                  </p>
                </div>
                <Link href="#newsletter" className="btn-secondary">
                  Get the digest
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {briefingPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="group flex h-full flex-col gap-4 rounded-2xl border border-sand-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                  >
                    {post.date && (
                      <time
                        dateTime={post.date}
                        className="text-xs font-semibold uppercase tracking-[0.35em] text-ink-400 dark:text-slate-400"
                      >
                        {formatBriefDate(post.date)}
                      </time>
                    )}
                    <h3 className="font-display text-xl leading-snug text-ink-900 transition-colors duration-200 group-hover:text-rust dark:text-white">
                      {post.title}
                    </h3>
                    <p className="line-clamp-4 text-sm leading-relaxed text-ink-600 dark:text-slate-300">
                      {post.meta}
                    </p>
                    {typeof post.readingMinutes === "number" && (
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink-400 dark:text-slate-400">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8v4l2.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {post.readingMinutes} min read
                      </span>
                    )}
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-rust-600 transition-colors duration-200 group-hover:text-rust-500">
                      Read summary
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 7h8m0 0L8 3m3 4-3 4"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>

      <section id="newsletter" className="mt-28">
        <Container>
          <div className="surface-card px-8 py-12 md:px-12 lg:px-14">
            <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400 dark:text-slate-400">
                  Dispatch
                </span>
                <h2 className="mt-3 font-display text-3xl text-balance text-ink-900 dark:text-white md:text-4xl">
                  Join the QA Observatory bulletin
                </h2>
                <p className="mt-3 max-w-xl text-sm text-ink-600 dark:text-slate-300 md:text-base">
                  Receive weekly signal boosts: curated reads, tooling prompts,
                  and facilitation prompts to elevate your quality strategy.
                </p>

                <form
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                  action="#"
                  method="post"
                >
                  <label className="sr-only" htmlFor="newsletter-email">
                    Email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="yourname@company.com"
                    className="form-field sm:max-w-xs"
                  />
                  <button type="submit" className="btn-primary">
                    Subscribe
                  </button>
                </form>
                <p className="mt-4 text-xs text-ink-400 dark:text-slate-500">
                  No spam. One-click unsubscribe. Carefully curated by QA
                  leaders every Tuesday.
                </p>
              </div>

              <div className="rounded-2xl border border-sand-200 bg-white p-8 text-sm text-ink-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                <h3 className="font-display text-xl text-ink-900 dark:text-white">
                  This week&apos;s toolkit
                </h3>
                <ul className="mt-6 space-y-4">
                  {toolkitHighlights.length > 0 ? (
                    toolkitHighlights.map((tag) => (
                      <li key={tag} className="flex items-start gap-3">
                        <span className="flex-1 text-sm leading-relaxed">
                          {tag}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm leading-relaxed text-ink-500 dark:text-slate-400">
                      Fresh resources drop here every Tuesday.
                    </li>
                  )}
                </ul>
                <div className="mt-6 rounded-2xl border border-sand-200 bg-sand-50 p-4 text-xs text-ink-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-400">
                  <p>
                    Bonus: members gain access to our facilitation checklist for
                    inclusive bug triage meetings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

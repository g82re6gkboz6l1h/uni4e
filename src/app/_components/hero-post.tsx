import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
  tags?: string[];
  date?: string;
  readingMinutes?: number;
};

export function HeroPost({
  title,
  image,
  slug,
  meta,
  tags = [],
  date,
  readingMinutes,
}: Props) {
  const highlightedTags = tags.slice(0, 3);
  const formattedDate = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date))
    : null;

  return (
    <section id="latest" className="mb-24 mt-12 animate-fade-up">
      <div className="surface-card px-8 py-10 md:px-12 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-col justify-center gap-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400 dark:text-slate-400">
                Featured insight
              </span>
              <h1 className="font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
                {title}
              </h1>
            </div>

            <p className="text-base leading-relaxed text-ink-600 dark:text-slate-300 md:text-lg">
              {meta}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/posts/${slug}`} className="btn-primary">
                Read article
              </Link>
              {formattedDate && (
                <time
                  className="text-sm font-medium text-ink-500 dark:text-slate-400"
                  dateTime={date ?? undefined}
                >
                  {formattedDate}
                </time>
              )}
            </div>

            {highlightedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 text-xs font-medium text-ink-500 dark:text-slate-400">
                {highlightedTags.map((tag) => (
                  <span key={tag} className="badge-tonal">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {(formattedDate || typeof readingMinutes === "number") && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {formattedDate && (
                  <div className="rounded-2xl border border-sand-200 bg-white px-4 py-3 text-sm text-ink-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400 dark:text-slate-400">
                      Published
                    </p>
                    <p className="mt-1 font-medium text-ink-800 dark:text-white">
                      {formattedDate}
                    </p>
                  </div>
                )}
                {typeof readingMinutes === "number" && (
                  <div className="rounded-2xl border border-sand-200 bg-white px-4 py-3 text-sm text-ink-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-400 dark:text-slate-400">
                      Reading time
                    </p>
                    <p className="mt-1 font-medium text-ink-800 dark:text-white">
                      {readingMinutes} minute{readingMinutes === 1 ? "" : "s"}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-sand-200 shadow-sm dark:border-white/10">
            <CoverImage
              title={title}
              src={image}
              slug={slug}
              aspect="portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

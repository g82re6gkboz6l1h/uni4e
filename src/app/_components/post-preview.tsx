import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  image: string;
  slug: string;
  meta: string;
  date?: string;
  tags?: string[];
  readingMinutes?: number;
};

export function PostPreview({
  title,
  image,
  slug,
  meta,
  date,
  tags = [],
  readingMinutes,
}: Props) {
  const primaryTag = tags[0];
  const formattedDate = date
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(date))
    : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
      <div className="relative overflow-hidden">
        <CoverImage slug={slug} title={title} src={image} aspect="square" />
        {primaryTag && (
          <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-ink-600 shadow-sm dark:bg-black/50 dark:text-slate-100">
            {primaryTag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
        {formattedDate && (
          <time
            className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-ink-400 dark:text-slate-400"
            dateTime={date}
          >
            {formattedDate}
          </time>
        )}

        <h3 className="mt-3 font-display text-2xl leading-snug text-ink-900 transition-colors duration-200 group-hover:text-rust dark:text-white">
          <Link href={`/posts/${slug}`}>{title}</Link>
        </h3>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink-600 dark:text-slate-300">
          {meta}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-rust-600 transition-colors duration-200 group-hover:text-rust-500 dark:text-slate-200">
          <Link
            href={`/posts/${slug}`}
            className="inline-flex items-center gap-2"
          >
            Continue reading
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          {typeof readingMinutes === "number" ? (
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-ink-400 dark:text-slate-400">
              {readingMinutes} min read
            </span>
          ) : (
            <span className="hidden text-[0.65rem] uppercase tracking-[0.32em] text-ink-300 dark:text-slate-500 sm:inline">
              QA
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-sand-200 bg-sand-50 dark:border-white/10 dark:bg-[#0b0f19]">
      <Container>
        <div className="py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <p className="font-display text-xl font-semibold text-ink-900 dark:text-white">
                QA Observatory
              </p>
              <p className="max-w-md text-sm leading-relaxed text-ink-600 dark:text-slate-300">
                Field notes for software quality leaders exploring thoughtful
                automation and resilient delivery practices.
              </p>
              <Link
                href="#newsletter"
                className="inline-flex text-sm font-semibold text-ink-700 transition-colors hover:text-rust-500 dark:text-slate-200"
              >
                Join the bulletin →
              </Link>
            </div>

            <nav className="grid grid-cols-2 gap-6 text-sm text-ink-600 dark:text-slate-300 md:w-auto">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400 dark:text-slate-400">
                  Explore
                </p>
                <Link
                  href="#latest"
                  className="transition-colors hover:text-rust-500"
                >
                  Latest briefing
                </Link>
                <Link
                  href="#deep-dives"
                  className="transition-colors hover:text-rust-500"
                >
                  Deep dives
                </Link>
                <Link
                  href="#newsletter"
                  className="transition-colors hover:text-rust-500"
                >
                  Newsletter
                </Link>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400 dark:text-slate-400">
                  Resources
                </p>
                <a
                  href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                  className="transition-colors hover:text-rust-500"
                >
                  Source template
                </a>
                <a
                  href="https://nextjs.org/docs"
                  className="transition-colors hover:text-rust-500"
                >
                  Next.js docs
                </a>
                <a
                  href="mailto:hello@qaobservatory.com"
                  className="transition-colors hover:text-rust-500"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>

          <div className="mt-10 border-t border-sand-200 pt-6 text-xs text-ink-400 dark:border-white/10 dark:text-slate-500">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} QA Observatory.</p>
              <div className="flex gap-4">
                <a href="#" className="transition-colors hover:text-rust-500">
                  Privacy
                </a>
                <a href="#" className="transition-colors hover:text-rust-500">
                  Terms
                </a>
                <a href="#" className="transition-colors hover:text-rust-500">
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

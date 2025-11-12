import Link from "next/link";

const navLinks = [
  { href: "#latest", label: "Latest" },
  { href: "#deep-dives", label: "Deep Dives" },
  { href: "#newsletter", label: "Newsletter" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-sand-50/95 backdrop-blur-sm dark:border-white/10 dark:bg-[#0b0f19]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="font-display text-xl font-semibold text-ink-900 transition-colors hover:text-rust-500 dark:text-white"
        >
          uni4e
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-ink-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-rust-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#newsletter"
          className="hidden rounded-full border border-sand-300 px-4 py-2 text-xs font-semibold text-ink-700 transition-colors hover:border-rust-400 hover:text-rust-500 dark:border-white/20 dark:text-slate-200 md:inline-flex"
        >
          Subscribe
        </Link>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";

import { Logo } from "~/components/logo";
import { ThemeToggle } from "~/components/theme-toggle";

const linkClass =
  "text-muted-foreground transition-colors hover:text-foreground";

export default function Home() {
  return (
    <section className="flex min-h-svh flex-col px-5 sm:px-10">
      <header className="flex items-center justify-between pt-10">
        <Link href="/" aria-label="Felix Fong, home">
          <Logo className="w-7" />
        </Link>
        <ThemeToggle />
      </header>

      <div className="flex flex-1 flex-col justify-center gap-6 py-16">
        <h1 className="font-pixel text-[clamp(3.5rem,8.5vw,8rem)] leading-none">
          Felix Fong
        </h1>
        <p className="max-w-80 font-sans">
          I like designing software architecture that withstands the test of
          time
        </p>
      </div>

      {/* /interests and /blog are placeholders until those pages exist. */}
      <nav className="flex flex-wrap justify-between gap-4 border-b pb-6 text-sm">
        <ul className="flex gap-6">
          <li>
            <Link className={linkClass} href="/interests" prefetch={false}>
              /interests
            </Link>
          </li>
          <li>
            <Link className={linkClass} href="/blog" prefetch={false}>
              /blog
            </Link>
          </li>
        </ul>
        <ul className="flex gap-6">
          <li>
            {/* /resume serves a PDF, not a page, so <Link> doesn't apply. */}
            {/* oxlint-disable-next-line nextjs/no-html-link-for-pages */}
            <a className={linkClass} href="/resume">
              resume
            </a>
          </li>
          <li>
            <a className={linkClass} href="https://github.com/fvcci">
              github
            </a>
          </li>
          <li>
            <a
              className={linkClass}
              href="https://www.linkedin.com/in/felixfong58/"
            >
              linkedin
            </a>
          </li>
          <li>
            <a className={linkClass} href="mailto:hi.there@fongfelix.com">
              email
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

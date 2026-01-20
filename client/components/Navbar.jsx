import Link from "next/link";

const navLinkClass =
  "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="py-3 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-xl bg-[#8324E3] shadow-sm" />
            <span className="font-extrabold tracking-tight text-lg">
              ItemsApp
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Landing sections */}
            <a className={navLinkClass} href="#features">
              Features
            </a>
            <a className={navLinkClass} href="#how-it-works">
              How it works
            </a>
            <a className={navLinkClass} href="#showcase">
              Showcase
            </a>
            <a className={navLinkClass} href="#stats">
              Stats
            </a>
            <a className={navLinkClass} href="#testimonials">
              Testimonials
            </a>
            <a className={navLinkClass} href="#cta">
              CTA
            </a>

            {/* App pages (keep these) */}
            <div className="h-6 w-px bg-slate-200 mx-1" />
            <Link className={navLinkClass} href="/items">
              Items
            </Link>
            <Link className={navLinkClass} href="/add-item">
              Add Item
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Login (kept) */}
            <Link
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition"
              href="/login"
            >
              Login
            </Link>

            {/* Mobile menu (details/summary = no JS needed) */}
            <details className="lg:hidden group relative">
              <summary className="list-none inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition cursor-pointer">
                {/* Hamburger */}
                <svg
                  className="h-5 w-5 text-slate-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              </summary>

              {/* Dropdown panel */}
              <div className="absolute right-0 mt-3 w-[min(92vw,360px)] rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                <div className="p-3">
                  <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Landing
                  </p>
                  <div className="grid gap-1">
                    <a className="px-3 py-2 rounded-xl hover:bg-slate-50" href="#features">
                      Features
                    </a>
                    <a className="px-3 py-2 rounded-xl hover:bg-slate-50" href="#how-it-works">
                      How it works
                    </a>
                    <a className="px-3 py-2 rounded-xl hover:bg-slate-50" href="#showcase">
                      Showcase
                    </a>
                    <a className="px-3 py-2 rounded-xl hover:bg-slate-50" href="#stats">
                      Stats
                    </a>
                    <a className="px-3 py-2 rounded-xl hover:bg-slate-50" href="#testimonials">
                      Testimonials
                    </a>
                    <a className="px-3 py-2 rounded-xl hover:bg-slate-50" href="#cta">
                      CTA
                    </a>
                  </div>

                  <div className="my-3 h-px bg-slate-200" />

                  <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    App
                  </p>
                  <div className="grid gap-1">
                    <Link className="px-3 py-2 rounded-xl hover:bg-slate-50" href="/items">
                      Items
                    </Link>
                    <Link className="px-3 py-2 rounded-xl hover:bg-slate-50" href="/add-item">
                      Add Item
                    </Link>
                    <Link
                      className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#8324E3] text-white font-semibold hover:opacity-95"
                      href="/login"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}

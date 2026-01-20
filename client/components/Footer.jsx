export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200">
      {/* soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-[#8324E3]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-2xl bg-[#8324E3] shadow-sm" />
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                ItemsApp
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-600 max-w-md leading-relaxed">
              A clean full-stack demo built with Next.js and Express — focused on
              simple browsing, protected actions, and modern UI.
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-600">
              <span className="px-3 py-1 rounded-full border border-slate-200 bg-white/70">
                Next.js App Router
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-200 bg-white/70">
                Express API
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-200 bg-white/70">
                Tailwind
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-bold text-slate-900">Landing</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a className="hover:text-slate-900" href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#how-it-works">
                    How it works
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#showcase">
                    Showcase
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#testimonials">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="#cta">
                    CTA
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">App</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>
                  <a className="hover:text-slate-900" href="./items">
                    Items
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="/add-item">
                    Add Item
                  </a>
                </li>
                <li>
                  <a className="hover:text-slate-900" href="/login">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">Info</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
                  <span>Fast & responsive UI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500/50" />
                  <span>Protected routes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400/50" />
                  <span>Simple API fetch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-slate-600">
            © {year} <span className="font-semibold text-slate-900">ItemsApp</span>. Built with Next.js + Express.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold text-white bg-[#8324E3] hover:opacity-95 shadow-sm"
            >
              Get started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-4 py-2 rounded-2xl font-semibold border border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300 transition"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function FeaturesSection() {
  const features = [
    { title: "Landing Page", desc: "7 sections with clean, responsive UI built using Tailwind." },
    { title: "Public Items List", desc: "Fetch and render items from an Express API endpoint." },
    { title: "Item Details", desc: "Dynamic route for full product details page." },
    { title: "Mock Auth (Cookies)", desc: "Hardcoded email/password, token stored in httpOnly cookie." },
    { title: "Protected Route", desc: "Middleware checks cookie before allowing access to /add-item." },
    { title: "Create Item + Toast", desc: "Add item form calls server and shows toast on success." },
  ];

  return (
    <section id="features" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#8324E3]/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
              Features
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Everything you need for a clean demo app
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              A polished setup that highlights routing, server fetch, and protected pages — with a UI designed for
              modern landing pages.
            </p>
          </div>

          {/* Side note card */}
          <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur px-5 py-4 max-w-xl">
            <p className="text-sm font-semibold text-slate-900">Built for clarity</p>
            <p className="text-sm text-slate-600 mt-1">
              Clean spacing, consistent typography, and a brand-first accent color.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, idx) => (
            <div
              key={f.title}
              className="group relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {/* Icon bubble */}
                  <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center">
                    <span className="text-sm font-extrabold text-[#8324E3]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {f.title}
                  </h3>
                </div>

                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-slate-500">
                  Learn more →
                </span>
              </div>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>

              {/* Divider + micro highlight */}
              <div className="mt-6 h-px bg-slate-200" />
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#8324E3]/70" />
                <span>Optimized UI + predictable UX</span>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#8324E3]/10 blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom hint */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-slate-900">Want the next section?</p>
              <p className="text-sm text-slate-600 mt-1">
                Send <span className="font-semibold">HowItWorksSection</span> and I’ll redesign it to match this style.
              </p>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold text-white bg-[#8324E3] hover:opacity-95 shadow-sm"
            >
              Jump to CTA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

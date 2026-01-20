export default function ShowcaseSection() {
  const cards = [
    {
      title: "Explore the Collection",
      desc: "Browse a clean, responsive grid that highlights each item with clarity and balance.",
      label: "Public page",
    },
    {
      title: "Focus on Details",
      desc: "Dive into a single item with a distraction-free layout built for readability.",
      label: "Dynamic route",
    },
    {
      title: "Create with Confidence",
      desc: "A protected flow that lets you add new items securely and effortlessly.",
      label: "Protected",
    },
  ];

  return (
    <section id="showcase" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-[#8324E3]/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
            Showcase
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Designed pages that feel like a real product
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Each page is crafted to guide users naturally — from discovery to action — without unnecessary complexity.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="group relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Visual top */}
              <div className="relative h-44 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
                <div className="h-16 w-16 rounded-2xl border border-slate-200 bg-white flex items-center justify-center">
                  <span className="text-lg font-extrabold text-[#8324E3]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#8324E3]/10 blur-2xl" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold text-slate-900">
                    {c.title}
                  </h3>
                  <span className="text-xs font-semibold rounded-full border border-slate-200 bg-white px-2 py-1 text-slate-600">
                    {c.label}
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {c.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-[#8324E3]/70" />
                  <span>Optimized layout & UX</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-slate-900">
              Want to see it in action?
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Jump into the app and explore the flow yourself.
            </p>
          </div>

          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold text-white bg-[#8324E3] hover:opacity-95 shadow-sm"
          >
            Try it now
          </a>
        </div>
      </div>
    </section>
  );
}

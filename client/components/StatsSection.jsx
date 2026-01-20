export default function StatsSection() {
  const stats = [
    { label: "Routes & Pages", value: "5+", hint: "Landing + app flow" },
    { label: "Auth", value: "Cookie", hint: "Protected actions" },
    { label: "API", value: "Express", hint: "Simple JSON endpoints" },
    { label: "UI", value: "Tailwind", hint: "Modern responsive layout" },
  ];

  return (
    <section id="stats" className="relative overflow-hidden py-16 sm:py-20">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#8324E3]/10 blur-3xl" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(248,250,252,1))]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
              Stats
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              A quick snapshot of what’s inside
            </h2>

            <p className="mt-3 text-lg text-slate-600">
              A compact full-stack build that demonstrates clean routing, guarded flows, and an API-driven UI.
            </p>
          </div>

          {/* Highlight chip */}
          <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-5">
            <p className="text-sm font-bold text-slate-900">Built for demos</p>
            <p className="text-sm text-slate-600 mt-1">
              Minimal code, maximum clarity.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className="group relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {s.label}
                  </p>
                  <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">
                    {s.value}
                  </p>
                </div>

                <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center">
                  <span className="text-sm font-extrabold text-[#8324E3]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600">{s.hint}</p>

              <div className="mt-5 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#8324E3]/60"
                  style={{ width: `${(idx + 1) * 22}%` }}
                />
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#8324E3]/10 blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom jump */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-slate-900">Next section</p>
            <p className="text-sm text-slate-600 mt-1">
              Send your <span className="font-semibold">TestimonialsSection</span> and I’ll redesign it to match.
            </p>
          </div>

          <a
            href="#testimonials"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold border border-slate-200 bg-white/70 hover:bg-white hover:border-slate-300 transition"
          >
            Go to testimonials
          </a>
        </div>
      </div>
    </section>
  );
}

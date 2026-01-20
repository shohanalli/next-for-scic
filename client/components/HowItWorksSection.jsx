export default function HowItWorksSection() {
  const steps = [
    {
      title: "Discover",
      desc: "Start instantly—browse what’s available and explore the list with a clean, fast UI.",
      tag: "Public",
    },
    {
      title: "Inspect",
      desc: "Open any item to see details in a focused layout designed for clarity and speed.",
      tag: "Details",
    },
    {
      title: "Unlock",
      desc: "Sign in to enable protected actions and keep the create flow secure and simple.",
      tag: "Auth",
    },
    {
      title: "Create",
      desc: "Add a new item from the protected page—smooth form UX with a polished finish.",
      tag: "Protected",
    },
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden py-16 sm:py-20">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-[#8324E3]/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
              How it works
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              A smooth flow from browsing to creating
            </h2>

            <p className="mt-3 text-lg text-slate-600 max-w-2xl">
              Designed like a real product experience: explore publicly, dive into details, then unlock protected actions.
            </p>
          </div>

          {/* Mini highlight card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-5">
              <p className="text-sm font-bold text-slate-900">Quick checklist</p>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#8324E3]/70" />
                  <span>Public list & details</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500/50" />
                  <span>Cookie-based access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400/50" />
                  <span>Protected create flow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow"
            >
              {/* top */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-2xl border border-slate-200 bg-white flex items-center justify-center">
                    <span className="text-sm font-extrabold text-[#8324E3]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{s.title}</p>
                    <span className="mt-1 inline-flex text-xs font-semibold text-slate-600 rounded-full border border-slate-200 bg-white px-2 py-0.5">
                      {s.tag}
                    </span>
                  </div>
                </div>

                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold text-slate-500">
                  →
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">{s.desc}</p>

              {/* progress bar */}
              <div className="mt-6 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#8324E3]/60"
                  style={{ width: `${(i + 1) * 25}%` }}
                />
              </div>

              {/* glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#8324E3]/10 blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6">
          <div>
            <p className="text-sm font-bold text-slate-900">Next up</p>
            <p className="text-sm text-slate-600 mt-1">
              Send your <span className="font-semibold">ShowcaseSection</span> or{" "}
              <span className="font-semibold">StatsSection</span> — I’ll redesign it in the same style.
            </p>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold text-white bg-[#8324E3] hover:opacity-95 shadow-sm"
          >
            Go to CTA
          </a>
        </div>
      </div>
    </section>
  );
}

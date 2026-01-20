export default function TestimonialsSection() {
  const items = [
    {
      role: "Hiring Perspective",
      name: "Technical Recruiter",
      quote:
        "Clear routing, API usage, and guarded flows. A compact demo that reflects real-world fundamentals.",
    },
    {
      role: "Engineering Perspective",
      name: "Frontend Developer",
      quote:
        "Well-organized structure with public and protected routes. Easy to read, extend, and maintain.",
    },
    {
      role: "End-User Perspective",
      name: "Product User",
      quote:
        "Browsing feels fast and intuitive, and the add-item flow is straightforward once signed in.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-20"
    >
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
            Testimonials
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Different views, one solid experience
          </h2>

          <p className="mt-3 text-lg text-slate-600">
            Feedback from different perspectives highlights how the app works for
            teams, developers, and users alike.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div
              key={t.name}
              className="group relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow"
            >
              {/* Quote mark */}
              <div className="flex items-start justify-between">
                <span className="text-4xl font-extrabold text-[#8324E3]/20">
                  “
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {t.quote}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-200 border border-slate-300" />
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#8324E3]/10 blur-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-slate-900">
              Ready to explore it yourself?
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Experience the flow from browsing to creating.
            </p>
          </div>

          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold text-white bg-[#8324E3] hover:opacity-95 shadow-sm"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}

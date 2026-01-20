import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#8324E3]/15 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(131,36,227,0.12),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
              Built with Next.js • Fast • SEO-friendly
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              A modern way to
              <span className="text-[#8324E3]"> manage items</span>
              <span className="block">without the clutter.</span>
            </h1>

            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              Clean UI, quick navigation, and a smooth experience from browsing to adding new items.
              Designed to look premium on every device.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/items"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold text-white bg-[#8324E3] hover:opacity-95 shadow-sm"
              >
                Browse Items
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold border border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300 transition"
              >
                Login
              </Link>

              <Link
                href="/add-item"
                className="inline-flex items-center justify-center px-5 py-3 rounded-2xl font-semibold border border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300 transition"
              >
                Add Item (Protected)
              </Link>
            </div>

            {/* Mini trust row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4">
                <p className="font-bold text-slate-900">Fast UI</p>
                <p className="mt-1 text-xs">Optimized layout & spacing</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4">
                <p className="font-bold text-slate-900">Clean UX</p>
                <p className="mt-1 text-xs">Easy to browse & explore</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 col-span-2 sm:col-span-1">
                <p className="font-bold text-slate-900">Protected Flow</p>
                <p className="mt-1 text-xs">Login → Add item</p>
              </div>
            </div>
          </div>

          {/* Right (Visual Mock UI) */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-5 sm:p-6 shadow-lg">
                {/* Top bar */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold tracking-tight text-slate-900">
                      Item Dashboard
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Quick overview & actions
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#8324E3]/10 text-[#8324E3] px-3 py-1 text-xs font-semibold">
                    <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
                    Live
                  </span>
                </div>

                {/* Cards */}
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "New arrivals", value: "24", hint: "items this week" },
                    { name: "Saved items", value: "112", hint: "in your list" },
                    { name: "Views", value: "3.4k", hint: "last 7 days" },
                    { name: "Conversion", value: "12.8%", hint: "avg rate" },
                  ].map((x) => (
                    <div
                      key={x.name}
                      className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <p className="text-xs font-semibold text-slate-500">
                        {x.name}
                      </p>
                      <div className="mt-2 flex items-end justify-between">
                        <p className="text-2xl font-extrabold tracking-tight text-slate-900">
                          {x.value}
                        </p>
                        <p className="text-xs text-slate-500">{x.hint}</p>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full w-2/3 bg-[#8324E3]/60 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* List preview */}
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      Recent items
                    </p>
                    <p className="text-xs text-slate-500">Updated now</p>
                  </div>

                  <div className="mt-3 space-y-3">
                    {["Aurora Bottle", "Nova Headset", "Slate Lamp"].map((t) => (
                      <div
                        key={t}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {t}
                            </p>
                            <p className="text-xs text-slate-500">
                              Tap to view details
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-slate-600 rounded-full border border-slate-200 px-2 py-1">
                          View
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow blobs */}
              <div className="absolute -z-10 -top-10 -right-10 h-44 w-44 rounded-full bg-[#8324E3]/20 blur-3xl" />
              <div className="absolute -z-10 -bottom-10 -left-10 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

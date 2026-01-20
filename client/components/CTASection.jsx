import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden py-16 sm:py-20">
      {/* Soft background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#8324E3]/15 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-10 shadow-lg">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
                Get started in seconds
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Explore items, then jump in when you’re ready.
              </h2>

              <p className="mt-3 text-slate-600 text-lg max-w-2xl">
                Browse the collection instantly. When you want to add something new, sign in and use the protected flow.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/items"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold text-white bg-[#8324E3] hover:opacity-95 shadow-sm"
                >
                  Open Items
                </Link>

                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-semibold border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition"
                >
                  Login
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
                <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">
                  Public browsing
                </span>
                <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">
                  Protected add-item
                </span>
                <span className="px-3 py-1 rounded-full border border-slate-200 bg-white">
                  Fast & responsive
                </span>
              </div>
            </div>

            {/* Right visual card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900">Quick actions</p>
                  <span className="text-xs font-semibold text-[#8324E3] bg-[#8324E3]/10 px-3 py-1 rounded-full">
                    Recommended
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm font-semibold text-slate-900">Browse & view details</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Start exploring without signing in.
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-[#8324E3]/60" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm font-semibold text-slate-900">Login to add items</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Protected flow for creating new entries.
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full w-1/2 rounded-full bg-indigo-500/30" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                    <p className="text-xs font-semibold text-slate-600">
                      Tip
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Place this CTA near the end of the page to increase conversions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </section>
  );
}

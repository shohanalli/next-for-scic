import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Price badge */}
        <div className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-bold text-slate-900 shadow-sm">
          ${Number(item.price).toFixed(2)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-1">
          {item.name}
        </h3>

        <p className="mt-2 text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="h-2 w-2 rounded-full bg-[#8324E3]" />
            Available
          </span>

          <Link
            href={`/items/${item.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#8324E3] hover:gap-2 transition-all"
          >
            View details
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#8324E3]/10 blur-3xl" />
      </div>
    </div>
  );
}

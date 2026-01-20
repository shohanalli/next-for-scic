import { API_BASE } from "@/lib/api";

export default async function ItemDetailsPage({ params }) {
  const res = await fetch(`${API_BASE}/items/${params.id}`, { cache: "no-store" });

  if (res.status === 404) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-bold">Item not found</h1>
      </div>
    );
  }

  if (!res.ok) throw new Error("Failed to fetch item");

  const item = await res.json();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={item.image}
          alt={item.name}
          className="w-full rounded-xl object-cover"
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="text-gray-700">{item.description}</p>
          <p className="font-bold text-xl">
            ${Number(item.price).toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">
            Category: {item.category || "General"}
          </p>
        </div>
      </div>
    </div>
  );
}

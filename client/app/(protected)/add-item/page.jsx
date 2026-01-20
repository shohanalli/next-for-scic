"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("https://picsum.photos/seed/new/600/400");
  const [category, setCategory] = useState("General");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/items/create", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name,
        description,
        price: Number(price),
        image,
        category,
      }),
    });

    setLoading(false);

    if (!res.ok) {
      toast.error("Failed to create item");
      return;
    }

    toast.success("Item created successfully!");
    setName("");
    setDescription("");
    setPrice(0);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Add Item</h1>

      <form onSubmit={submit} className="space-y-4 border rounded-xl p-6">
        <div>
          <label className="text-sm">Name</label>
          <input
            className="mt-1 w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm">Description</label>
          <textarea
            className="mt-1 w-full border rounded px-3 py-2"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Price</label>
            <input
              className="mt-1 w-full border rounded px-3 py-2"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm">Category</label>
            <input
              className="mt-1 w-full border rounded px-3 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="text-sm">Image URL</label>
          <input
            className="mt-1 w-full border rounded px-3 py-2"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button
          disabled={loading}
          className="rounded bg-black text-white px-4 py-2 disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Item"}
        </button>
      </form>
    </div>
  );
}

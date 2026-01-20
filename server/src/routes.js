import { Router } from "express";
import crypto from "crypto";
import { readItems, writeItems, getItemById } from "./db.js";

const router = Router();

// Public: list
router.get("/items", (_req, res) => {
  res.json(readItems());
});

// Public: details
router.get("/items/:id", (req, res) => {
  const item = getItemById(req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// Protected (simple token)
function requireAuth(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token || token !== process.env.MOCK_TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

// Protected: add item
router.post("/items", requireAuth, (req, res) => {
  const body = req.body;

  if (!body?.name || !body?.description || typeof body.price !== "number" || !body?.image) {
    return res.status(400).json({ message: "Invalid payload" });
  }

  const items = readItems();
  const newItem = {
    id: crypto.randomUUID(),
    name: body.name,
    description: body.description,
    price: body.price,
    image: body.image,
    category: body.category || "General",
  };

  items.unshift(newItem);
  writeItems(items);

  res.status(201).json(newItem);
});

export default router;

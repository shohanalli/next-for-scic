import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "items.json");

export function readItems() {
  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw);
}

export function writeItems(items) {
  fs.writeFileSync(DB_PATH, JSON.stringify(items, null, 2));
}

export function getItemById(id) {
  return readItems().find((x) => x.id === id);
}

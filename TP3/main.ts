// main.ts
import { add, subtract } from "./index.js"; // ✅ ajouter .js même si c'est du TypeScript

console.log(add(5, 3));
console.log(subtract(10, 4));

import type { User } from "./types.js"; // pour TypeScript type-only import

const u: User = {
  id: 1,
  name: "Ons"
};

console.log(u);

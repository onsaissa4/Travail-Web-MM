import { add, subtract } from "./index";
import type { User } from "./types";

console.log(add(5, 3));
console.log(subtract(10, 4));

const u: User = {
    id: 1,
    name: "Ons"
};

console.log(u);

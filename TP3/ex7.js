"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(value) {
    return value;
}
function getFirst(arr) {
    return arr[0];
}
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        this.items = this.items.filter(i => i !== item);
    }
    getAll() {
        return this.items;
    }
}
const a = identity(10);
const b = identity("Hello");
console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));
const repo = new Repository();
repo.add(10);
repo.add(20);
repo.remove(10);
console.log(repo.getAll());
const response = {
    data: [1, 2, 3]
};
//# sourceMappingURL=ex7.js.map
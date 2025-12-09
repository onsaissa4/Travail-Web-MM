// --- Fonctions génériques ---
function identity(value) {
    return value;
}
function getFirst(arr) {
    return arr[0];
}
// --- Classe générique Repository ---
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
function main() {
    const a = identity(10);
    const b = identity("Hello");
    console.log("Identity a:", a);
    console.log("Identity b:", b);
    console.log("First number:", getFirst([1, 2, 3]));
    console.log("First string:", getFirst(["a", "b", "c"]));
    const repo = new Repository();
    repo.add(10);
    repo.add(20);
    repo.remove(10);
    console.log("Repository items:", repo.getAll());
    const response = {
        data: [1, 2, 3]
    };
    console.log("API response data:", response.data);
}
main();
export {};
//# sourceMappingURL=ex7.js.map
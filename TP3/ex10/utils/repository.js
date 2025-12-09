export class Repository {
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
    find(predicate) {
        return this.items.find(predicate);
    }
}
//# sourceMappingURL=repository.js.map
export declare class Repository<T> {
    private items;
    add(item: T): void;
    remove(item: T): void;
    getAll(): T[];
    find(predicate: (item: T) => boolean): T | undefined;
}
//# sourceMappingURL=repository.d.ts.map
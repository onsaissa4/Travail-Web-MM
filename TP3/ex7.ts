function identity<T>(value: T): T {
    return value;
}

function getFirst<T>(arr: T[]): T | undefined {
    return arr[0];
}


class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }

    getAll(): T[] {
        return this.items;
    }
}

interface ApiResponse<T> {
    data: T;
    error?: string;
}

const a = identity<number>(10);
const b = identity<string>("Hello");

console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));

const repo = new Repository<number>();
repo.add(10);
repo.add(20);
repo.remove(10);
console.log(repo.getAll());

const response: ApiResponse<number[]> = {
    data: [1, 2, 3]
};

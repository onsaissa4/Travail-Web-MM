"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function greet(name, age) {
    if (age) {
        return `Hello ${name}, you are ${age} years old.`;
    }
    return `Hello ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob", 30));
function power(base, exp = 2) {
    return Math.pow(base, exp);
}
console.log(power(3));
console.log(power(3, 3));
function combine(a, b) {
    return a + b;
}
console.log(combine(5, 10));
console.log(combine("Hello ", "World"));
//# sourceMappingURL=ex5.js.map
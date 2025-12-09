function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old.`;
  }
  return `Hello ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob", 30));

function power(base: number, exp: number = 2): number {
  return Math.pow(base, exp);
}

console.log(power(3));
console.log(power(3, 3));

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(5, 10));
console.log(combine("Hello ", "World"));
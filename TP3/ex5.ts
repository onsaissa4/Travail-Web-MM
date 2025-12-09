// --- Fonctions ---
// add
function add(a: number, b: number): number {
  return a + b;
}

// greet
function greet(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old.`;
  }
  return `Hello ${name}!`;
}

// power
function power(base: number, exp: number = 2): number {
  return Math.pow(base, exp);
}

// combine avec overloads et check de type
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // addition pour les nombres
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // concaténation pour les chaînes
  }
  throw new Error("Invalid arguments: both must be numbers or both must be strings");
}


function main() {
  
  console.log("Add:", add(5, 10));

  console.log(greet("Alice"));
  console.log(greet("Bob", 30));

 
  console.log("Power default:", power(3));
  console.log("Power 3^3:", power(3, 3));

  
  console.log("Combine numbers:", combine(5, 10));
  console.log("Combine strings:", combine("Hello ", "World"));
}

// Appel de la fonction principale
main();

// --- Classes de base ---
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

class Student extends Person {
  school: string;

  constructor(name: string, age: number, school: string) {
    super(name, age);
    this.school = school;
  }

  study(): string {
    return `${this.name} is studying at ${this.school}`;
  }
}

// --- Classes Shape ---
abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

// --- Interface Drivable et classe Car ---
interface Drivable {
  drive(): string;
}

class Car implements Drivable {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive(): string {
    return `Driving a ${this.brand}`;
  }
}

// --- UTILISATION (main) ---
function main() {
  // Person & Student
  const person = new Person("John", 30);
  console.log(person.greet());

  const student = new Student("Alice", 20, "Harvard");
  console.log(student.greet());
  console.log(student.study());

  // Shapes
  const circle = new Circle(5);
  console.log("Circle area:", circle.area());

  const rectangle = new Rectangle(4, 6);
  console.log("Rectangle area:", rectangle.area());

  // Car
  const car = new Car("Toyota");
  console.log(car.drive());
}

// Appel de la fonction principale
main();

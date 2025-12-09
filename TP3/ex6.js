// --- Classes de base ---
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
class Student extends Person {
    school;
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    study() {
        return `${this.name} is studying at ${this.school}`;
    }
}
// --- Classes Shape ---
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
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
export {};
//# sourceMappingURL=ex6.js.map
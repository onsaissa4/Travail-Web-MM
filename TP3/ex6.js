"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=ex6.js.map
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